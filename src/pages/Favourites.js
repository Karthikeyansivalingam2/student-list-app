import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const Favourites = () => {
    const { favorites, removeFavorite } = useContext(StudentContext);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-red-500 inline-block px-1">
                Your Favourites
            </h1>
            {favorites.length === 0 ? (
                <div className="bg-red-50 text-red-600 p-10 rounded-2xl text-center border-2 border-dashed border-red-200">
                    <p className="text-lg">No students added to favorites yet.</p>
                </div>
            ) : (
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {favorites.map((student) => (
                        <div key={student.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 transition-all">
                            <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                            <p className="text-gray-500 mb-4">Roll No: {student.rollNo}</p>
                            <button
                                onClick={() => removeFavorite(student.id)}
                                className="w-full py-2 bg-red-500 text-white rounded-lg font-medium hover:bg-red-600 active:scale-95 transition-all shadow-sm"
                            >
                                Remove from List
                            </button>
                        </div>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Favourites;
