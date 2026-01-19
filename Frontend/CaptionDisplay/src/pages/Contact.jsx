import { Mail, MessageSquare, Phone, MapPin, Send } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';
import Button from '../components/Button';
import Input from '../components/Input';

const Contact = () => {
    return (
        <AnimatedPage className="bg-white">
            <div className="grid grid-cols-1 lg:grid-cols-2 min-h-screen">
                {/* Contact Info Side */}
                <div className="bg-brand-900 text-white p-12 lg:p-24 flex flex-col justify-center relative overflow-hidden">
                    <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/20 rounded-full blur-3xl -mr-16 -mt-16" />
                    <div className="absolute bottom-0 left-0 w-64 h-64 bg-purple-500/20 rounded-full blur-3xl -ml-16 -mb-16" />

                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.8 }}
                        className="relative z-10"
                    >
                        <h4 className="text-brand-300 font-semibold tracking-wide uppercase mb-2">Contact Us</h4>
                        <h1 className="text-4xl md:text-5xl font-extrabold mb-8 leading-tight">Let's start a conversation.</h1>
                        <p className="text-brand-100 text-lg mb-12 max-w-md leading-relaxed">
                            Have questions about our enterprise plans, security features, or just want to say hello? We'd love to hear from you.
                        </p>

                        <div className="space-y-8">
                            <div className="flex items-start md:items-center space-x-6 group cursor-pointer">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                                    <Mail className="w-6 h-6 text-brand-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-brand-200 font-medium">Email us at</p>
                                    <p className="text-xl font-semibold">hello@livecaptions.ai</p>
                                </div>
                            </div>

                            <div className="flex items-start md:items-center space-x-6 group cursor-pointer">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                                    <MessageSquare className="w-6 h-6 text-brand-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-brand-200 font-medium">Live Chat</p>
                                    <p className="text-xl font-semibold">Available 9am - 5pm EST</p>
                                </div>
                            </div>

                            <div className="flex items-start md:items-center space-x-6 group cursor-pointer">
                                <div className="p-4 bg-white/10 rounded-2xl group-hover:bg-white/20 transition-colors">
                                    <MapPin className="w-6 h-6 text-brand-300" />
                                </div>
                                <div>
                                    <p className="text-sm text-brand-200 font-medium">Headquarters</p>
                                    <p className="text-xl font-semibold">San Francisco, CA</p>
                                </div>
                            </div>
                        </div>
                    </motion.div>
                </div>

                {/* Form Side */}
                <div className="bg-white p-12 lg:p-24 flex flex-col justify-center">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                    >
                        <h2 className="text-2xl font-bold text-gray-900 mb-8">Send us a message</h2>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <Input label="First Name" placeholder="Jane" />
                                <Input label="Last Name" placeholder="Doe" />
                            </div>
                            <Input label="Email Address" type="email" placeholder="jane@company.com" />
                            <Input label="Subject" placeholder="How can we help?" />
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-1">Message</label>
                                <textarea
                                    rows={4}
                                    className="block w-full rounded-md border-gray-300 shadow-sm focus:border-brand-500 focus:ring-brand-500 sm:text-sm p-3 border"
                                    placeholder="Tell us a bit about your needs..."
                                />
                            </div>
                            <Button className="w-full h-12 text-lg shadow-lg shadow-brand-500/30">
                                Send Message <Send className="w-4 h-4 ml-2" />
                            </Button>
                        </form>
                    </motion.div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Contact;
