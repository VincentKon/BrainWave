import React from 'react';

const Portfolio = () => {
    return (
        <div className="w-full h-auto bg-white">
            <div className="w-full h-[2046px] bg-white">
                {/* Hero Section */}
                <div className="relative w-full h-[578px] bg-cover" style={{ backgroundImage: 'url(<path-to-image>)' }}>
                    <div className="absolute inset-0 bg-[#161d39] opacity-80"></div>
                    <div className="absolute inset-0 flex justify-center items-center">
                        <h1 className="text-white font-['Exo'] text-6xl font-bold">Portfolio</h1>
                    </div>
                    <div className="absolute bottom-5 w-full flex justify-center items-center space-x-4 text-white">
                        <span>Home</span>
                        <span className="text-[#f60]">›</span>
                        <span>Portfolio</span>
                    </div>
                </div>

                {/* Intro Section */}
                <div className="flex justify-center items-start py-5">
                    <div className="text-center">
                        <h2 className="text-[#f60] font-['Exo'] text-lg">Our best portfolio</h2>
                        <div className="flex items-baseline justify-center space-x-2">
                            <span className="text-black text-[3.4375rem] font-bold">Our</span>
                            <span className="text-black text-[3.4375rem] font-bold">portfolio</span>
                        </div>
                    </div>
                </div>

                {/* Description */}
                <div className="flex justify-center items-center px-4">
                    <p className="text-[#1c1d20] text-lg text-center">
                        We’ve grown up with the internet revolution, and we know how to deliver on its promise of improved business.
                    </p>
                </div>

                {/* Portfolio Items */}
                <div className="grid grid-cols-2 gap-4 justify-center items-center py-8">
                    <div className="w-[390px] h-[390px] bg-cover rounded-[0.3125rem]" style={{ backgroundImage: 'url(<path-to-image>)' }}></div>
                    <div className="w-[390px] h-[390px] bg-cover rounded-[0.3125rem]" style={{ backgroundImage: 'url(<path-to-image>)' }}></div>
                    <div className="w-[390px] h-[390px] bg-cover rounded-[0.3125rem]" style={{ backgroundImage: 'url(<path-to-image>)' }}></div>
                    <div className="w-[390px] h-[390px] bg-cover rounded-[0.3125rem]" style={{ backgroundImage: 'url(<path-to-image>)' }}></div>
                </div>

                {/* Category Buttons */}
                <div className="flex justify-center space-x-4 py-4">
                    <button className="px-6 py-3 border border-[#e0dde5] text-black font-['Exo'] text-base rounded-full">BUSINESS</button>
                    <button className="px-6 py-3 border border-[#e0dde5] text-black font-['Exo'] text-base rounded-full">TECHNOLOGY</button>
                    <button className="px-6 py-3 border border-[#e0dde5] text-black font-['Exo'] text-base rounded-full">UI/UX DESIGN</button>
                    <button className="px-6 py-3 bg-[#f60] text-white font-['Exo'] text-base rounded-full uppercase">Load More</button>
                    <button className="px-6 py-3 border border-[#e0dde5] text-black font-['Exo'] text-base rounded-full">WEB DESIGN</button>
                    <button className="px-6 py-3 border border-[#e0dde5] text-black font-['Exo'] text-base rounded-full">DEVELOPMENT</button>
                </div>

                {/* Footer Section */}
                <div className="flex justify-center items-center h-[697px] bg-[#140626] text-white">
                    <div className="text-center">
                        <h3 className="font-bold">Footer Content Here</h3>
                        {/* Add your footer content */}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Portfolio;
