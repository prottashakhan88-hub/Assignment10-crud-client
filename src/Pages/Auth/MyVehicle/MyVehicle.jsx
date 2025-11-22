import React, { use, useEffect, useState } from 'react';
import { AuthContext } from '../../../Context/AuthContext';
import { Link, useNavigate } from 'react-router';
import Swal from 'sweetalert2';
// import toast from 'react-hot-toast';

const MyVehicle = () => {
     const navigate = useNavigate();
      // const { id } = useParams();
    const {user} = use(AuthContext)
      const [vehicle, setVehicle] = useState([]);
      console.log(vehicle)
  const [loading, setLoading] = useState(true)

    useEffect(() => {

        fetch(`http://localhost:3000/my-vehicles?email=${user?.email}`)
        .then(res => res.json())
        .then(data => {
           
            setVehicle(data)
            setLoading(false)
        } )
    }, [user])


    // const handleBookings = () => {
    //    fetch(`http://localhost:3000/bookings`, {
    //       method: "POST",
    //       headers: {
    //         "Content-Type": "application/json",
    //       },
    //       body: JSON.stringify({...vehicle, totalBookings: user?.email})
    //     })
    //       .then((res) => res.json())
    //       .then((data) => {
    //         console.log(data);
    //         toast.success("Successfully bookings!")
    //            navigate("/my-bookings");
    //       })
    //       .catch((err) => {
    //         console.log(err);
    //       });

    // }


    const handleDlete = (id) => {
         Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!",
    }).then((result) => {
      if (result.isConfirmed) {
        fetch(`http://localhost:3000/smarts/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
              navigate("/all-vehicles");
             Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success",
            });
          })
          .catch((err) => {
            console.log(err);
          });
      }
    });


    }

     if(loading) {
        return <div> Please wait ... Loading...</div>
    }
    return (
          <div className="py-8">
            <div className='py-6'>
              <h1 className='font-bold text-3xl'>My Vehicle</h1>
            </div>
      <div className="min-w-full border border-gray-200 rounded-md overflow-hidden">
        <header className="bg-gray-100">
          <ul className='flex flex-row gap-6'>
            <li className="px-4 py-2 text-left">Image</li>
            <li className="px-4 py-2 text-left">Vehicle Name</li>
            <li className="px-4 py-2 text-left">Category</li>
            <li className="px-4 py-2 text-left">PricePerDay</li>
            <li className="px-4 py-2 text-left">Location</li>
            <li className="px-4 py-2 text-left">Availability</li>
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
              <p className="px-4 py-2">${vehicle.pricePerDay}</p>
              <p className="px-4 py-2">{vehicle.location}</p>
              <span className="px-4 py-2">{vehicle.availability}</span>
                   <Link
                   to={`/view-details/${vehicle._id}`}
                  className="bg-blue-500 text-white px-2 py-1 rounded hover:bg-blue-600"
               
                >
                  View Details
                </Link>
                <Link
                   to={`/update-vehicles/${vehicle._id}`}
                  className="bg-yellow-500 text-white px-2 py-1 rounded hover:bg-yellow-600"
               
                >
                  Update
                </Link>
                <button
                   onClick={() => handleDlete(vehicle._id)}
                  className="bg-red-500 text-white px-2 py-1 rounded hover:bg-red-600">
                  Delete
                </button>
               


              </div>
            </div>
          ))}
        </div>
      </div>
      </div>
    );
};

export default MyVehicle;