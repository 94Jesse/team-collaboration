import React from 'react'
import Navbar from './components/Navbar'

function App() {
  return (
    <div className="flex flex-row justify-between items-center px-20 py-4">
    <div className="text-darkgreen text-3xl poppins-bold">
      Ripple & Refresh
    </div>
    <div className="flex flex-row gap-8">
      <p>map</p>
      <p>rsvp</p>
      <p>activity</p>
    </div>
  </div>
);
}

export default App
