import {BrowserRouter as Router, Routes, Route} from 'react-router-dom';
import Login from './Pages/login';
import Cadastro from './Pages/cadastro'


function AppRoutes() {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<Login/>}/>
                <Route path="/cadastro" element={<Cadastro/>}/>
            </Routes>
        </Router>
    );
}

export default AppRoutes;