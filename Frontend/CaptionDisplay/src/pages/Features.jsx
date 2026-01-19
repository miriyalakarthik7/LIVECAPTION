import { useState } from 'react';
import { Mic, Globe, Zap, Shield, Smartphone, Smile, Layout, Headphones, X } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../components/Card';
import Button from '../components/Button';

const features = [
    {
        name: 'Real-time Live Captioning',
        description: 'Instant speech-to-text conversion with low latency, ensuring you never miss a word during meetings, classes, or events.',
        details: 'Our proprietary speech engine processes audio streams in under 200ms using WebAssembly-optimized models. It handles background noise effectively and adapts to different accents. Whether you are in a crowded lecture hall or a quiet meeting room, our AI ensures that every word is captured with industry-leading precision.',
        icon: Mic,
    },
    {
        name: 'Multilingual Support',
        description: 'Automatically translate speech into over 30 languages in real-time, breaking down language barriers instantly.',
        details: 'Communicate globally without hesitation. Our live translation engine supports major languages including English, Spanish, French, German, Chinese, Japanese, and Hindi. Ideal for international conferences and travel, allowing for seamless bi-directional communication.',
        icon: Globe,
    },
    {
        name: 'Simplified Mode',
        description: 'AI-powered text simplification helps reduce cognitive load by summarizing complex sentences on the fly.',
        details: 'Designed for neurodiverse users or those learning a new language. This mode uses Large Language Models to rephrase complex technical jargon or lengthy sentences into concise, easy-to-understand summaries without losing the core meaning.',
        icon: Zap,
    },
    {
        name: 'Enterprise Security',
        description: 'Bank-grade encryption and privacy controls to ensure your sensitive conversations remain confidential.',
        details: 'We employ AES-256 encryption for data at rest and TLS 1.3 for data in transit. We give you full control over your data retention policies—choose to delete transcripts immediately after a session or store them securely in your private cloud.',
        icon: Shield,
    },
    {
        name: 'Cross-Platform',
        description: 'Access from any device—desktop, tablet, or mobile. Your settings and history sync automatically.',
        details: 'Start a session on your laptop and seamlessly transfer it to your phone. Our Progressive Web App (PWA) technology ensures a native-like experience on iOS, Android, Windows, and macOS without requiring heavy downloads.',
        icon: Smartphone,
    },
    {
        name: 'Accessibility First',
        description: 'Designed from the ground up with high contrast, screen reader support, and customizable text settings.',
        details: 'We strictly adhere to WCAG 2.1 AAA guidelines. Our interface supports screen magnification, high-contrast themes for low vision, and is fully navigable via keyboard only. Every interaction is designed with inclusivity in mind.',
        icon: Smile,
    },
    {
        name: 'Custom Layouts',
        description: 'Adjust the caption viewing area, font size, and background opacity to suit your visual needs.',
        details: 'Personalize your reading experience. Choose from OpenDyslexic fonts, adjust line height, or switch to a dark mode with yellow text for reduced eye strain. Position captions anywhere on the screen to avoid blocking important content.',
        icon: Layout,
    },
    {
        name: 'Audio Description',
        description: 'Compatible with screen readers and audio description tools for a complete accessible experience.',
        details: 'Our system creates rich metadata that can be read by screen readers to describe non-speech audio cues like [Laughter], [Applause], or [Music playing], providing a complete auditory context for blind or low-vision users.',
        icon: Headphones,
    },
];

const Features = () => {
    const [selectedFeature, setSelectedFeature] = useState(null);

    return (
        <div className="bg-white">
            {/* Header */}
            <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto text-center">
                    <h2 className="text-base text-brand-600 font-semibold tracking-wide uppercase">Features</h2>
                    <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
                        Everything you need to stay connected
                    </p>
                    <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
                        Our platform provides comprehensive tools to make communication accessible, inclusive, and efficient for everyone.
                    </p>
                </div>
            </div>

            {/* Grid */}
            <div className="py-12 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {features.map((feature) => (
                            <div
                                key={feature.name}
                                className="pt-6 cursor-pointer transform transition-transform hover:-translate-y-1"
                                onClick={() => setSelectedFeature(feature)}
                            >
                                <Card className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200 group">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3 bg-brand-500 rounded-md shadow-lg group-hover:bg-brand-600 transition-colors">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                        <p className="mt-5 text-base text-gray-500 line-clamp-3">
                                            {feature.description}
                                        </p>
                                        <p className="mt-4 text-sm font-medium text-brand-600 group-hover:text-brand-700">
                                            Learn more &rarr;
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Detail Modal */}
            <AnimatePresence>
                {selectedFeature && (
                    <>
                        <motion.div
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                            className="fixed inset-0 bg-gray-900/50 backdrop-blur-sm z-40 fixed translate-0"
                            onClick={() => setSelectedFeature(null)}
                        />
                        <motion.div
                            initial={{ opacity: 0, scale: 0.95, y: 20 }}
                            animate={{ opacity: 1, scale: 1, y: 0 }}
                            exit={{ opacity: 0, scale: 0.95, y: 20 }}
                            className="fixed inset-0 z-50 flex items-center justify-center p-4 pointer-events-none"
                        >
                            <div className="bg-white rounded-2xl shadow-2xl max-w-lg w-full p-6 relative pointer-events-auto">
                                <button
                                    onClick={() => setSelectedFeature(null)}
                                    className="absolute top-4 right-4 text-gray-400 hover:text-gray-500 bg-gray-100 rounded-full p-1"
                                >
                                    <X className="w-5 h-5" />
                                </button>

                                <div className="flex items-center space-x-4 mb-6">
                                    <div className="p-3 bg-brand-100 rounded-xl">
                                        <selectedFeature.icon className="w-8 h-8 text-brand-600" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-gray-900">{selectedFeature.name}</h3>
                                </div>

                                <div className="space-y-4">
                                    <p className="text-lg text-gray-600 leading-relaxed">
                                        {selectedFeature.details}
                                    </p>

                                    <div className="bg-gray-50 p-4 rounded-lg border border-gray-100 mt-4">
                                        <h4 className="font-semibold text-gray-900 mb-2">Key Benefit</h4>
                                        <p className="text-sm text-gray-500">{selectedFeature.description}</p>
                                    </div>
                                </div>

                                <div className="mt-8 flex justify-end">
                                    <Button onClick={() => setSelectedFeature(null)}>
                                        Got it
                                    </Button>
                                </div>
                            </div>
                        </motion.div>
                    </>
                )}
            </AnimatePresence>
        </div>
    );
};

export default Features;
