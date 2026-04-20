import { Link } from "react-router-dom";
// আপনার ইমেজের সঠিক পাথটি এখানে দিন
import errorImg from "../assets/images/404/404.gif"; 

const ErrorPage = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-white">
      {/* ইমেজ সেকশন */}
      <div className="w-full max-w-3xl">
        <img 
          src={errorImg} 
          alt="404 Page Not Found" 
          className="w-full h-auto object-contain"
        />
      </div>

      {/* ব্যাক টু হোম বাটন */}
      <div className="mt-8">
        <Link to="/">
          <button className="flex items-center gap-2 text-[#374151] hover:text-[#D2B48C] font-serif text-2xl border-b-2 border-transparent hover:border-[#D2B48C] transition-all">
            <span>Back to home</span>
          </button>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;