import { useContext } from "react";
import { StudentContext } from "../context/StudentContext";

const StudentList = () => {
    const { students, favorites, addFavorite } = useContext(StudentContext);

    return (
        <div className="p-6">
            <h1 className="text-3xl font-bold mb-8 text-gray-800 border-b-2 border-indigo-500 inline-block px-1">
                Student Directory
            </h1>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {students.map((student) => {
                    const isFav = favorites.some((f) => f.id === student.id);
                    return (
                        <div key={student.id} className="bg-white p-6 rounded-xl shadow-md border border-gray-100 hover:shadow-lg transition-shadow">
                            <h3 className="text-xl font-semibold text-gray-800">{student.name}</h3>
                            <p className="text-gray-500 mb-4">Roll No: {student.rollNo}</p>
                            <button
                                onClick={() => addFavorite(student)}
                                disabled={isFav}
                                className={`w-full py-2 rounded-lg font-medium transition-all ${isFav
                                        ? 'bg-gray-100 text-gray-400 cursor-not-allowed'
                                        : 'bg-indigo-600 text-white hover:bg-indigo-700 active:scale-95 shadow-sm'
                                    }`}
                            >
                                {isFav ? 'Added to Favourites' : 'Add to Favourite'}
                            </button>
                        </div>
                    );
                })}
            </div>
        </div>
    );
};

export default StudentList;
