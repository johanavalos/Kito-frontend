import { Route, Routes } from "react-router-dom"
import { BrowserRouter as Router } from "react-router-dom"

import Home from './pages/Home'
import Login from './pages/Login';
import Signup from './pages/Signup';

import { AuthContextProvider } from "./contexts/AuthContext";

function App() {
    return (
        <Router>
            <Routes>
                <AuthContextProvider>
                    <Route path='/' exact Component={Home} />
                    <Route path='/login' exact Component={Login} />
                    <Route path='/signup' exact Component={Signup} />
                </AuthContextProvider>
            </Routes>
        </Router>
    );
}

export default App;
