import React from 'react';

export default function Welcomebg() {
    return (
        <div className="relative w-full h-screen bg-fixed">
        <div className="absolute inset-0 bg-gradient-to-t from-black to-transparent z-10"></div>
            <img
                src="towerbca.jpg"
                alt="Pemandangan Kota bundaran HI"
                className="w-full h-full object-cover"
            />
        </div>
    );
}