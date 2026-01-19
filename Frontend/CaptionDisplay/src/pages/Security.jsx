import { Shield, Lock, Eye, Key, FileCheck, Server } from 'lucide-react';
import { motion } from 'framer-motion';
import AnimatedPage from '../components/AnimatedPage';

const Security = () => {
    return (
        <AnimatedPage className="bg-white">
            <div className="relative bg-brand-900 py-24 sm:py-32 overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1557683316-973673baf926?auto=format&fit=crop&q=80')] opacity-10 bg-cover bg-center" />
                <div className="absolute inset-0 bg-gradient-to-b from-brand-900/90 to-brand-900" />

                <div className="relative max-w-7xl mx-auto px-6 lg:px-8 text-center">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8 }}
                    >
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-brand-500/20 backdrop-blur-sm ring-1 ring-brand-500/50 mb-8">
                            <Shield className="h-8 w-8 text-brand-300" />
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl">
                            Enterprise-Grade Security
                        </h1>
                        <p className="mt-6 text-lg leading-8 text-gray-300 max-w-2xl mx-auto">
                            Your privacy is our priority. We employ state-of-the-art encryption and strictly adhere to global security standards to ensure your data remains yours.
                        </p>
                    </motion.div>
                </div>
            </div>

            <div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
                    {[
                        {
                            icon: Lock,
                            title: "End-to-End Encryption",
                            desc: "All audio streams and transcripts are encrypted in transit using TLS 1.3 and at rest with AES-256."
                        },
                        {
                            icon: Eye,
                            title: "No Data Retention",
                            desc: "By default, we do not store your audio. Transcripts disappear from our servers immediately after your session ends."
                        },
                        {
                            icon: Key,
                            title: "SSO & Access Control",
                            desc: "Enterprise plans support SAML 2.0 Single Sign-On (OKTA, Azure AD) for centralized member management."
                        },
                        {
                            icon: FileCheck,
                            title: "GDPR & HIPAA Compliant",
                            desc: "Our infrastructure and processes are designed to meet the strictest regulatory requirements for health and personal data."
                        },
                        {
                            icon: Server,
                            title: "Private Cloud Deployment",
                            desc: "Need absolute isolation? We can deploy LiveCaptions entirely within your own AWS or Azure VPC."
                        },
                        {
                            icon: Shield,
                            title: "Regular Audits",
                            desc: "Our systems undergo quarterly penetration testing by third-party security firms to identify and patch vulnerabilities."
                        }
                    ].map((item, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            transition={{ delay: index * 0.1 }}
                            viewport={{ once: true }}
                            className="flex flex-col items-start p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-xl hover:border-brand-200 transition-all duration-300"
                        >
                            <div className="p-3 bg-white rounded-xl shadow-sm mb-6 border border-gray-100">
                                <item.icon className="w-8 h-8 text-brand-600" />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-3">{item.title}</h3>
                            <p className="text-gray-600 leading-relaxed text-sm">{item.desc}</p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </AnimatedPage>
    );
};

export default Security;
