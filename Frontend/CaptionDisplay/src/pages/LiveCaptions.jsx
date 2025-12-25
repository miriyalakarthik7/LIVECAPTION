import { useState, useEffect, useRef } from 'react';
import { Mic, MicOff, Settings, Type, MoreHorizontal } from 'lucide-react';
import Button from '../components/Button';
import AnimatedPage from '../components/AnimatedPage';
import { motion, AnimatePresence } from 'framer-motion';

const LiveCaptions = () => {
    const [isListening, setIsListening] = useState(false);
    const [transcriptions, setTranscriptions] = useState([]);
    const [currentText, setCurrentText] = useState('');
    const bottomRef = useRef(null);

    // Mock streaming text logic
    useEffect(() => {
        let interval;
        if (isListening) {
            const phrases = [
                "Welcome everyone to this live session.",
                "Today we are demonstrating the enhanced accessibility features.",
                "Our new interface uses high-contrast elements.",
                "And supports real-time multilingual translation.",
                "Please notice the smooth animations.",
                "Accessibility is at the core of our design.",
                "Simplicity reduces cognitive load.",
                "Let's test the response time.",
                "Moving on to the next topic.",
                "Any questions so far?",
            ];
            let index = 0;

            interval = setInterval(() => {
                if (index < phrases.length) {
                    const phrase = phrases[index];
                    setCurrentText((prev) => prev ? prev + " " + phrase : phrase);

                    if (Math.random() > 0.6) {
                        setTranscriptions(prev => [...prev, { id: Date.now(), text: phrases[index], timestamp: new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) }]);
                        setCurrentText('');
                    }
                    index = (index + 1) % phrases.length;
                }
            }, 1500);
        } else {
            clearInterval(interval);
        }
        return () => clearInterval(interval);
    }, [isListening]);

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' });
    }, [transcriptions, currentText]);

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
                    <Button variant="ghost" size="sm">
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
                <div className="flex-1 p-8 overflow-y-auto z-10 space-y-6">
                    {transcriptions.length === 0 && !currentText && (
                        <div className="h-full flex flex-col items-center justify-center text-gray-400">
                            <div className="p-6 bg-gray-800 rounded-full mb-4 bg-opacity-50">
                                <Mic className="w-12 h-12 text-gray-500" />
                            </div>
                            <p className="text-lg">Tap the microphone to begin captioning</p>
                        </div>
                    )}

                    <AnimatePresence>
                        {transcriptions.map((t) => (
                            <motion.div
                                key={t.id}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                className="group"
                            >
                                <div className="flex items-baseline space-x-3">
                                    <span className="text-xs font-mono text-gray-500 w-16 text-right flex-shrink-0">{t.timestamp}</span>
                                    <p className="text-xl md:text-2xl text-gray-200 leading-relaxed font-medium">{t.text}</p>
                                </div>
                            </motion.div>
                        ))}
                    </AnimatePresence>

                    {currentText && (
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            className="flex items-baseline space-x-3"
                        >
                            <span className="text-xs font-mono text-brand-400 w-16 text-right flex-shrink-0">Live</span>
                            <p className="text-2xl md:text-3xl text-white leading-relaxed font-bold tracking-wide">{currentText}</p>
                        </motion.div>
                    )}
                    <div ref={bottomRef} className="h-4" />
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
                        onClick={() => setIsListening(!isListening)}
                        className={`p-5 rounded-full shadow-lg focus:outline-none ring-4 ring-offset-4 ring-offset-gray-900 ${isListening ? 'bg-red-500 ring-red-500/30' : 'bg-brand-500 ring-brand-500/30'}`}
                    >
                        {isListening ? <MicOff className="w-8 h-8 text-white" /> : <Mic className="w-8 h-8 text-white" />}
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
