import { Link } from "react-router-dom";
import { HiArrowNarrowLeft } from "react-icons/hi";
import Swal from "sweetalert2";

const AddCoffee = () => {
  const handleAddCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const newCoffee = { name, chef, supplier, taste, category, details, photo };
    console.log(newCoffee);

    // এখানে আপনার backend API কল করবেন
    fetch("http://localhost:5000/coffee", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(newCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Added Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        }
      });
  };

  return (
    <div className="bg-white p-4 md:p-24 min-h-screen">
      {/* Back to home button */}
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#374151] hover:text-[#D2B48C] transition-colors font-serif text-2xl"
        >
          <HiArrowNarrowLeft />
          <span className="drop-shadow-sm">Back to home</span>
        </Link>
      </div>

      {/* Main Form Container */}
      <div className="bg-[#F4F3F0] rounded-md px-10 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#374151] mb-6 font-serif drop-shadow-md">
            Add New Coffee
          </h2>
          <p className="text-gray-500 max-w-3xl mx-auto leading-7">
            It is a long established fact that a reader will be distracted by
            the readable content of a page when looking at its layout. The point
            of using Lorem Ipsum is that it has a more-or-less normal
            distribution of letters, as opposed to using Content here.
          </p>
        </div>

        <form onSubmit={handleAddCoffee} className="space-y-6">
          {/* Form Row: Name & Chef */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label mb-2">
                <span className="label-text font-bold text-lg">Name</span>
              </label>
              <input
                type="text"
                name="name"
                placeholder="Enter coffee name"
                className="input w-full p-3 rounded-md bg-white border-none focus:outline-[#D2B48C]"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label mb-2">
                <span className="label-text font-bold text-lg">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                placeholder="Enter coffee chef"
                className="input w-full p-3 rounded-md bg-white border-none focus:outline-[#D2B48C]"
                required
              />
            </div>
          </div>

          {/* Form Row: Supplier & Taste */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label mb-2">
                <span className="label-text font-bold text-lg">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                placeholder="Enter coffee supplier"
                className="input w-full p-3 rounded-md bg-white border-none focus:outline-[#D2B48C]"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label mb-2">
                <span className="label-text font-bold text-lg">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                placeholder="Enter coffee taste"
                className="input w-full p-3 rounded-md bg-white border-none focus:outline-[#D2B48C]"
                required
              />
            </div>
          </div>

          {/* Form Row: Category & Details */}
          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label mb-2">
                <span className="label-text font-bold text-lg">Category</span>
              </label>
              <input
                type="text"
                name="category"
                placeholder="Enter coffee category"
                className="input w-full p-3 rounded-md bg-white border-none focus:outline-[#D2B48C]"
                required
              />
            </div>
            <div className="form-control flex-1">
              <label className="label mb-2">
                <span className="label-text font-bold text-lg">Details</span>
              </label>
              <input
                type="text"
                name="details"
                placeholder="Enter coffee details"
                className="input w-full p-3 rounded-md bg-white border-none focus:outline-[#D2B48C]"
                required
              />
            </div>
          </div>

          {/* Form Row: Photo URL */}
          <div className="form-control w-full">
            <label className="label mb-2">
              <span className="label-text font-bold text-lg">Photo</span>
            </label>
            <input
              type="text"
              name="photo"
              placeholder="Enter photo URL"
              className="input w-full p-3 rounded-md bg-white border-none focus:outline-[#D2B48C]"
              required
            />
          </div>

          {/* Submit Button */}
          <input
            type="submit"
            value="Add Coffee"
            className="btn btn-block bg-[#D2B48C] hover:bg-[#b89a74] border-2 border-[#331A15] text-[#331A15] font-serif text-xl py-3 rounded-md cursor-pointer transition-all mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default AddCoffee;
