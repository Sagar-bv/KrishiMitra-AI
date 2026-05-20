"use client";

import { useEffect, useRef, useState, useCallback } from "react";

interface WebSocketOptions {
    url: string;
    onMessage: (event: MessageEvent) => void;
    autoReconnect?: boolean;
    reconnectInterval?: number;
}

export const useWebSocket = ({
    url,
    onMessage,
    autoReconnect = true,
    reconnectInterval = 5000,
}: WebSocketOptions) => {
    const [isConnected, setIsConnected] = useState(false);
    const wsRef = useRef<WebSocket | null>(null);
    const onMessageRef = useRef(onMessage);

    useEffect(() => {
        onMessageRef.current = onMessage;
    }, [onMessage]);

    const connect = useCallback(() => {
        if (wsRef.current?.readyState === WebSocket.OPEN) return;

        const ws = new WebSocket(url);
        wsRef.current = ws;

        ws.onopen = () => setIsConnected(true);
        ws.onclose = () => {
            setIsConnected(false);
            if (autoReconnect) {
                setTimeout(() => connect(), reconnectInterval);
            }
        };
        ws.onerror = (error) => console.error("WebSocket cluster link exception:", error);
        ws.onmessage = (event) => onMessageRef.current(event);
    }, [url, autoReconnect, reconnectInterval]);

    useEffect(() => {
        connect();
        return () => {
            if (wsRef.current) {
                wsRef.current.onclose = null;
                wsRef.current.close();
            }
        };
    }, [connect]);

    const sendEvent = useCallback((payload: any) => {
        if (wsRef.current?.readyState === WebSocket.OPEN) {
            wsRef.current.send(JSON.stringify(payload));
        } else {
            console.warn("WebSocket stream frame dropped: transaction link not open.");
        }
    }, []);

    return { isConnected, sendEvent };
};