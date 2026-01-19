import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Mic, MicOff, Settings, Type, MoreHorizontal } from 'lucide-react';
import Button from '../components/Button';
import AnimatedPage from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';

const LiveCaptions = () => {
    const navigate = useNavigate();
    const [isListening, setIsListening] = useState(false);
    const [isConnecting, setIsConnecting] = useState(false);
    const [transcriptions, setTranscriptions] = useState([]);
    const [currentText, setCurrentText] = useState('');
    const bottomRef = useRef(null);
    const socketRef = useRef(null);
    const mediaRecorderRef = useRef(null);
    const streamRef = useRef(null);

    // Scroll to bottom when new text arrives
    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [transcriptions, currentText]);

    const startRecording = async () => {
        try {
            setIsConnecting(true);
            console.log("Starting recording...");
            const stream = await navigator.mediaDevices.getUserMedia({ audio: true });
            streamRef.current = stream;

            // Connect to WebSocket
            const wsUrl = import.meta.env.VITE_WEBSOCKET_URL || 'ws://localhost:8000/ws/transcribe';
            const ws = new WebSocket(wsUrl);
            socketRef.current = ws;

            ws.onopen = () => {
                console.log("WebSocket connected");
                setIsConnecting(false);
                setIsListening(true);

                // Initialize MediaRecorder
                const mediaRecorder = new MediaRecorder(stream, { mimeType: 'audio/webm' });
                mediaRecorderRef.current = mediaRecorder;

                mediaRecorder.ondataavailable = (event) => {
                    if (event.data.size > 0 && ws.readyState === WebSocket.OPEN) {
                        ws.send(event.data);
                    }
                };

                // Send data every 1 second (1000ms)
                mediaRecorder.start(1000);
            };

            ws.onmessage = (event) => {
                const text = event.data;
                setTranscriptions(prev => [
                    ...prev,
                    {
                        id: Date.now(),
                        text: text,
                        timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })
                    }
                ]);
            };

            ws.onerror = (error) => {
                console.error("WebSocket error:", error);
                setIsConnecting(false);
                stopRecording();
                alert("Connection error. Is the backend running?");
            };

            ws.onclose = () => {
                console.log("WebSocket closed");
                if (isListening) stopRecording();
            };

        } catch (error) {
            console.error("Error accessing microphone:", error);
            setIsConnecting(false);
            alert("Could not access microphone. Please allow permissions.");
        }
    };

    const stopRecording = () => {
        console.log("Stopping recording...");
        setIsListening(false);
        setIsConnecting(false);

        if (mediaRecorderRef.current && mediaRecorderRef.current.state !== 'inactive') {
            mediaRecorderRef.current.stop();
        }

        if (streamRef.current) {
            streamRef.current.getTracks().forEach(track => track.stop());
            streamRef.current = null;
        }

        if (socketRef.current) {
            socketRef.current.close();
            socketRef.current = null;
        }
    };

    const toggleListening = () => {
        if (isListening) {
            stopRecording();
        } else {
            startRecording();
        }
    };

    // Cleanup on unmount
    useEffect(() => {
        return () => {
            stopRecording();
        };
    }, []);

    return (
        <AnimatedPage className="h-[calc(100vh-8rem)] flex flex-col space-y-4">
            {/* Header Controls */}
            <div className="bg-white p-4 rounded-lg shadow-sm flex justify-between items-center border border-gray-200">
                <div className="flex items-center space-x-3">
                    <motion.div
                        animate={{ scale: isListening ? [1, 1.2, 1] : 1 }}
                        transition={{ repeat: Infinity, duration: 1.5 }}
                        className={`h-3 w-3 rounded-full ${isListening ? 'bg-red-500' : 'bg-gray-300'}`}
                    />
                    <span className="font-medium text-gray-700">{isListening ? 'Live Recording' : 'Ready to Start'}</span>
                </div>
                <div className="flex space-x-2">
                    <Button
                        onClick={() => navigate('/app/settings')}
                        variant="secondary"
                        size="sm"
                        className="text-brand-600 bg-brand-50 hover:bg-brand-100 hover:text-brand-700 border-none"
                    >
                        <Settings className="w-4 h-4 mr-2" /> Settings
                    </Button>
                </div>
            </div>

            {/* Main Caption Area - Glassmorphism style */}
            <div className="flex-1 bg-gradient-to-br from-gray-900 to-gray-800 rounded-xl shadow-2xl relative overflow-hidden flex flex-col border border-gray-700">

                {/* Abstract Background Shapes */}
                <motion.div
                    animate={{
                        scale: [1, 1.1, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ repeat: Infinity, duration: 8, ease: "easeInOut" }}
                    className="absolute top-0 right-0 w-96 h-96 bg-brand-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                />
                <motion.div
                    animate={{
                        scale: [1, 1.2, 1],
                        opacity: [0.1, 0.15, 0.1],
                    }}
                    transition={{ repeat: Infinity, duration: 10, ease: "easeInOut", delay: 1 }}
                    className="absolute bottom-0 left-0 w-96 h-96 bg-purple-500 rounded-full mix-blend-multiply filter blur-3xl opacity-10"
                />

                {/* Caption Scroll View */}
                <div className="flex-1 p-8 overflow-y-auto z-10 flex flex-col items-center justify-center text-center space-y-6">
                    {transcriptions.length === 0 && !currentText && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex flex-col items-center justify-center text-gray-400"
                        >
                            <div className={`p-6 bg-gray-800 rounded-full mb-4 bg-opacity-50 transition-all duration-300 ${isListening ? 'bg-red-500/10' : ''}`}>
                                <Mic className={`w-12 h-12 ${isListening ? 'text-red-400' : 'text-gray-500'}`} />
                            </div>
                            <p className="text-2xl font-light tracking-wide text-gray-300">
                                {isListening ? 'Start speaking...' : 'Tap the microphone to begin captioning'}
                            </p>
                        </motion.div>
                    )}

                    <AnimatePresence mode="popLayout">
                        {transcriptions.map((t) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 20, scale: 0.95 }}
                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                exit={{ opacity: 0, y: -20 }}
                                className="max-w-3xl w-full"
                            >
                                <p className="text-3xl md:text-4xl text-white leading-relaxed font-semibold drop-shadow-sm">
                                    {t.text}
                                </p>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {/* LIVE INTERIM TEXT */}
                    {currentText && (
                        <motion.div
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            className="max-w-4xl w-full mt-4"
                        >
                            <p className="text-4xl md:text-5xl text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-purple-400 font-bold tracking-tight animate-pulse">
                                {currentText}
                            </p>
                        </motion.div>
                    )}
                    <div ref={bottomRef} />
                </div>

                {/* Floating Action Bar */}
                <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex items-center space-x-4 z-20">
                    <button
                        className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 backdrop-blur-md bg-opacity-80 border border-gray-600 transition-all"
                        title="Formatting Options"
                    >
                        <Type className="w-5 h-5" />
                    </button>

                    <motion.button
                        whileHover={{ scale: 1.1 }}
                        whileTap={{ scale: 0.9 }}
                        animate={isListening ? {
                            boxShadow: [
                                "0 0 0 0px rgba(239, 68, 68, 0.2)",
                                "0 0 0 20px rgba(239, 68, 68, 0)",
                            ],
                            transition: {
                                duration: 1.5,
                                repeat: Infinity,
                            }
                        } : {}}
                        onClick={toggleListening}
                        disabled={isConnecting}
                        className={`p-5 rounded-full shadow-lg focus:outline-none ring-4 ring-offset-4 ring-offset-gray-900 transition-colors ${isListening ? 'bg-red-500 ring-red-500/30' :
                            isConnecting ? 'bg-yellow-500 ring-yellow-500/30 cursor-wait' : 'bg-brand-500 ring-brand-500/30'
                            }`}
                    >
                        {isConnecting ? (
                            <div className="w-8 h-8 border-4 border-white border-t-transparent rounded-full animate-spin" />
                        ) : isListening ? (
                            <MicOff className="w-8 h-8 text-white" />
                        ) : (
                            <Mic className="w-8 h-8 text-white" />
                        )}
                    </motion.button>

                    <button
                        className="p-3 rounded-full bg-gray-800 text-gray-300 hover:text-white hover:bg-gray-700 backdrop-blur-md bg-opacity-80 border border-gray-600 transition-all"
                        title="More Options"
                    >
                        <MoreHorizontal className="w-5 h-5" />
                    </button>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default LiveCaptions;
