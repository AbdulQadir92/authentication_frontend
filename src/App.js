import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import PrivateRoute from './utils/PrivateRoute';
import Header from './components/Header';
import HomePage from './pages/HomePage';
import LoginPage from './pages/LoginPage';
import { AuthProvider } from './context/AuthContext';

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
                    </Routes>
                </AuthProvider>
            </Router>
        </div>
    );
}

export default App;
