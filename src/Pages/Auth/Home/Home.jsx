import React from 'react';

import Banner from '../../../components/Banner';
import { useLoaderData } from 'react-router';
import Card from '../../../components/Card';

const Home = () => {
  const data = useLoaderData()
  console.log(data)
    return (
        <div>
       <Banner/>
        
        <div className="text-2xl text-center font-bold"> Latest Vehicles</div>
        <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3 mt-10'>
          {data.map(vehicle => <Card key={vehicle._id} vehicle={vehicle}/>)}

        </div>

         <section className="py-20 bg-gray-500 text-gray-100 mt-10">
          <div className="max-w-5xl mx-auto px-4 text-center">
            <h2 className="text-3xl font-bold mb-6">About TravelEase</h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-3xl mx-auto mb-8">
                TravelEase is your trusted platform for exploring, renting, and buying vehicles with confidence.
                Whether you're planning a weekend getaway, a business trip, or simply need a reliable ride,
                we connect you to top-rated owners and verified listings across multiple categories.
            </p>
          </div>
       </section>

        </div>
    );
};

export default Home;