import {Routes, Route, Outlet} from "react-router-dom"
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateProduct from "../pages/CreateProduct";
import Update from "./Edit";
import Delete from "../pages/Delete";
import Show from "../pages/Show";
import Cart from "../pages/Cart";
function Main({signUp, login}) {
    return (
        <div className="Main">
    <Outlet />   
    <Routes>
    
    <Route path="/register" element={<Register signUp = {signUp} />} />
    <Route path="/login"  element={<Login login={login} />} />
    <Route path="/home" element={<Home />} />
    <Route path="/create_product" element={<CreateProduct />} />
    <Route path="/products/edit/:id" element={<Update />} />
    <Route path="/products/:id" element={<Show />} />
    <Route path="/cart" element={<Cart />} />

    </Routes>

        </div>
    )
}
export default Main;