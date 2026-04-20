import { HiArrowNarrowLeft } from "react-icons/hi";
import { Link, useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";

const UpdateCoffee = () => {
  const coffee = useLoaderData();
  // ডেটা ডিস্ট্রাকচার করা যাতে ইনপুট ফিল্ডে defaultValue হিসেবে বসানো যায়
  const { _id, name, chef, supplier, taste, category, details, photo } = coffee;

  const handleUpdateCoffee = (event) => {
    event.preventDefault();
    const form = event.target;

    const name = form.name.value;
    const chef = form.chef.value;
    const supplier = form.supplier.value;
    const taste = form.taste.value;
    const category = form.category.value;
    const details = form.details.value;
    const photo = form.photo.value;

    const updatedCoffee = {
      name,
      chef,
      supplier,
      taste,
      category,
      details,
      photo,
    };

    // URL-এ অবশ্যই আইডি (${_id}) দিতে হবে
    fetch(`https://coffee-shop-r1gy.vercel.app/coffee/${_id}`, {
      method: "PUT",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(updatedCoffee),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.modifiedCount > 0) {
          Swal.fire({
            title: "Success!",
            text: "Coffee Updated Successfully",
            icon: "success",
            confirmButtonText: "Cool",
          });
        } else {
          Swal.fire({
            title: "Info",
            text: "No changes were made",
            icon: "info",
          });
        }
      }) // এই ব্র্যাকেটটি এবং .then এর শেষটা খেয়াল করুন
      .catch((error) => {
        console.error("Error:", error);
        Swal.fire({
          title: "Error!",
          text: "Something went wrong",
          icon: "error",
        });
      });
  };

  return (
    <div className="bg-white p-4 md:p-24 min-h-screen">
      <div className="max-w-7xl mx-auto mb-8">
        <Link
          to="/"
          className="flex items-center gap-2 text-[#374151] hover:text-[#D2B48C] font-serif text-2xl"
        >
          <HiArrowNarrowLeft />
          <span>Back to home</span>
        </Link>
      </div>

      <div className="bg-[#F4F3F0] rounded-md px-10 py-16 max-w-7xl mx-auto">
        <div className="text-center mb-10">
          <h2 className="text-4xl font-bold text-[#374151] mb-6 font-serif">
            Update Existing Coffee Details
          </h2>
          <p className="text-gray-500">
            Updating: <span className="font-bold">{name}</span>
          </p>
        </div>

        <form onSubmit={handleUpdateCoffee} className="space-y-6">
          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Name</span>
              </label>
              <input
                type="text"
                name="name"
                defaultValue={name}
                className="input w-full p-3 bg-white"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Chef</span>
              </label>
              <input
                type="text"
                name="chef"
                defaultValue={chef}
                className="input w-full p-3 bg-white"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Supplier</span>
              </label>
              <input
                type="text"
                name="supplier"
                defaultValue={supplier}
                className="input w-full p-3 bg-white"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Taste</span>
              </label>
              <input
                type="text"
                name="taste"
                defaultValue={taste}
                className="input w-full p-3 bg-white"
              />
            </div>
          </div>

          <div className="flex flex-col md:flex-row gap-6">
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Category</span>
              </label>
              <input
                type="text"
                name="category"
                defaultValue={category}
                className="input w-full p-3 bg-white"
              />
            </div>
            <div className="form-control flex-1">
              <label className="label">
                <span className="label-text font-bold">Details</span>
              </label>
              <input
                type="text"
                name="details"
                defaultValue={details}
                className="input w-full p-3 bg-white"
              />
            </div>
          </div>

          <div className="form-control w-full">
            <label className="label">
              <span className="label-text font-bold">Photo URL</span>
            </label>
            <input
              type="text"
              name="photo"
              defaultValue={photo}
              className="input w-full p-3 bg-white"
            />
          </div>

          <input
            type="submit"
            value="Update Coffee Details"
            className="btn btn-block bg-[#D2B48C] border-[#331A15] cursor-pointer mt-4"
          />
        </form>
      </div>
    </div>
  );
};

export default UpdateCoffee;
