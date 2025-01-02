import React, { useEffect, useRef } from 'react';

const TSP = () => {
    const iframeRef = useRef(null); // Ref to access the iframe

    // Function to handle parent page scroll and transfer it to the iframe
    const handleParentScroll = (event) => {
        if (iframeRef.current) {
            // Prevent the parent page from scrolling
            event.preventDefault();

            // Get the scroll direction and amount
            const delta = event.deltaY || event.detail || event.wheelDelta;

            // Scroll the iframe instead
            iframeRef.current.contentWindow.scrollBy({
                top: delta,
                behavior: 'smooth', // Optional: Add smooth scrolling
            });
        }
    };

    useEffect(() => {
        // Add scroll event listener to the parent page
        window.addEventListener('wheel', handleParentScroll, { passive: false });

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('wheel', handleParentScroll);
        };
    }, []);

    return (
        <div className="flex min-h-screen" style={{ overflow: 'hidden' }}> {/* Disable parent page scroll */}
            {/* Content Area with iframe */}
            <div className="w-full">
                <iframe
                    ref={iframeRef} // Attach ref to the iframe
                    src="/TSP/Traveling-Salesman-Algorithms.html" // URL or local file path
                    title="TSP Visualization"
                    className="w-full h-screen" // Full width and height of the page
                    style={{ border: 'none' }} // Remove iframe border
                />
            </div>
        </div>
    );
};

export default TSP;