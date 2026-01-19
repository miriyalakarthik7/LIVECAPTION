import { Outlet, Link } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { useState } from 'react';
import Button from '../components/Button';

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-white border-b border-gray-100 sticky top-0 z-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between h-16">
                    <div className="flex">
                        <div className="flex-shrink-0 flex items-center">
                            <span className="font-bold text-2xl text-brand-600 tracking-tight">LiveCaptions</span>
                        </div>
                        <div className="hidden sm:ml-8 sm:flex sm:space-x-8">
                            <Link to="/" className="text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-500 text-sm font-medium transition-colors">Home</Link>
                            <Link to="/features" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-500 text-sm font-medium transition-colors">Features</Link>
                            <Link to="/about" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-500 text-sm font-medium transition-colors">About Us</Link>
                        </div>
                    </div>
                    <div className="hidden sm:ml-6 sm:flex sm:items-center space-x-4">
                        <Link to="/login">
                            <Button variant="ghost" className="font-medium text-gray-500 hover:text-gray-900">Sign In</Button>
                        </Link>
                        <Link to="/register">
                            <Button>Get Started</Button>
                        </Link>
                    </div>
                    <div className="-mr-2 flex items-center sm:hidden">
                        <button onClick={() => setIsOpen(!isOpen)} className="inline-flex items-center justify-center p-2 rounded-md text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500">
                            <span className="sr-only">Open main menu</span>
                            {isOpen ? <X className="block h-6 w-6" /> : <Menu className="block h-6 w-6" />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile menu */}
            {isOpen && (
                <div className="sm:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg">
                    <div className="pt-2 pb-3 space-y-1">
                        <Link to="/" className="bg-brand-50 border-brand-500 text-brand-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Home</Link>
                        <Link to="/features" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">Features</Link>
                        <Link to="/about" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About Us</Link>
                    </div>
                    <div className="pt-4 pb-4 border-t border-gray-200">
                        <div className="flex flex-col space-y-2 px-4">
                            <Link to="/login">
                                <Button variant="outline" className="w-full justify-center">Sign In</Button>
                            </Link>
                            <Link to="/register">
                                <Button className="w-full justify-center">Get Started</Button>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

// Preliminary Footer Component
const Footer = () => (
    <footer className="bg-sky-50 border-t border-sky-100 relative overflow-hidden">
        {/* Decorative background element */}
        <div className="absolute top-0 right-0 -mt-16 -mr-16 w-64 h-64 bg-sky-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 -mb-16 -ml-16 w-64 h-64 bg-brand-100 rounded-full blur-3xl opacity-50 pointer-events-none"></div>

        <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8 relative z-10 grid grid-cols-1 md:grid-cols-4 gap-12">
            <div className="col-span-1 md:col-span-2">
                <span className="font-bold text-2xl text-brand-700 tracking-tight flex items-center">
                    <div className="w-8 h-8 bg-brand-600 rounded-lg mr-2 flex items-center justify-center text-white font-bold">L</div>
                    LiveCaptions
                </span>
                <p className="mt-4 text-base text-sky-800 max-w-sm leading-relaxed">
                    Making the world accessible through real-time technology. We build tools that help everyone communicate without barriers.
                </p>
            </div>
            <div>
                <h4 className="font-bold text-sky-900 mb-4 uppercase tracking-wider text-sm">Product</h4>
                <ul className="space-y-3 text-sm text-sky-700 font-medium">
                    <li><Link to="/features" className="hover:text-brand-600 transition-colors">Features</Link></li>
                    <li><Link to="/pricing" className="hover:text-brand-600 transition-colors">Pricing</Link></li>
                    <li><Link to="/security" className="hover:text-brand-600 transition-colors">Security</Link></li>
                </ul>
            </div>
            <div>
                <h4 className="font-bold text-sky-900 mb-4 uppercase tracking-wider text-sm">Company</h4>
                <ul className="space-y-3 text-sm text-sky-700 font-medium">
                    <li><Link to="/about" className="hover:text-brand-600 transition-colors">About Us</Link></li>
                    <li><Link to="/careers" className="hover:text-brand-600 transition-colors">Careers</Link></li>
                    <li><Link to="/contact" className="hover:text-brand-600 transition-colors">Contact</Link></li>
                </ul>
            </div>
        </div>
        <div className="bg-sky-100/50 backdrop-blur-sm border-t border-sky-200">
            <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center">
                <p className="text-sm text-sky-700">&copy; 2026 LiveCaptions. All rights reserved.</p>
                <div className="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" className="text-sky-400 hover:text-brand-600">
                        <span className="sr-only">Twitter</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" /></svg>
                    </a>
                    <a href="#" className="text-sky-400 hover:text-brand-600">
                        <span className="sr-only">GitHub</span>
                        <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24"><path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" /></svg>
                    </a>
                </div>
            </div>
        </div>
    </footer>
);

const PublicLayout = () => {
    return (
        <div className="min-h-screen bg-white flex flex-col font-sans">
            <Navbar />
            <main className="flex-grow">
                <Outlet />
            </main>
            <Footer />
        </div>
    );
};

export default PublicLayout;
