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
                            <Link to="/about" className="text-gray-500 hover:text-gray-900 inline-flex items-center px-1 pt-1 border-b-2 border-transparent hover:border-brand-500 text-sm font-medium transition-colors">About</Link>
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
                        <Link to="/about" className="border-transparent text-gray-500 hover:bg-gray-50 hover:border-gray-300 hover:text-gray-700 block pl-3 pr-4 py-2 border-l-4 text-base font-medium">About</Link>
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
    <footer className="bg-gray-50 border-t border-gray-200">
        <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div>
                <span className="font-bold text-lg text-brand-600">LiveCaptions</span>
                <p className="mt-2 text-sm text-gray-500">Making the world accessible through real-time technology.</p>
            </div>
            <div>
                <h4 className="font-semibold text-gray-900 mb-2">Product</h4>
                <ul className="space-y-1 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-brand-600">Features</a></li>
                    <li><a href="#" className="hover:text-brand-600">Pricing</a></li>
                    <li><a href="#" className="hover:text-brand-600">Security</a></li>
                </ul>
            </div>
            <div>
                <h4 className="font-semibold text-gray-900 mb-2">Company</h4>
                <ul className="space-y-1 text-sm text-gray-500">
                    <li><a href="#" className="hover:text-brand-600">About Us</a></li>
                    <li><a href="#" className="hover:text-brand-600">Careers</a></li>
                    <li><a href="#" className="hover:text-brand-600">Contact</a></li>
                </ul>
            </div>
        </div>
        <div className="max-w-7xl mx-auto py-6 px-4 sm:px-6 lg:px-8 border-t border-gray-200">
            <p className="text-center text-sm text-gray-400">&copy; 2024 LiveCaptions. All rights reserved.</p>
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
