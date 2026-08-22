import loader from "../../data/assets/notfound.gif";
import { useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";

const NotFound = () => {
  const navigate = useNavigate();

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#FAFAFA] px-6">
      <div></div>

      <div className="flex max-w-lg flex-col items-center text-center">
        <nav>
          
          <div className="flex flex-row gap-5">
            <Link to="/home">Home</Link>
            <Link to="/counter">Counter</Link>
            <Link to="/app">App</Link>
          </div>
        </nav>

        {/* 404 */}
        <div>
          <img src={loader} alt="loading" />
        </div>

        {/* Title */}
        <h2 className="mt-6 text-4xl font-bold text-gray-900">
          Oh no. We lost this page{" "}
        </h2>

        {/* Description */}
        <p className="mt-3 max-w-md text-sm leading-6 text-gray-500">
          Sorry, the page you're looking for doesn't exist or may have been
          moved to another location.
        </p>

        {/* Button */}
        <button
          onClick={() => navigate("/home")}
          className="
            mt-7
            rounded-lg
            bg-blue-500
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-blue-600
            hover:shadow-lg
          "
        >
          Back to Login
        </button>

        <a
          className="mt-7
            rounded-lg
            bg-blue-500
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-blue-600
            hover:shadow-lg"
          href="/home"
        >
          Home
        </a>

        <Link
          className="mt-7
            rounded-lg
            bg-blue-500
            px-6
            py-3
            text-sm
            font-semibold
            text-white
            transition-all
            duration-300
            hover:-translate-y-0.5
            hover:bg-blue-600
            hover:shadow-lg"
          to="/app"
        >
          Home
        </Link>
      </div>
    </div>
  );
};

export default NotFound;
