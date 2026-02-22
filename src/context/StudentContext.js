import { createContext, useState } from "react";

export const StudentContext = createContext();

export const StudentProvider = ({ children }) => {
    const [students] = useState([
        { id: 1, name: "Bharath", rollNo: "ST001" },
        { id: 2, name: "Praveen", rollNo: "ST002" },
        { id: 3, name: "Kumar", rollNo: "ST003" },
        { id: 4, name: "Suresh", rollNo: "ST004" },
        { id: 5, name: "Ramesh", rollNo: "ST005" },
        { id: 6, name: "Narendra", rollNo: "ST006" },
    ]);

    const [favorites, setFavorites] = useState([]);

    const addFavorite = (student) => {
        if (!favorites.find((s) => s.id === student.id)) {
            setFavorites([...favorites, student]);
        }
    };

    const removeFavorite = (studentId) => {
        setFavorites(favorites.filter((s) => s.id !== studentId));
    };

    return (
        <StudentContext.Provider value={{ students, favorites, addFavorite, removeFavorite }}>
            {children}
        </StudentContext.Provider>
    );
};
