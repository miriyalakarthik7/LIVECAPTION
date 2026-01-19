import StatsCard from '../components/StatsCard';
import Card from '../components/Card';
import Button from '../components/Button';
import { Mic, Clock, FileText, Zap, Play } from 'lucide-react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">{getGreeting()}, John</h2>
                    <p className="mt-1 text-sm text-gray-500">Here's what's happening with your captions today.</p>
                </div>
                <div className="mt-4 sm:mt-0">
                    <Link to="/app/live">
                        <Button className="w-full sm:w-auto shadow-sm">
                            <Play className="w-4 h-4 mr-2" /> Start New Session
                        </Button>
                    </Link>
                </div>
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
                <StatsCard
                    title="Total Sessions"
                    value="24"
                    change="12%"
                    icon={Mic}
                    color="brand"
                />
                <StatsCard
                    title="Minutes Captioned"
                    value="1,240"
                    change="5%"
                    icon={Clock}
                    color="brand"
                />
                <StatsCard
                    title="Transcripts Saved"
                    value="18"
                    change="2"
                    icon={FileText}
                    color="purple"
                    changeType="neutral"
                />
                <StatsCard
                    title="Avg. Accuracy"
                    value="98.5%"
                    icon={Zap}
                    color="green"
                    change="0.5%"
                />
            </div>

            {/* Recent Activity Section */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
                <div className="lg:col-span-2">
                    <Card className="h-full">
                        <Card.Header className="flex justify-between items-center">
                            <h3 className="text-lg leading-6 font-medium text-gray-900">Recent Sessions</h3>
                            <Link to="/app/history" className="text-sm text-brand-600 hover:text-brand-500 font-medium">View all</Link>
                        </Card.Header>
                        <Card.Content>
                            <ul className="divide-y divide-gray-200">
                                {[
                                    { title: 'Team Sync', date: 'Today, 10:00 AM', duration: '45m' },
                                    { title: 'Client Interview', date: 'Yesterday, 2:00 PM', duration: '30m' },
                                    { title: 'Lecture Notes', date: 'Oct 23, 11:00 AM', duration: '1h 15m' },
                                ].map((item, i) => (
                                    <li key={i} className="py-4 flex justify-between items-center group cursor-pointer hover:bg-gray-50 -mx-6 px-6 transition-colors">
                                        <div>
                                            <p className="text-sm font-medium text-gray-900 group-hover:text-brand-600">{item.title}</p>
                                            <p className="text-sm text-gray-500">{item.date}</p>
                                        </div>
                                        <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium bg-gray-100 text-gray-800">
                                            {item.duration}
                                        </span>
                                    </li>
                                ))}
                            </ul>
                        </Card.Content>
                    </Card>
                </div>

                <div className="lg:col-span-1">
                    <div className="bg-gradient-to-br from-brand-600 to-brand-800 rounded-lg shadow-lg overflow-hidden text-white p-6 h-full flex flex-col justify-between relative">
                        <div>
                            <h3 className="text-lg font-bold mb-2">Did you know?</h3>
                            <p className="text-brand-100 text-sm">You can enable "Simplified Mode" in live captions to get AI-summarized sentences in real-time.</p>
                        </div>
                        <div className="mt-6">
                            <Link to="/app/settings">
                                <button className="w-full bg-white text-brand-600 py-2 rounded-md font-medium text-sm hover:bg-brand-50 transition-colors">
                                    Try it out
                                </button>
                            </Link>
                        </div>
                        {/* Decorational shapes */}
                        <div className="absolute top-0 right-0 -mr-8 -mt-8 w-24 h-24 rounded-full bg-white opacity-10"></div>
                        <div className="absolute bottom-0 left-0 -ml-8 -mb-8 w-32 h-32 rounded-full bg-white opacity-10"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

function getGreeting() {
    const hour = new Date().getHours();
    if (hour < 12) return 'Good morning';
    if (hour < 18) return 'Good afternoon';
    return 'Good evening';
}

export default Dashboard;
