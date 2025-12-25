import { Eye, Heart, Users, Target } from 'lucide-react';
import AnimatedPage from '../components/AnimatedPage';
import srikanthImg from '../assets/srikanth.png';

const teamMembers = [
    { name: 'Srikanth', role: 'Frontend Developer', id: 1, image: srikanthImg },
    { name: 'Mahindra', role: 'Backend Developer', id: 2 },
    { name: 'Karthik', role: 'AI Specialist', id: 3 },
    { name: 'Prasanna', role: 'Database Engineer', id: 4 },
];

const About = () => {
    return (
        <AnimatedPage>
            <div className="bg-white">
                {/* Hero Section */}
                <div className="bg-brand-700 py-16 sm:py-24">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl">
                            We are on a mission
                        </h1>
                        <p className="mt-6 max-w-2xl mx-auto text-xl text-brand-100">
                            To make the world accessible for everyone, one caption at a time.
                        </p>
                    </div>
                </div>

                {/* Story Section */}
                <div className="py-16 bg-white overflow-hidden">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="lg:grid lg:grid-cols-2 lg:gap-8 items-center">
                            <div>
                                <h2 className="text-3xl font-extrabold text-gray-900 sm:text-4xl">
                                    Accessibility is a Human Right
                                </h2>
                                <p className="mt-4 text-lg text-gray-500">
                                    We believe that everyone deserves to participate fully in society, regardless of their hearing ability. LiveCaptions was built to bridge the communication gap using cutting-edge technology.
                                </p>
                                <p className="mt-4 text-lg text-gray-500">
                                    Founded by a team of engineers and accessibility advocates, our goal is to provide reliable, high-quality tools for the Deaf and Hard-of-Hearing community. We understand that captioning is not just about words; it's about context, emotion, and connection.
                                </p>
                            </div>
                            <div className="mt-8 lg:mt-0">
                                <div className="bg-gray-100 rounded-lg shadow-lg overflow-hidden h-64 sm:h-80 flex items-center justify-center">
                                    <Users className="w-32 h-32 text-gray-300" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Values Section */}
                <div className="bg-gray-50 py-16">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                        <div className="text-center">
                            <h2 className="text-3xl font-extrabold text-gray-900">Our Core Values</h2>
                        </div>
                        <div className="mt-12 grid grid-cols-1 gap-8 sm:grid-cols-3">
                            {[
                                { icon: Heart, title: "Empathy First", desc: "We design with people, not just for them. Every feature starts with understanding user needs." },
                                { icon: Target, title: "Precision", desc: "Communication relies on accuracy. We strive for the highest quality transcription possible." },
                                { icon: Eye, title: "Transparency", desc: "Visual clarity is key. Our interfaces are tested rigorously for readability and focus." },
                            ].map((item, i) => (
                                <div key={i} className="bg-white rounded-lg shadow-sm p-8 text-center hover:shadow-md transition-shadow">
                                    <div className="mx-auto h-12 w-12 text-brand-600">
                                        <item.icon className="h-full w-full" />
                                    </div>
                                    <h3 className="mt-6 text-lg font-medium text-gray-900">{item.title}</h3>
                                    <p className="mt-4 text-base text-gray-500">{item.desc}</p>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Team Section */}
                <div className="py-16 bg-white">
                    <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                        <h2 className="text-3xl font-extrabold text-gray-900">Meet the Team</h2>
                        <p className="mt-4 text-lg text-gray-500">The passionate individuals behind LiveCaptions.</p>

                        <div className="mt-10 grid grid-cols-2 gap-8 md:grid-cols-4">
                            {teamMembers.map((member) => (
                                <div key={member.id} className="flex flex-col items-center group">
                                    <div className="h-24 w-24 rounded-full bg-gray-200 mb-4 overflow-hidden ring-4 ring-transparent group-hover:ring-brand-200 transition-all">
                                        <img
                                            className="h-full w-full object-cover grayscale group-hover:grayscale-0 transition-all duration-300"
                                            src={member.image || `https://source.boringavatars.com/beam/120/${member.name}?colors=0f172a,1e293b,334155,475569,64748b`}
                                            alt={member.name}
                                        />
                                    </div>
                                    <div className="text-lg font-bold text-gray-900">{member.name}</div>
                                    <div className="text-sm font-medium text-brand-600">{member.role}</div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </AnimatedPage>
    );
};

export default About;
