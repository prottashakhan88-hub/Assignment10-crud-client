import React from 'react';
import { Link } from 'react-router';

const Banner = () => {
    return (
                <section
  className="relative h-screen bg-cover bg-center flex items-center justify-center text-center"
 style={{ backgroundImage: 'url("https://images.unsplash.com/photo-1502877338535-766e1452684a?auto=format&fit=crop&w=1600&q=80")'}} >
 
  <div className="absolute inset-0 bg-black/50"></div>

 
  <div className="relative z-10 text-white px-4">
    <h1 className="text-4xl md:text-6xl font-bold mb-6">Find Your Dream Vehicle</h1>
    <p className="text-lg md:text-xl mb-8 max-w-2xl mx-auto">
      Explore our collection of top-quality vehicles designed to match your style and performance needs.
    </p>
    <Link
      to="/all-vehicles"
      className="bg-linear-to-r from-pink-500 to-red-600 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
    >
      All Vehicles
    </Link>
  </div>
</section>
    );
};

export default Banner;