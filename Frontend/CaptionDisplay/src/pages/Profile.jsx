import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import Input from '../components/Input';
import { User, Mail, Globe, Shield } from 'lucide-react';

const Profile = () => {
    const [isEditing, setIsEditing] = useState(false);
    const [user, setUser] = useState({
        name: 'John Doe',
        email: 'john.doe@example.com',
        language: 'English (US)',
        accountType: 'Premium',
    });

    const handleChange = (e) => {
        setUser({ ...user, [e.target.name]: e.target.value });
    };

    const handleSave = () => {
        setIsEditing(false);
        // Logic to save to backend would go here
    };

    return (
        <div className="max-w-4xl mx-auto space-y-6">
            <div className="flex justify-between items-center">
                <h2 className="text-2xl font-bold text-gray-900">User Profile</h2>
                <Button onClick={() => isEditing ? handleSave() : setIsEditing(true)}>
                    {isEditing ? 'Save Changes' : 'Edit Profile'}
                </Button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {/* ID Card */}
                <Card className="col-span-1">
                    <div className="flex flex-col items-center p-6 text-center">
                        <div className="h-24 w-24 bg-brand-200 rounded-full flex items-center justify-center text-brand-700 font-bold text-3xl mb-4">
                            JD
                        </div>
                        <h3 className="text-xl font-medium text-gray-900">{user.name}</h3>
                        <p className="text-sm text-gray-500">{user.email}</p>
                        <div className="mt-4 flex space-x-2">
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-green-100 text-green-800">
                                Active
                            </span>
                            <span className="px-2 py-1 text-xs font-semibold rounded-full bg-brand-100 text-brand-800">
                                {user.accountType}
                            </span>
                        </div>
                    </div>
                </Card>

                {/* Details Form */}
                <Card className="col-span-1 md:col-span-2">
                    <Card.Header>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Personal Information</h3>
                        <p className="mt-1 text-sm text-gray-500">Manage your personal details and preferences.</p>
                    </Card.Header>
                    <Card.Content>
                        <form className="space-y-6">
                            <div className="grid grid-cols-1 gap-y-6 gap-x-4 sm:grid-cols-6">
                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                        <User className="w-4 h-4 mr-2" /> Full Name
                                    </label>
                                    {isEditing ? (
                                        <Input name="name" value={user.name} onChange={handleChange} />
                                    ) : (
                                        <p className="mt-1 text-sm text-gray-900">{user.name}</p>
                                    )}
                                </div>

                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                        <Mail className="w-4 h-4 mr-2" /> Email Address
                                    </label>
                                    {isEditing ? (
                                        <Input name="email" value={user.email} onChange={handleChange} />
                                    ) : (
                                        <p className="mt-1 text-sm text-gray-900">{user.email}</p>
                                    )}
                                </div>

                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                        <Globe className="w-4 h-4 mr-2" /> Preferred Language
                                    </label>
                                    {isEditing ? (
                                        <select
                                            name="language"
                                            value={user.language}
                                            onChange={handleChange}
                                            className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm placeholder-gray-400 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm custom-select"
                                        >
                                            <option>English (US)</option>
                                            <option>Spanish</option>
                                            <option>French</option>
                                            <option>German</option>
                                        </select>
                                    ) : (
                                        <p className="mt-1 text-sm text-gray-900">{user.language}</p>
                                    )}
                                </div>

                                <div className="sm:col-span-3">
                                    <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center">
                                        <Shield className="w-4 h-4 mr-2" /> Account Type
                                    </label>
                                    <p className="mt-1 text-sm text-gray-900">{user.accountType}</p>
                                </div>
                            </div>
                        </form>
                    </Card.Content>
                    <Card.Footer className="flex justify-end">
                        <Button variant="danger" size="sm">
                            Sign out
                        </Button>
                    </Card.Footer>
                </Card>
            </div>
        </div>
    );
};

export default Profile;
