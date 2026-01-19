import { useState, useEffect } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedPage from '../components/AnimatedPage';
import toast from 'react-hot-toast';

const Settings = () => {
    const [textSize, setTextSize] = useState('medium');
    const [contrast, setContrast] = useState('normal');
    const [speed, setSpeed] = useState('normal');
    const [language, setLanguage] = useState('en');
    const [audioDevices, setAudioDevices] = useState([]);
    const [selectedDeviceId, setSelectedDeviceId] = useState('default');

    useEffect(() => {
        const getDevices = async () => {
            try {
                // Request permission first to get labels
                await navigator.mediaDevices.getUserMedia({ audio: true });
                const devices = await navigator.mediaDevices.enumerateDevices();
                const inputs = devices.filter(device => device.kind === 'audioinput');
                setAudioDevices(inputs);
            } catch (error) {
                console.error("Error fetching devices:", error);
                toast.error("Could not access microphone list.");
            }
        };
        getDevices();
    }, []);

    const handleSave = () => {
        // Mock save action
        toast.promise(
            new Promise((resolve) => setTimeout(resolve, 1000)),
            {
                loading: 'Saving preferences...',
                success: 'Settings saved successfully!',
                error: 'Could not save settings.',
            }
        );
    };

    return (
        <AnimatedPage>
            <div className="space-y-6">
                <h2 className="text-2xl font-bold text-gray-900">Accessibility Settings</h2>

                <Card>
                    <Card.Header>
                        <h3 className="text-lg leading-6 font-medium text-gray-900">Display Preferences</h3>
                        <p className="mt-1 text-sm text-gray-500">Customize how captions appear on your screen.</p>
                    </Card.Header>
                    <Card.Content className="space-y-6">
                        <div>
                            <label className="text-base font-medium text-gray-900">Text Size</label>
                            <p className="text-sm text-gray-500 mb-3">Adjust the font size for better readability.</p>
                            <div className="grid grid-cols-3 gap-3">
                                {['small', 'medium', 'large'].map((size) => (
                                    <div
                                        key={size}
                                        onClick={() => setTextSize(size)}
                                        className={`
                                        cursor-pointer rounded-lg border p-4 flex items-center justify-center uppercase font-bold transition-all text-base
                                        ${textSize === size ? 'border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-500' : 'border-gray-200 hover:border-gray-300'}
                                    `}
                                    >
                                        <span>
                                            {size}
                                        </span>
                                    </div>
                                ))}
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <label className="text-base font-medium text-gray-900">High Contrast Mode</label>
                            <p className="text-sm text-gray-500 mb-3">Increase contrast for better visibility.</p>
                            <div className="flex items-center space-x-4">
                                <button
                                    onClick={() => setContrast('normal')}
                                    className={`px-4 py-2 rounded-md font-medium border ${contrast === 'normal' ? 'bg-white border-gray-300 text-gray-900 shadow-sm' : 'bg-gray-100 border-transparent text-gray-500'}`}
                                >
                                    Normal
                                </button>
                                <button
                                    onClick={() => setContrast('high')}
                                    className={`px-4 py-2 rounded-md font-medium border ${contrast === 'high' ? 'bg-gray-900 border-transparent text-white shadow-sm' : 'bg-gray-100 border-transparent text-gray-500'}`}
                                >
                                    High Contrast
                                </button>
                            </div>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <label className="text-base font-medium text-gray-900">Caption Speed</label>
                            <p className="text-sm text-gray-500 mb-3">Adjust how quickly captions appear.</p>
                            <div className="grid grid-cols-3 gap-3">
                                {['slow', 'normal', 'fast'].map((s) => (
                                    <button
                                        key={s}
                                        onClick={() => setSpeed(s)}
                                        className={`
                                        px-4 py-3 rounded-lg font-bold uppercase text-sm border transition-all
                                        ${speed === s ? 'bg-brand-600 text-white border-brand-600 shadow-md' : 'bg-white text-gray-700 border-gray-200 hover:bg-gray-50'}
                                    `}
                                    >
                                        {s}
                                    </button>
                                ))}
                            </div>
                        </div>
                        <div className="border-t border-gray-200 pt-6">
                            <label className="text-base font-medium text-gray-900">Audio Language</label>
                            <p className="text-sm text-gray-500 mb-3">Select the primary language for speech recognition.</p>
                            <select
                                value={language}
                                onChange={(e) => setLanguage(e.target.value)}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm rounded-md"
                            >
                                <option value="en">English (US)</option>
                                <option value="es">Spanish</option>
                                <option value="fr">French</option>
                                <option value="de">German</option>
                                <option value="hi">Hindi</option>
                                <option value="ja">Japanese</option>
                            </select>
                        </div>

                        <div className="border-t border-gray-200 pt-6">
                            <label className="text-base font-medium text-gray-900">Microphone Input</label>
                            <p className="text-sm text-gray-500 mb-3">Choose which microphone to use for capturing audio.</p>
                            <select
                                value={selectedDeviceId}
                                onChange={(e) => setSelectedDeviceId(e.target.value)}
                                className="mt-1 block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm rounded-md"
                            >
                                <option value="default">Default Microphone</option>
                                {audioDevices.map((device) => (
                                    <option key={device.deviceId} value={device.deviceId}>
                                        {device.label || `Microphone ${device.deviceId.slice(0, 5)}...`}
                                    </option>
                                ))}
                            </select>
                        </div>
                    </Card.Content>
                    <Card.Footer className="flex justify-end">
                        <Button variant="outline" className="mr-2">Reset to Default</Button>
                        <Button onClick={handleSave}>Save Changes</Button>
                    </Card.Footer>
                </Card>
            </div>
        </AnimatedPage>
    );
};

export default Settings;
