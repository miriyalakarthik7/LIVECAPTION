import { Mic, Globe, Zap, Shield, Smartphone, Smile, Layout, Headphones } from 'lucide-react';
import Card from '../components/Card';

const features = [
    {
        name: 'Real-time Live Captioning',
        description: 'Instant speech-to-text conversion with low latency, ensuring you never miss a word during meetings, classes, or events.',
        icon: Mic,
    },
    {
        name: 'Multilingual Support',
        description: 'Automatically translate speech into over 30 languages in real-time, breaking down language barriers instantly.',
        icon: Globe,
    },
    {
        name: 'Simplified Mode',
        description: 'AI-powered text simplification helps reduce cognitive load by summarizing complex sentences on the fly.',
        icon: Zap,
    },
    {
        name: 'Enterprise Security',
        description: 'Bank-grade encryption and privacy controls to ensure your sensitive conversations remain confidential.',
        icon: Shield,
    },
    {
        name: 'Cross-Platform',
        description: 'Access from any device—desktop, tablet, or mobile. Your settings and history sync automatically.',
        icon: Smartphone,
    },
    {
        name: 'Accessibility First',
        description: 'Designed from the ground up with high contrast, screen reader support, and customizable text settings.',
        icon: Smile,
    },
    {
        name: 'Custom Layouts',
        description: 'Adjust the caption viewing area, font size, and background opacity to suit your visual needs.',
        icon: Layout,
    },
    {
        name: 'Audio Description',
        description: 'Compatible with screen readers and audio description tools for a complete accessible experience.',
        icon: Headphones,
    },
];

const Features = () => {
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
                            <div key={feature.name} className="pt-6">
                                <Card className="flow-root bg-gray-50 rounded-lg px-6 pb-8 h-full hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-200">
                                    <div className="-mt-6">
                                        <div>
                                            <span className="inline-flex items-center justify-center p-3 bg-brand-500 rounded-md shadow-lg">
                                                <feature.icon className="h-6 w-6 text-white" aria-hidden="true" />
                                            </span>
                                        </div>
                                        <h3 className="mt-8 text-lg font-medium text-gray-900 tracking-tight">{feature.name}</h3>
                                        <p className="mt-5 text-base text-gray-500">
                                            {feature.description}
                                        </p>
                                    </div>
                                </Card>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Features;
