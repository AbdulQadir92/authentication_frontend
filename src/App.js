import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';
import RegisterPage from './pages/RegisterPage';

function App() {
    return (
        <div>
            <Router>
                <AuthProvider>
                    <Header />
                    <Routes>
                        <Route exact path="/" element={
                            <PrivateRoute>
                                <HomePage />
                            </PrivateRoute>
                        } />
                        <Route path="/login" element={<LoginPage />} />
                        <Route path="/register" element={<RegisterPage />} />
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
