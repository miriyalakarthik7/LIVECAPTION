import { Link, useLocation } from 'react-router-dom';
import { Home, Mic, History, Settings, User, X } from 'lucide-react';
import clsx from 'clsx';

const navigation = [
    { name: 'Dashboard', href: '/app/dashboard', icon: Home },
    { name: 'Live Captions', href: '/app/live', icon: Mic },
    { name: 'History', href: '/app/history', icon: History },
    { name: 'Settings', href: '/app/settings', icon: Settings },
    { name: 'Profile', href: '/app/profile', icon: User },
];

const Sidebar = ({ isOpen, setIsOpen }) => {
    const location = useLocation();

    return (
        <>
            {/* Mobile backdrop */}
            <div
                className={clsx(
                    "fixed inset-0 z-20 bg-gray-900 bg-opacity-50 transition-opacity md:hidden",
                    isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
                )}
                onClick={() => setIsOpen(false)}
            />

            {/* Sidebar component */}
            <aside
                className={clsx(
                    "fixed inset-y-0 left-0 z-30 w-64 bg-white border-r border-gray-200 transform transition-transform duration-300 ease-in-out md:translate-x-0 md:static md:inset-0",
                    isOpen ? "translate-x-0" : "-translate-x-full"
                )}
            >
                <div className="h-full flex flex-col pt-5 pb-4 overflow-y-auto bg-gradient-to-b from-white to-gray-50">
                    <div className="flex items-center justify-between px-4 mb-6">
                        <span className="font-bold text-2xl text-brand-600 tracking-tight">LiveCaptions</span>
                        <button
                            className="md:hidden text-gray-500 hover:text-gray-700"
                            onClick={() => setIsOpen(false)}
                        >
                            <X className="w-6 h-6" />
                        </button>
                    </div>

                    <nav className="mt-2 flex-1 px-3 space-y-1">
                        {navigation.map((item) => {
                            const isActive = location.pathname === item.href;
                            return (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsOpen(false)}
                                    className={clsx(
                                        isActive
                                            ? 'bg-brand-50 text-brand-700 border-l-4 border-brand-600'
                                            : 'text-gray-600 hover:bg-gray-100 hover:text-gray-900 border-l-4 border-transparent',
                                        'group flex items-center px-3 py-3 text-sm font-medium rounded-r-md transition-all duration-200 ease-in-out'
                                    )}
                                >
                                    <item.icon
                                        className={clsx(
                                            isActive ? 'text-brand-600' : 'text-gray-400 group-hover:text-gray-500',
                                            'mr-3 flex-shrink-0 h-5 w-5 transition-colors'
                                        )}
                                        aria-hidden="true"
                                    />
                                    {item.name}
                                </Link>
                            );
                        })}
                    </nav>

                    <div className="p-4 border-t border-gray-200">
                        <div className="bg-brand-50 rounded-lg p-4">
                            <h4 className="text-sm font-semibold text-brand-800">Pro Plan</h4>
                            <p className="text-xs text-brand-600 mt-1">You used 80% of your caption minutes.</p>
                            <button className="mt-3 w-full text-xs font-medium text-white bg-brand-600 py-1.5 rounded hover:bg-brand-700 transition">
                                Upgrade
                            </button>
                        </div>
                    </div>
                </div>
            </aside>
        </>
    );
};

export default Sidebar;
