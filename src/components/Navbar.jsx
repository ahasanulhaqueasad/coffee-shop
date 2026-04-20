import logo from "../assets/images/more/logo1.png";
import bgImage from "../assets/images/more/15.jpg";

const Navbar = () => {
  return (
    <div
      className="flex justify-center items-center gap-4 py-4 shadow-md"
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <img src={logo} alt="Coffee logo" className="w-16" />
      <h2 className="text-4xl font-bold text-white">Espresso Emporium</h2>
    </div>
  );
};

export default Navbar;
