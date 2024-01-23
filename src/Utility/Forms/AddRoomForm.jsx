import { useState } from "react";

const AddRoomForm = ({ handleCategory, handleAddRoom,phoneNumberError }) => {

 

  return (
    <form
      onSubmit={handleAddRoom}
      className="flex lg:w-1/2 w-[90vw] mt-10 space-y-6 mx-auto p-16  flex-col justify-center shadow-[0_0_50px_#EDEDED]"
    >
      <h3 className=" font-semibold text-3xl text-center">Add New House</h3>

      <div className="flex gap-3">
        {/* Name */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            name="name"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
        </div>
        {/* City */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">City</span>
          </label>
          <input
            name="city"
            type="text"
            placeholder="City"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
        </div>
      </div>
      <div className="flex  gap-3 ">
        {/* Address */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">Address</span>
          </label>
          <input
            name="address"
            type="text"
            placeholder="Full Address"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
        </div>
        {/* Bedrooms */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">Bedrooms</span>
          </label>
          <input
            name="bedrooms"
            type="number"
            placeholder="Number of Bedrooms"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
        </div>
      </div>
      <div className="flex  gap-3 ">
        {/* Bathrooms */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">Bathrooms</span>
          </label>
          <input
            name="bathrooms"
            type="number"
            placeholder="Number of Bathrooms"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
        </div>
        {/* Room Size */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">Room Size</span>
          </label>
          <input
            name="roomSize"
            type="number"
            placeholder="Room Size"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
        </div>
      </div>
      <div className="flex  gap-3 ">
        {/* Picture */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">Room Picture</span>
          </label>
          <input
            name="roomPicture"
            type="text"
            placeholder="Room Picture"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
        </div>
        {/* Rent Per Month */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">Rent Per Month </span>
          </label>
          <input
            name="rentPerMonth"
            type="number"
            placeholder="Rent Per Month"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
        </div>
      </div>
      <div className="flex  gap-3 ">
        {/* Availability date */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">Availability date</span>
          </label>
          <input
            name="availabilityDate"
            type="date"
            placeholder="Availability date"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
        </div>
        {/* Phone Number */}
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text font-semibold text-main">Phone Number</span>
          </label>
          <input
            name="phone"
            type="text"
            placeholder="Phone Number"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none placeholder:font-medium focus:border-main"
            required
          />
          {phoneNumberError && (
            <p className="text-red-500 mt-2 text-sm" role="alert">
              {phoneNumberError}
            </p>
          )}
        </div>
      </div>
      <textarea
        className="border border-gray-500 focus:border-main focus:outline-none placeholder:font-medium rounded-sm p-2"
        name="description"
        cols="10"
        rows="4"
        placeholder="Room Description"
        required
      ></textarea>
      <button
        type="submit"
        className="cursor-pointer mx-auto font-semibold   border  px-12 border-gray-500 focus:border-main focus:outline-none placeholder:font-medium py-2"
      >
        Add Room
      </button>
    </form>
  );
};

export default AddRoomForm;