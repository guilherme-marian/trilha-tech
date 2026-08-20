import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/login';
import Cadastro from './Pages/cadastro'
import Home from './Pages/home'


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
                <Route path='/home' element={<Home/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;