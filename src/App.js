import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { StudentProvider } from './context/StudentContext';
import Navbar from './components/Navbar';
import StudentList from './pages/StudentList';
import Favourites from './pages/Favourites';
import './index.css';

function App() {
  return (
    <StudentProvider>
      <Router>
        <div className="min-h-screen bg-gray-50 font-sans">
          <Navbar />
          <div className="max-w-6xl mx-auto py-8 px-4">
            <Routes>
              <Route path="/" element={<StudentList />} />
              <Route path="/favourites" element={<Favourites />} />
            </Routes>
          </div>
        </div>
      </Router>
    </StudentProvider>
  );
}

export default App;