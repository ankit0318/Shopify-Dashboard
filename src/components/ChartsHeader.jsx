import React from 'react';

const ChartsHeader = ({ category, title }) => {
    return (
        <div className="max-md:mt-12 mb-10">
            <div>
                <p className="text-lg text-gray-400 dark:text-yellow-100">Charts</p>
                <p className="text-3xl font-extrabold tracking-tight  dark:text-white text-slate-900">{category}</p>
            </div>
            <p className="text-lg text-center font-extrabold tracking-tight  dark:text-white text-slate-900 mt-4">{title}</p>
        </div>
    );
};

export default ChartsHeader;