import React from 'react';

const TSP = () => {
    return (
        <div className="flex min-h-screen">
            {/* Content Area with iframe */}
            <div className="w-full">
                <iframe
                    src="/TSP/Traveling-Salesman-Algorithms.html" // URL or local file path
                    title="TSP Visualization"
                    className="w-screen h-screen" // Full width and height of the page
                    style={{ border: 'none' }} // Remove iframe border
                />
            </div>
        </div>
    );
};

export default TSP;