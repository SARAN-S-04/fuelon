import React from 'react';
import Navbar from '../navbar/navbar';

function Landing() {
  return (
    <div>
      <Navbar />

      <div className="w-full bg-gray-200 px-4 py-20 flex flex-col md:flex-row items-center justify-between">
        <div className="md:w-1/2">  
          <h1 className="text-5xl font-bold text-gray-800">Learn Without <span className="bg-yellow-500 text-black px-2">Limits</span></h1> 
          <h2 className="text-2xl font-bold text-gray-700 mt-4">With platformname</h2>
          <p className="text-lg text-gray-500 mt-4">Every teaching and learning journey is unique.</p>
          <p className='text-lg text-gray-500 mt-4'>We'll help guide your way.</p>
          <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full mt-4">Start Free Trial</button>
        </div>

        <div className="md:w-1/4">
          <img src="/landingimage.png" alt="Learn Without Limits" className="object-cover w-25 h-10 md:h-auto" />
        </div>
      </div>
    </div>
  );
}

export default Landing;