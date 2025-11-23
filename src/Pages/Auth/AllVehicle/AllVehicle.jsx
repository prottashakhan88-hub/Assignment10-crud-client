import React from 'react';
import { useLoaderData } from 'react-router';
import Card from '../../../components/Card';

const AllVehicle = () => {
    const data = useLoaderData()
    // console.log(data)
    return (
        <div>
            <div className="text-2xl text-center font-bold"> All Vehicle</div>
             <p className=" text-center py-5">Explore Vehicle.</p>
             <div className='grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-3'>
                {data.map((vehicle) => (
                    <Card key={vehicle._id} vehicle={vehicle}/>
                ))}

             </div>
        </div>
    );
};

export default AllVehicle;