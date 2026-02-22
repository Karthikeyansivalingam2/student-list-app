import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
    const location = useLocation();

    return (
        <nav className="bg-white border-b border-gray-200 px-8 py-4 sticky top-0 z-50">
            <div className="max-w-6xl mx-auto flex justify-between items-center">
                <Link to="/" className="text-2xl font-black text-indigo-600 tracking-tight">
                    STUDENT<span className="text-gray-900">LIST</span>
                </Link>
                <div className="flex gap-1 bg-gray-100 p-1 rounded-xl">
                    <Link
                        to="/"
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${location.pathname === "/"
                                ? "bg-white text-indigo-600 shadow-sm"
                                : "text-gray-500 hover:text-gray-800"
                            }`}
                    >
                        All Students
                    </Link>
                    <Link
                        to="/favourites"
                        className={`px-6 py-2 rounded-lg font-medium transition-all ${location.pathname === "/favourites"
                                ? "bg-white text-red-500 shadow-sm"
                                : "text-gray-500 hover:text-gray-800"
                            }`}
                    >
                        Favourites
                    </Link>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
