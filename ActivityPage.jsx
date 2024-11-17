// ActivityPage.jsx
import React from 'react';
import Navbar from '../components/Navbar';
import WeatherComponent from '../components/WeatherComponent';

function ActivityPage() {
    return (
        <div>
            <Navbar />
            <div className="relative my-12 flex flex-col items-center">
                {/* TITLE */}
                <h1 className="">Weather</h1>
                <hr className="mb-6 mt-2 w-1/3" />

                {/* Center Card for Vote and Weather */}
                <div className="relative z-10 p-6 w-full max-w-2xl flex flex-col gap-6">
                   <WeatherComponent />
                </div>
            </div>
        </div>
    );
}

export default ActivityPage;