import { Briefcase, MapPin, Clock, ArrowRight, Heart, Users, Zap } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import Button from '../components/Button';

const positions = [
    { title: 'Speech Processing Engineer', department: 'AI Research', location: 'San Francisco / Remote', type: 'Full-time' },
    { title: 'Real-time Systems Architect', department: 'Engineering', location: 'Remote', type: 'Full-time' },
    { title: 'Accessibility UX Researcher', department: 'Design', location: 'London, UK / Remote', type: 'Full-time' },
    { title: 'NLP Research Scientist', department: 'AI Research', location: 'New York, NY', type: 'Full-time' },
];

const benefits = [
    { icon: Heart, title: 'Health & Wellness', desc: 'Comprehensive coverage for you and your family, including mental health support.' },
    { icon: Clock, title: 'Flexible Hours', desc: 'Work when you feel most productive. We focus on output, not hours banked.' },
    { icon: Users, title: 'Remote First', desc: 'Work from anywhere in the world. We offer a generous home office stipend.' },
    { icon: Zap, title: 'Growth Budget', desc: '$2,000 annual learning stipend for courses, conferences, and books.' },
];

const skills = [
    { name: 'Python & C++', category: 'Backend' },
    { name: 'PyTorch / TensorFlow', category: 'AI/ML' },
    { name: 'WebSockets', category: 'Real-time' },
    { name: 'React & Three.js', category: 'Frontend' },
    { name: 'Audio Signal Processing', category: 'Core' },
    { name: 'WCAG Guidelines', category: 'Design' },
];

const Careers = () => {
    return (
        <AnimatedPage className="bg-white">
            {/* Hero */}
            <div className="relative bg-gray-900 py-32 text-center text-white overflow-hidden">
                <div className="absolute inset-0 bg-brand-900/50" />
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&q=80')] bg-cover bg-center opacity-20 mix-blend-overlay" />

                <motion.div
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ duration: 0.8 }}
                    className="relative z-10 max-w-3xl mx-auto px-6"
                >
                    <span className="inline-block py-1 px-3 rounded-full bg-brand-500/20 border border-brand-500/30 text-brand-300 text-sm font-semibold mb-6">We are hiring</span>
                    <h1 className="text-5xl md:text-7xl font-bold mb-8 tracking-tight">Build the future of <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-400 to-purple-400">accessibility.</span></h1>
                    <p className="text-xl text-gray-300 leading-relaxed mb-10">
                        Join a passionate team dedicated to breaking down communication barriers for millions of people worldwide.
                    </p>
                    <Button size="lg" className="rounded-full px-8 py-4 text-lg">View Open Roles</Button>
                </motion.div>
            </div>

            {/* Values/Benefits */}
            <div className="py-24 max-w-7xl mx-auto px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl font-bold text-gray-900">Why start a career here?</h2>
                    <p className="mt-4 text-gray-500">More than just a job. We care about your growth and well-being.</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {benefits.map((item, i) => (
                        <motion.div
                            key={i}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: i * 0.1 }}
                            viewport={{ once: true }}
                            className="bg-gray-50 p-8 rounded-2xl border border-gray-100"
                        >
                            <div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6">
                                <item.icon className="w-6 h-6 text-brand-600" />
                            </div>
                            <h3 className="font-bold text-gray-900 mb-2">{item.title}</h3>
                            <p className="text-sm text-gray-500">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>

            {/* Skills Section */}
            <div className="py-16 bg-brand-900 overflow-hidden">
                <div className="max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-white mb-12">Tech Stack & Skills We Value</h2>
                    <div className="flex flex-wrap justify-center gap-4">
                        {skills.map((skill, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, scale: 0.8 }}
                                whileInView={{ opacity: 1, scale: 1 }}
                                transition={{ delay: i * 0.05, type: 'spring', stiffness: 200 }}
                                viewport={{ once: true }}
                                className="bg-white/10 backdrop-blur-md border border-white/10 px-6 py-3 rounded-full text-brand-100 font-medium hover:bg-white/20 hover:text-white transition-colors cursor-default"
                            >
                                <span className="opacity-50 mr-2 text-xs uppercase tracking-wider">{skill.category}</span>
                                {skill.name}
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>

            {/* Job Listings */}
            <div className="bg-gray-50 py-24">
                <div className="max-w-4xl mx-auto px-6">
                    <h2 className="text-3xl font-bold text-gray-900 mb-12">Open Positions</h2>
                    <div className="space-y-4">
                        {positions.map((job, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, x: -20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.1 }}
                                viewport={{ once: true }}
                                className="bg-white p-6 rounded-xl shadow-sm border border-gray-100 hover:shadow-lg hover:border-brand-200 transition-all cursor-pointer group flex flex-col sm:flex-row sm:items-center sm:justify-between"
                            >
                                <div>
                                    <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-600 transition-colors">{job.title}</h3>
                                    <div className="flex items-center space-x-4 mt-2 text-sm text-gray-500">
                                        <span className="flex items-center"><Briefcase className="w-3 h-3 mr-1" /> {job.department}</span>
                                        <span className="flex items-center"><MapPin className="w-3 h-3 mr-1" /> {job.location}</span>
                                        <span className="flex items-center"><Clock className="w-3 h-3 mr-1" /> {job.type}</span>
                                    </div>
                                </div>
                                <div className="mt-4 sm:mt-0">
                                    <span className="hidden sm:inline-flex items-center text-brand-600 font-medium text-sm group-hover:translate-x-1 transition-transform">
                                        Apply Now <ArrowRight className="w-4 h-4 ml-1" />
                                    </span>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Careers;
