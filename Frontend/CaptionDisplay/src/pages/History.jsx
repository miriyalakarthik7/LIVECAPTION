import { useState } from 'react';
import { Download, Eye, Calendar, Clock, FileText } from 'lucide-react';
import Card from '../components/Card';
import Badge from '../components/Badge';
import Button from '../components/Button';

const mockHistory = [
    { id: 1, date: 'Oct 25, 2023', time: '10:00 AM', duration: '45 min', title: 'Team Weekly Sync', status: 'completed' },
    { id: 2, date: 'Oct 24, 2023', time: '02:30 PM', duration: '1 hr 15 min', title: 'Project Review', status: 'completed' },
    { id: 3, date: 'Oct 23, 2023', time: '11:15 AM', duration: '30 min', title: 'Client Call', status: 'interrupted' },
    { id: 4, date: 'Oct 22, 2023', time: '09:00 AM', duration: '1 hr', title: 'Design Huddle', status: 'completed' },
    { id: 5, date: 'Oct 20, 2023', time: '04:00 PM', duration: '20 min', title: 'Quick Catchup', status: 'completed' },
];

const History = () => {
    const [filter, setFilter] = useState('all');

    const filteredHistory = filter === 'all'
        ? mockHistory
        : mockHistory.filter(h => h.status === filter);

    return (
        <div className="space-y-6">
            <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                <div>
                    <h2 className="text-2xl font-bold text-gray-900">Caption History</h2>
                    <p className="mt-1 text-sm text-gray-500">Access and manage your past captioning sessions.</p>
                </div>
                <div className="mt-4 sm:mt-0 flex space-x-3">
                    <select
                        className="block w-full pl-3 pr-10 py-2 text-base border-gray-300 focus:outline-none focus:ring-brand-500 focus:border-brand-500 sm:text-sm rounded-md"
                        value={filter}
                        onChange={(e) => setFilter(e.target.value)}
                    >
                        <option value="all">All Sessions</option>
                        <option value="completed">Completed</option>
                        <option value="interrupted">Interrupted</option>
                    </select>
                </div>
            </div>

            <div className="grid gap-4">
                {filteredHistory.map((session) => (
                    <Card key={session.id} className="hover:shadow-md transition-shadow">
                        <div className="px-4 py-4 sm:px-6 flex items-center justify-between">
                            <div className="flex items-start space-x-4">
                                <div className="flex-shrink-0 bg-brand-100 rounded-lg p-2">
                                    <FileText className="h-6 w-6 text-brand-600" />
                                </div>
                                <div>
                                    <h3 className="text-lg font-medium text-gray-900">{session.title}</h3>
                                    <div className="mt-1 flex flex-wrap items-center text-sm text-gray-500 gap-4">
                                        <div className="flex items-center">
                                            <Calendar className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                            {session.date}
                                        </div>
                                        <div className="flex items-center">
                                            <Clock className="flex-shrink-0 mr-1.5 h-4 w-4 text-gray-400" />
                                            {session.time}
                                        </div>
                                        <div className="flex items-center">
                                            <span className="font-medium">Duration:</span>
                                            <span className="ml-1">{session.duration}</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="flex items-center space-x-4">
                                <Badge variant={session.status === 'completed' ? 'green' : 'yellow'}>
                                    {session.status}
                                </Badge>
                                <div className="hidden sm:flex space-x-2">
                                    <Button variant="ghost" size="sm">
                                        <Eye className="w-4 h-4 mr-2" /> View
                                    </Button>
                                    <Button variant="ghost" size="sm">
                                        <Download className="w-4 h-4 mr-2" /> Export
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </Card>
                ))}
            </div>
        </div>
    );
};

export default History;
