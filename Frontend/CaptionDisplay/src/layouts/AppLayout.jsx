import { useState } from 'react';
import { Outlet } from 'react-router-dom';
import { Menu } from 'lucide-react';
import Sidebar from '../components/Sidebar';

const AppLayout = () => {
    const [isSidebarOpen, setIsSidebarOpen] = useState(false);

    return (
        <div className="min-h-screen bg-gray-50 flex">
            {/* Sidebar with mobile control */}
            <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />

            <div className="flex-1 flex flex-col overflow-hidden transition-all duration-300">
                {/* Header */}
                <header className="bg-white shadow-sm h-16 flex items-center justify-between px-4 sm:px-6 lg:px-8 z-10">
                    <div className="flex items-center">
                        <button
                            type="button"
                            className="md:hidden -ml-2 mr-2 p-2 rounded-md text-gray-500 hover:text-gray-900 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-brand-500"
                            onClick={() => setIsSidebarOpen(true)}
                        >
                            <span className="sr-only">Open sidebar</span>
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        </button>
                        <h1 className="text-xl font-bold text-gray-900">Dashboard</h1>
                    </div>

                    <div className="flex items-center space-x-4">
                        <div className="hidden sm:flex flex-col items-end">
                            <span className="text-sm font-medium text-gray-700">John Doe</span>
                            <span className="text-xs text-gray-500">Premium User</span>
                        </div>
                        <div className="bg-brand-100 rounded-full h-9 w-9 overflow-hidden border-2 border-white shadow-sm cursor-pointer hover:ring-2 hover:ring-brand-500 transition-all">
                            <div className="h-full w-full flex items-center justify-center text-brand-700 font-bold text-sm">JD</div>
                        </div>
                    </div>
                </header>

                {/* Main Content */}
                <main className="flex-1 overflow-x-hidden overflow-y-auto bg-gray-50 p-4 sm:p-6 lg:p-8">
                    <Outlet />
                </main>
            </div>
        </div>
    );
};

export default AppLayout;
