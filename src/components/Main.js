import {Routes, Route} from "react-router-dom"
import Register from "../pages/Register";
import Login from "../pages/Login";


function Main(props) {
    return (
        <div className="Main">
        
    <Routes>
    
    <Route path="/register" props element={<Register />} />
    <Route path="/login" props element={<Login />} />
    
    </Routes>

        </div>
    )
}
export default Main;