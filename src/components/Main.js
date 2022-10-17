import {Routes, Route, Outlet} from "react-router-dom"
import Register from "../pages/Register";
import Login from "../pages/Login";
import Home from "../pages/Home";
import CreateProduct from "../pages/CreateProduct";
import Show from "../pages/Show";
import Cart from "../pages/Cart";
import Edit from "../pages/Edit";
function Main({signUp, login, user}) {
    return (
        <div className="Main">
    <Outlet />   
    <Routes>
    
    <Route path="/register" element={<Register signUp = {signUp} />} />
    <Route path="/login"  element={<Login login={login} />} />
    <Route path="/home" element={<Home />} />
    <Route path="/create_product" element={<CreateProduct user={user} />} />
    <Route path="/products/edit/:id" element={<Edit />} />
    <Route path="/products/:id" element={<Show />} />
    <Route path="/cart" element={<Cart />} />

    </Routes>

        </div>
    )
}
export default Main;