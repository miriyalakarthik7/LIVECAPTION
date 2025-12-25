import { useState } from 'react';
import Card from '../components/Card';
import Button from '../components/Button';
import AnimatedPage from '../components/AnimatedPage';
import toast from 'react-hot-toast';

const Settings = () => {
    const [textSize, setTextSize] = useState('medium');
    const [contrast, setContrast] = useState('normal');
    const [speed, setSpeed] = useState('normal');

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
                                        cursor-pointer rounded-lg border p-4 flex items-center justify-center uppercase font-bold transition-all
                                        ${textSize === size ? 'border-brand-500 bg-brand-50 text-brand-700 ring-1 ring-brand-500' : 'border-gray-200 hover:border-gray-300'}
                                    `}
                                    >
                                        <span className={size === 'small' ? 'text-sm' : size === 'large' ? 'text-xl' : 'text-base'}>
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
                            <input
                                type="range"
                                min="1"
                                max="100"
                                value={speed === 'slow' ? 25 : speed === 'fast' ? 100 : 50}
                                onChange={(e) => {
                                    const val = parseInt(e.target.value);
                                    if (val < 40) setSpeed('slow');
                                    else if (val > 60) setSpeed('fast');
                                    else setSpeed('normal');
                                }}
                                className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brand-600"
                            />
                            <div className="flex justify-between text-xs text-gray-500 mt-2">
                                <span>Slow</span>
                                <span>Normal</span>
                                <span>Fast</span>
                            </div>
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
