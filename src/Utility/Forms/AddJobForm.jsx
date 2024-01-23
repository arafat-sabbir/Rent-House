const AddJobForm = ({handleCategory,handleAddJob}) => {
    return (
        <form
        onSubmit={handleAddJob}
        className="flex lg:w-1/2 w-[90vw] mt-16 space-y-6 mx-auto p-16  flex-col justify-center shadow-[0_0_50px_#EDEDED]"
      >
        <h3 className=" font-semibold text-3xl text-center">Add Job</h3>

        <div className="flex gap-3">
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-main">Name</span>
          </label>
          <input
            type="text"
            placeholder="Name"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
            required
          />
        </div>
        <div className="form-control w-full">
          <label className="label">
            <span className="label-text text-main">Address</span>
          </label>
          <input
            name="address"
            type="text"
            placeholder="Full Address"
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main"
            required
          />
        </div>
        </div>
        <div className="flex  gap-3 ">
          <input
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main w-[50%]"
            type="text"
            name="title"
            placeholder="Job Title"
            required
          />
          <select
            required
            onChange={handleCategory}
            className="select border-gray-500 focus:border-main w-full rounded-sm  select-bordered lg:w-[50%] mb-4 lg:mb-auto"
          >
            <option disabled selected>
              Choose A Category?
            </option>
            <option>Web Development</option>
            <option>Digital Marketing</option>
            <option>Graphics Design</option>
          </select>
        </div>
        <div className="flex  gap-3 ">
          <input
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main w-[50%]"
            type="text"
            name="minPrice"
            id=""
            placeholder="Min Price"
            required
          />
          <input
            className="input rounded-sm bg-transparent text-black border border-gray-500 focus:ring-0 focus:outline-none focus:border-main w-[50%]"
            type="text"
            name="maxPrice"
            id=""
            placeholder="Max Price"
            required
          />
        </div>
        <textarea
          className="border border-gray-500 focus:border-main focus:outline-none rounded-sm p-2"
          name="description"
          cols="10"
          rows="4"
          placeholder="Job Description"
          required
        ></textarea>
        <button
          type="submit"
          className="cursor-pointer mx-auto font-semibold   border  px-12 border-gray-500 focus:border-main focus:outline-none py-2"
        >
          Add Job
        </button>
      </form>
    );
};

export default AddJobForm;