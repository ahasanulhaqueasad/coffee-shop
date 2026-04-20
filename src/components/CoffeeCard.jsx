import { AiFillDelete, AiFillEdit, AiFillEye } from "react-icons/ai";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";

const CoffeeCard = ({ coffee, coffees, setCoffees }) => {
  const { _id, name, chef, price, photo } = coffee;

  const handleDelete = (id) => {
    console.log(id);
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
        fetch(`https://coffee-shop-r1gy.vercel.app/coffee/${_id}`, {
          method: "DELETE",
        })
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            if (data.deletedCount > 0) {
              Swal.fire({
                title: "Deleted!",
                text: "Your Coffee has been deleted.",
                icon: "success",
              });
              const remaining = coffees.filter((cof) => cof._id !== _id);
              setCoffees(remaining);
            }
          });
      }
    });
  };

  return (
    <div className="flex items-center bg-[#F5F4F1] p-8 rounded-lg gap-4 shadow-sm">
      {/* Left: Image Section */}
      <div className="flex-shrink-0">
        <img src={photo} alt={name} className="w-40 h-48 object-contain" />
      </div>

      {/* Middle: Text Details Section */}
      <div className="flex-grow space-y-2">
        <p className="text-gray-700">
          <span className="font-bold">Name:</span> {name}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Chef:</span> {chef}
        </p>
        <p className="text-gray-700">
          <span className="font-bold">Price:</span> 300 Taka
        </p>
      </div>

      {/* Right: Action Buttons Section */}
      <div className="flex flex-col space-y-3">
        {/* View Button */}
        <button className="p-3 bg-[#D2B48C] text-white rounded-md hover:bg-[#b89a74] transition-all">
          <AiFillEye size={20} />
        </button>

        {/* Edit Button */}
        <Link to={`updateCoffee/${_id}`}>
          <button className="p-3 bg-[#3C393B] text-white rounded-md hover:bg-black transition-all">
            <AiFillEdit size={20} />
          </button>
        </Link>

        {/* Delete Button */}
        <button
          onClick={() => handleDelete(_id)}
          className="p-3 bg-[#EA4744] text-white rounded-md hover:bg-red-700 transition-all"
        >
          <AiFillDelete size={20} />
        </button>
      </div>
    </div>
  );
};

export default CoffeeCard;
