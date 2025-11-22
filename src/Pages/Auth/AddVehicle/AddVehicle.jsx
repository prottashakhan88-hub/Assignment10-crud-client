import { use } from "react";
import { AuthContext } from "../../../Context/AuthContext";
import toast from "react-hot-toast";

const AddVehicle = () => {
  const { user } = use(AuthContext);

  const handleSubmit = (e) => {
    e.preventDefault();

    const formData = {
      vehicleName: e.target.vehicleName.value,
      ownerName: e.target.ownerName.value,
      category: e.target.category.value,
      pricePerDay: parseFloat(e.target.pricePerDay.value),
      location: e.target.location.value,
      availability: e.target.availability.value,
      description: e.target.description.value,
      coverImage: e.target.coverImage.value, 
      userEmail: user.email,
      createdAt: new Date(),
    };

    fetch("http://localhost:3000/smarts", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(formData)
    })
      .then((res) => res.json())
      .then((data) => {
        toast.success("✅ Vehicle added successfully!");
        console.log("Vehicle added:", data);
       
      })
      .catch((err) => {
        console.error(err);
        toast.error("❌ Failed to add vehicle!");
      });
  };

  return (
    <div className="card border border-gray-200 bg-base-100 w-full max-w-md mx-auto shadow-2xl rounded-2xl">
      <div className="card-body p-6 relative">
        <h2 className="text-2xl font-bold text-center mb-6">Add Vehicle</h2>

        <form onSubmit={handleSubmit} className="space-y-4">
          {/* Vehicle Name */}
          <div>
            <label className="label font-medium">Vehicle Name</label>
            <input
              type="text"
              name="vehicleName"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter vehicle name"
            />
          </div>

          {/* Owner Name */}
          <div>
            <label className="label font-medium">Owner Name</label>
            <input
              type="text"
              name="ownerName"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter owner name"
            />
          </div>

          {/* Category */}
          <div>
            <label className="label font-medium">Category</label>
            <select
              defaultValue=""
              name="category"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="" disabled>
                Select category
              </option>
              <option value="Electric">Electric</option>
              <option value="Van">Van</option>
              <option value="Sedan">Sedan</option>
              <option value="SUV">SUV</option>
            </select>
          </div>

          {/* Price Per Day */}
          <div>
            <label className="label font-medium">Price Per Day ($)</label>
            <input
              type="number"
              name="pricePerDay"
              required
              min="0"
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter price per day"
            />
          </div>

          {/* Location */}
          <div>
            <label className="label font-medium">Location</label>
            <input
              type="text"
              name="location"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="Enter location"
            />
          </div>

          {/* Availability */}
          <div>
            <label className="label font-medium">Availability</label>
            <select
              name="availability"
              required
              className="select w-full rounded-full focus:border-0 focus:outline-gray-200"
            >
              <option value="Available">Available</option>
              <option value="Booked">Booked</option>
            </select>
          </div>

          {/* Description */}
          <div>
            <label className="label font-medium">Description</label>
            <textarea
              name="description"
              required
              rows="3"
              className="textarea w-full rounded-2xl focus:border-0 focus:outline-gray-200 h-[200px]"
              placeholder="Enter vehicle description"
            ></textarea>
          </div>

          {/* Cover Image URL */}
          <div>
            <label className="label font-medium">Cover Image URL</label>
            <input
              type="url"
              name="coverImage"
              required
              className="input w-full rounded-full focus:border-0 focus:outline-gray-200"
              placeholder="https://example.com/vehicle.jpg"
            />
          </div>

          {/* Submit */}
          <button
            type="submit"
            className="btn w-full text-white mt-6 rounded-full bg-linear-to-r from-pink-500 to-red-600 hover:from-pink-600 hover:to-red-700"
          >
            Add Vehicle
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddVehicle;
