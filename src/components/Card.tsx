import React, { ReactNode } from "react";

interface CardProps {
    className?: string;
    onClick?: () => void;
    header?: ReactNode;
    content?: ReactNode;
    footer?: ReactNode;
    children?: ReactNode;
}

const Card: React.FC<CardProps> = ({
    className,
    onClick,
    header,
    content,
    footer,
    children,
}) => {
    return (
        <div
            className={`bg-white rounded-lg shadow-xl overflow-hidden transform transition-all duration-300 hover:scale-105 hover:shadow-2xl cursor-pointer ${className}`}
            onClick={onClick}
        >
            <div className="p-6 relative">
                {header && (
                    <div className="flex items-center justify-between mb-4">
                        <div className="flex items-center space-x-2">
                            {header}
                        </div>
                    </div>
                )}
                {content && <div className="text-gray-700 mb-4 text-sm">{content}</div>}
                {footer && (
                    <div className="flex justify-between items-center text-gray-600 text-xs">
                        {footer}
                    </div>
                )}
            </div>
            {children}
            <div
                className="absolute top-0 left-0 w-full h-full bg-gradient-to-t from-transparent to-white opacity-10 z-0"
                style={{
                    background: `radial-gradient(circle at center, rgba(255, 255, 255, 0.8) 0%, rgba(0, 0, 0, 0.1) 100%)`,
                }}
            />
        </div>
    );
};

export default Card;
