import React from 'react';

const Card = ({ title, details, color = 'blue' }) => {
    let borderColorClass;
    let titleColorClass;

    switch (color) {
        case 'green':
            borderColorClass = 'border-green-500';
            titleColorClass = 'text-green-400';
            break;
        case 'yellow':
            borderColorClass = 'border-yellow-500';
            titleColorClass = 'text-yellow-400';
            break;
        case 'blue':
        default:
            borderColorClass = 'border-blue-500';
            titleColorClass = 'text-blue-400';
    }

    const cardClasses = `
        h-52 w-64 p-4 rounded-xl 
        bg-gray-800 shadow-lg 
        border-t-4 ${borderColorClass} 
        flex flex-col justify-between 
        transition-all duration-300 hover:shadow-2xl 
        hover:scale-[1.03] cursor-pointer
    `;

    return (
        <div className={cardClasses}>
            
            <div className="flex flex-col">
                <h3 className={`text-lg font-semibold ${titleColorClass} mb-2`}>
                    {title}
                </h3>
                <p className='text-sm text-slate-400 overflow-hidden line-clamp-3'>
                    {details}
                </p>
            </div>

            <span className='text-xs text-slate-500 mt-2 self-end'>
                {new Date().toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' })}
            </span>
        </div>
    );
};

export default Card;