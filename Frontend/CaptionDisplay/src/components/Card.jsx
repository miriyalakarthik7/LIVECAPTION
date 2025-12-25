import { twMerge } from 'tailwind-merge';

const Card = ({ children, className, ...props }) => {
    return (
        <div className={twMerge('bg-white overflow-hidden shadow rounded-lg border border-gray-100', className)} {...props}>
            {children}
        </div>
    );
};

const CardHeader = ({ children, className }) => (
    <div className={twMerge('px-4 py-5 sm:px-6 border-b border-gray-200', className)}>
        {children}
    </div>
);

const CardContent = ({ children, className }) => (
    <div className={twMerge('px-4 py-5 sm:p-6', className)}>
        {children}
    </div>
);

const CardFooter = ({ children, className }) => (
    <div className={twMerge('px-4 py-4 sm:px-6 bg-gray-50 border-t border-gray-200', className)}>
        {children}
    </div>
);

Card.Header = CardHeader;
Card.Content = CardContent;
Card.Footer = CardFooter;

export default Card;
