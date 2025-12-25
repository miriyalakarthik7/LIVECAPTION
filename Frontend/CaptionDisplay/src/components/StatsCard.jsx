import { ArrowUp, ArrowDown } from 'lucide-react';
import Card from './Card';
import clsx from 'clsx';

const StatsCard = ({ title, value, change, changeType = 'positive', icon: Icon, color = 'brand' }) => {

    const colorClasses = {
        brand: 'bg-brand-500',
        blue: 'bg-blue-500',
        green: 'bg-green-500',
        purple: 'bg-purple-500',
        orange: 'bg-orange-500',
    };

    return (
        <Card className="hover:shadow-lg transition-shadow duration-300">
            <div className="p-5">
                <div className="flex items-center">
                    <div className="flex-shrink-0">
                        <div className={clsx("rounded-md p-3", colorClasses[color] || 'bg-brand-500')}>
                            <Icon className="h-6 w-6 text-white" aria-hidden="true" />
                        </div>
                    </div>
                    <div className="ml-5 w-0 flex-1">
                        <dl>
                            <dt className="text-sm font-medium text-gray-500 truncate">{title}</dt>
                            <dd>
                                <div className="text-lg font-bold text-gray-900">{value}</div>
                            </dd>
                        </dl>
                    </div>
                </div>
            </div>
            {(change) && (
                <div className="bg-gray-50 px-5 py-3">
                    <div className="text-sm">
                        <span className={clsx(
                            "font-medium inline-flex items-center",
                            changeType === 'positive' ? 'text-green-600' : 'text-red-600'
                        )}>
                            {changeType === 'positive' ? <ArrowUp className="w-3 h-3 mr-1" /> : <ArrowDown className="w-3 h-3 mr-1" />}
                            {change}
                        </span>
                        <span className="text-gray-500 ml-2"> from last month</span>
                    </div>
                </div>
            )}
        </Card>
    );
};

export default StatsCard;
