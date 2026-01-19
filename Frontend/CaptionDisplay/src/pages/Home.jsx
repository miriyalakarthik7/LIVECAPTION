import { Link } from 'react-router-dom';
import { Sparkles, Zap, Globe, Shield, ArrowRight, Play } from 'lucide-react';
import Button from '../components/Button';
import AnimatedPage from '../components/AnimatedPage';
import { motion } from 'framer-motion';



const Home = () => {
    return (
        <AnimatedPage className="bg-white">
            {/* Hero Section */}
            <div className="relative overflow-hidden bg-gray-900 pb-16 sm:pb-24">
                <div className="absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-brand-900 opacity-90"></div>
                <div className="absolute inset-y-0 right-0 w-1/2 bg-gradient-to-l from-brand-900/20 to-transparent"></div>

                <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-16 sm:mt-24">
                    <div className="lg:grid lg:grid-cols-12 lg:gap-8">
                        <div className="sm:text-center md:max-w-2xl md:mx-auto lg:col-span-6 lg:text-left">
                            <motion.div
                                initial="hidden"
                                animate="visible"
                                variants={{
                                    hidden: { opacity: 1 },
                                    visible: {
                                        opacity: 1,
                                        transition: {
                                            delay: 0.5,
                                            staggerChildren: 0.05,
                                        },
                                    },
                                }}
                            >
                                <h1>
                                    <span className="block text-sm font-semibold uppercase tracking-wide text-brand-400 sm:text-base lg:text-sm xl:text-base">
                                        <Sparkles className="inline-block w-4 h-4 mr-1 mb-1" /> New Generation Accessibility
                                    </span>
                                    <span className="mt-1 block text-4xl tracking-tight font-extrabold sm:text-5xl xl:text-6xl text-white">
                                        <span className="block">
                                            {"Accessibility that".split("").map((char, index) => (
                                                <motion.span key={index} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                        <span className="block text-brand-400">
                                            {"speaks to everyone".split("").map((char, index) => (
                                                <motion.span key={index} variants={{ hidden: { opacity: 0, y: 50 }, visible: { opacity: 1, y: 0 } }}>
                                                    {char}
                                                </motion.span>
                                            ))}
                                        </span>
                                    </span>
                                </h1>
                                <motion.p
                                    className="mt-3 text-base text-gray-300 sm:mt-5 sm:text-xl lg:text-lg xl:text-xl"
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    transition={{ delay: 2.5, duration: 1 }}
                                >
                                    Experience the future of communication with real-time, multilingual captions designed for Deaf and hard-of-hearing users. Enterprise-grade accuracy, simplified for your daily life.
                                </motion.p>
                            </motion.div>

                            <motion.div
                                initial={{ opacity: 0, scale: 0.95 }}
                                animate={{ opacity: 1, scale: 1 }}
                                transition={{ delay: 0.4, duration: 0.5 }}
                                className="mt-8 sm:max-w-lg sm:mx-auto sm:text-center lg:text-left lg:mx-0"
                            >
                                <div className="space-y-4 sm:space-y-0 sm:flex sm:space-x-4">
                                    <Link to="/register">
                                        <div className="sm:flex-1">
                                            <Button size="lg" className="w-full text-lg shadow-xl shadow-brand-500/20">
                                                Get Started Free
                                            </Button>
                                        </div>
                                    </Link>
                                    <Link to="/app/live">
                                        <div className="sm:flex-1">
                                            <Button size="lg" variant="secondary" className="w-full text-lg bg-gray-800 text-white border-gray-700 hover:bg-gray-700">
                                                <Play className="w-5 h-5 mr-2 text-brand-400" /> Live Demo
                                            </Button>
                                        </div>
                                    </Link>
                                </div>
                                <p className="mt-3 text-xs text-gray-400">
                                    No credit card required · Free 14-day trial · GDPR Compliant
                                </p>
                            </motion.div>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 0.6, duration: 0.8 }}
                            className="mt-12 relative sm:max-w-lg sm:mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-span-6 lg:flex lg:items-center"
                        >
                            <div className="relative mx-auto w-full rounded-2xl shadow-2xl overflow-hidden bg-gray-900 border border-gray-700 h-[32rem] flex flex-col transform hover:scale-[1.02] transition-transform duration-500">
                                {/* Simulated Live Caption Interface */}
                                <div className="p-4 border-b border-gray-700 flex justify-between items-center bg-gray-800">
                                    <div className="flex space-x-2">
                                        <div className="w-3 h-3 rounded-full bg-red-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                                        <div className="w-3 h-3 rounded-full bg-green-500"></div>
                                    </div>
                                    <span className="text-xs text-gray-400 font-mono">LIVE_FEED_01.ACT</span>
                                </div>

                                <div className="flex-1 p-6 relative flex items-center justify-center overflow-hidden">
                                    {/* Audio Waveform Animation - Extended */}
                                    <div className="absolute inset-0 flex items-center justify-center space-x-2 opacity-30">
                                        {[...Array(30)].map((_, i) => (
                                            <motion.div
                                                key={i}
                                                animate={{ height: ["20%", "80%", "20%"] }}
                                                transition={{
                                                    duration: 1.2 + Math.random(),
                                                    repeat: Infinity,
                                                    delay: i * 0.05,
                                                    ease: "easeInOut"
                                                }}
                                                className="w-3 bg-brand-500 rounded-full"
                                                style={{ height: '50%' }}
                                            />
                                        ))}
                                    </div>

                                    <div className="relative z-10 text-center w-full max-w-md">
                                        <motion.div
                                            initial={{ opacity: 0 }}
                                            animate={{ opacity: [0, 1, 1, 0] }}
                                            transition={{ duration: 4, times: [0, 0.1, 0.9, 1], repeat: Infinity, repeatDelay: 1 }}
                                        >
                                            <p className="text-3xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-brand-300 to-purple-400">
                                                "Translating speech..."
                                            </p>
                                        </motion.div>
                                        <motion.div
                                            initial={{ opacity: 0, y: 10 }}
                                            animate={{ opacity: 1, y: 0 }}
                                            transition={{ delay: 0.5, duration: 0.5 }}
                                            className="mt-4 bg-gray-800/80 backdrop-blur-md p-4 rounded-xl border border-gray-600"
                                        >
                                            <p className="text-white text-lg font-medium">
                                                Accessibility for everyone.
                                            </p>
                                        </motion.div>
                                    </div>
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </div>

            {/* Stats Section */}
            <div className="bg-brand-900 py-12 border-y border-brand-800">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid grid-cols-2 gap-4 md:grid-cols-4 text-center">
                        {[
                            { label: 'Active Users', value: '10K+' },
                            { label: 'Accuracy', value: '99.9%' },
                            { label: 'Languages', value: '35+' },
                            { label: 'Countries', value: '140' },
                        ].map((stat, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.5 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="p-4"
                            >
                                <div className="text-4xl font-extrabold text-white mb-1">{stat.value}</div>
                                <div className="text-sm font-medium text-brand-300 uppercase tracking-wider">{stat.label}</div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Feature Grid */}
            <div className="py-24 bg-gray-50 overflow-hidden relative">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h2 className="text-base font-semibold text-brand-600 tracking-wide uppercase">Why LiveCaptions?</h2>
                        <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
                            A complete platform for accessible communication
                        </p>
                    </div>

                    <div className="mt-20 grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: Zap, title: "Real-time Speed", desc: "Latency so low, it feels like natural conversation. Powered by optimized speech engines." },
                            { icon: Globe, title: "30+ Languages", desc: "Instantly translate speech to text in over 30 languages, breaking global barriers." },
                            { icon: Shield, title: "Privacy First", desc: "Your conversations are encrypted end-to-end. We never store audio data without permission." },
                        ].map((item, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                transition={{ delay: i * 0.1, duration: 0.5 }}
                                viewport={{ once: true }}
                                className="relative group bg-white p-6 focus-within:ring-2 focus-within:ring-inset focus-within:ring-brand-500 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100"
                            >
                                <div>
                                    <span className="rounded-lg inline-flex p-3 bg-brand-50 text-brand-600 ring-4 ring-white group-hover:bg-brand-600 group-hover:text-white transition-colors">
                                        <item.icon className="h-6 w-6" aria-hidden="true" />
                                    </span>
                                </div>
                                <div className="mt-8">
                                    <h3 className="text-lg font-medium">
                                        <Link to="/features" className="focus:outline-none">
                                            <span className="absolute inset-0" aria-hidden="true" />
                                            {item.title}
                                        </Link>
                                    </h3>
                                    <p className="mt-2 text-sm text-gray-500">
                                        {item.desc}
                                    </p>
                                </div>
                                <span className="pointer-events-none absolute top-6 right-6 text-gray-300 group-hover:text-gray-400" aria-hidden="true">
                                    <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                                        <path d="M20 4h1a1 1 0 00-1-1v1zm-1 12a1 1 0 102 0h-2zM8 3a1 1 0 000 2V3zM3.293 19.293a1 1 0 101.414 1.414l-1.414-1.414zM19 4v12h2V4h-2zm1-1H8v2h12V3zm-.707.293l-16 16 1.414 1.414 16-16-1.414-1.414z" />
                                    </svg>
                                </span>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* CTA Section */}
            <div className="bg-brand-700">
                <div className="max-w-2xl mx-auto text-center py-16 px-4 sm:py-20 sm:px-6 lg:px-8">
                    <h2 className="text-3xl font-extrabold text-white sm:text-4xl">
                        <span className="block">Ready to dive in?</span>
                        <span className="block text-brand-200">Start your free trial today.</span>
                    </h2>
                    <p className="mt-4 text-lg leading-6 text-brand-100">
                        Join thousands of teams using LiveCaptions to make their meetings and events accessible to everyone.
                    </p>
                    <div className="mt-8 flex justify-center space-x-4">
                        <Link to="/register">
                            <Button size="lg" className="bg-white text-brand-600 hover:bg-brand-50 hover:text-brand-700">
                                Sign up for free
                            </Button>
                        </Link>
                        <Link to="/app/dashboard">
                            <Button size="lg" variant="outline" className="text-white border-white hover:bg-brand-600 hover:border-transparent">
                                Go to Dashboard
                            </Button>
                        </Link>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Home;
