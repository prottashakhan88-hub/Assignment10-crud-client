import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';

const MyBookings = () => {
     const {user} = use(AuthContext)
          const [vehicle, setVehicle] = useState({});
          console.log(vehicle)
      const [loading, setLoading] = useState(true)

       useEffect(() => {
      
              fetch(`http://localhost:3000/my-bookings?email=${user?.email}`)
              .then(res => res.json())
              .then(data => {
                console.log(data)
                 
                  setVehicle(data)
                  setLoading(false)
              } )
          }, [user])

      if(loading) {
        return <div> Please wait ... Loading...</div>
    }
    return (
          <div className="p-8">
            <div className='py-7'>
                 <h1 className='font-bold text-3xl mt-5'>My Bookings</h1>
            </div>
            {/* <h1 className='font-bold text-3xl mt-5'>My Bookings</h1> */}
      <div className="min-w-full border border-gray-200 rounded-md overflow-hidden">
        <header className="bg-gray-100">
          <ul className='flex flex-row gap-10'>
            <li className="px-4 py-2 text-left">Image</li>
            <li className="px-4 py-2 text-left">Vehicle Name</li>
            <li className="px-4 py-2 text-left">Category</li>
            <li className="px-4 py-2 text-left">customerEmail</li>
            <li className="px-4 py-2 text-left">Actions</li>
          </ul>
        </header>
        <div>
          {vehicle.map(vehicle => (
            <div key={vehicle._id} className="border-t">
              <div className="px-6 py-2 flex flex-row items-center gap-6">
                <img 
                  src={vehicle.coverImage} 
                  alt={vehicle.vehicleName} 
                  className="w-20 h-16 object-cover rounded"
                />
                  <h1 className="px-4 py-2">{vehicle.vehicleName}</h1>
              <h2 className="px-4 py-2">{vehicle.category}</h2>
              <p className="px-4 py-2">{vehicle.customerEmail}</p>
             
                <button
                  className="bg-pink-500 text-white px-2 py-1 rounded hover:bg-pink-600">
                  Bookings
                </button>


              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
};

export default MyBookings;