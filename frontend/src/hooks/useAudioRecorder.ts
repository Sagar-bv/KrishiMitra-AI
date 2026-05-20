"use client";

import { useState, useEffect, useRef } from "react";

interface SpeechRecognitionEvent {
    resultIndex: number;
    results: {
        [index: number]: {
            [index: number]: {
                transcript: string;
            };
            isFinal: boolean;
        };
    };
}

interface SpeechRecognitionInstance {
    continuous: boolean;
    interimResults: boolean;
    lang: string;
    start: () => void;
    stop: () => void;
    onstart: () => void;
    onend: () => void;
    onerror: (event: { error: string }) => void;
    onresult: (event: SpeechRecognitionEvent) => void;
}

export const useAudioRecorder = (onTranscriptComplete?: (text: string) => void) => {
    const [isRecording, setIsRecording] = useState(false);
    const [transcript, setTranscript] = useState("");
    const recognitionRef = useRef<SpeechRecognitionInstance | null>(null);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const SpeechRecognition =
                (window as any).SpeechRecognition || (window as any).webkitSpeechRecognition;

            if (SpeechRecognition) {
                const recognition = new SpeechRecognition() as SpeechRecognitionInstance;
                recognition.continuous = false;
                recognition.interimResults = true;
                recognition.lang = "en-IN";

                recognition.onstart = () => setIsRecording(true);
                recognition.onend = () => setIsRecording(false);
                recognition.onerror = (err) => {
                    console.error("Speech systems fault:", err.error);
                    setIsRecording(false);
                };

                recognition.onresult = (event: SpeechRecognitionEvent) => {
                    let currentTranscript = "";
                    for (let i = event.resultIndex; i < event.results.length; i++) {
                        currentTranscript += event.results[i][0].transcript;
                    }
                    setTranscript(currentTranscript);

                    if (event.results[event.resultIndex].isFinal && onTranscriptComplete) {
                        onTranscriptComplete(currentTranscript);
                    }
                };

                recognitionRef.current = recognition;
            }
        }
    }, [onTranscriptComplete]);

    const startRecording = () => {
        if (recognitionRef.current && !isRecording) {
            setTranscript("");
            try {
                recognitionRef.current.start();
            } catch (e) {
                console.error("Subsystem initialization exception:", e);
            }
        }
    };

    const stopRecording = () => {
        if (recognitionRef.current && isRecording) {
            recognitionRef.current.stop();
        }
    };

    return { isRecording, transcript, startRecording, stopRecording };
};