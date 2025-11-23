import React, { useContext, useEffect, useState } from 'react';
import { useLoaderData, useNavigate } from 'react-router';
import { AuthContext } from '../../../Context/AuthContext';
import toast from 'react-hot-toast';

const ViewDetails = () => {
    const data = useLoaderData();
    const vehicle = data.result;

    const navigate = useNavigate();
    const { user } = useContext(AuthContext); // FIX: useContext

    const [vehicles, setVehicles] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (!user?.email) return; 

        fetch(`http://localhost:3000/my-vehicles?email=${user.email}`)
            .then(res => res.json())
            .then(data => {
                setVehicles(data);
                setLoading(false);
            })
            .catch(err => {
                // console.log(err);
                setLoading(false);
            });
    }, [user?.email]);

    const handleBookings = () => {
        if (!user?.email) {
            toast.error("Please login to book a vehicle!");
            return;
        }

        fetch(`http://localhost:3000/bookings`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                vehicleId: vehicle._id,
                vehicleName: vehicle.vehicleName,
                coverImage: vehicle.coverImage,
                category: vehicle.category,
                description: vehicle.description,
                customerEmail: user.email, 
                createdAt: new Date(),
            }),
        })
            .then(res => res.json())
            .then(data => {
                // console.log(data);
                toast.success("Successfully booked!");
                navigate("/my-bookings");
            })
            .catch(err => console.log(err));
    };

    if (loading) {
        return <div> Please wait ... Loading...</div>;
    }

    return (
        <div className="max-w-5xl mx-auto p-4 md:p-6 lg:p-8">
            <div className="card bg-base-100 shadow-xl border border-gray-200 rounded-2xl overflow-hidden">
                <div className="flex md:flex-col lg:flex-row gap-8 p-6 md:p-8">
                    <div className="shrink-0 w-full md:w-1/2">
                        <img
                            src={vehicle.coverImage}
                            alt=""
                            className="w-full object-cover rounded-xl shadow-md"
                        />
                    </div>

                    <div className="flex flex-col justify-center space-y-4 w-full md:w-1/2">
                        <h1 className="text-3xl md:text-4xl font-bold text-gray-800">
                            {vehicle.vehicleName}
                        </h1>

                        <div className="flex gap-3">
                            <div className="badge badge-lg badge-outline text-pink-600 border-pink-600 font-medium">
                                {vehicle.category}
                            </div>
                        </div>

                        <p className="text-gray-600 leading-relaxed text-base md:text-lg">
                            {vehicle.description}
                        </p>
                        <div className="flex gap-3 mt-6">
                            <button
                                onClick={handleBookings}
                                className="btn rounded-full bg-linear-to-r from-pink-500 to-red-600">
                                Book Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default ViewDetails;
