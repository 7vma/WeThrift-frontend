// import {Link} from "react-router-dom"
import { BsBag } from 'react-icons/bs';

function Header() {
    return(
        <div className="Header">
                <a href="/home"><h1 className="logo hover:border-gray-300  hover:text-slate-500">
                    Thrifts</h1></a>
                <div className='nav-bar flex gap-8 '>
                    <a className="cart-btn flex  hover:border-gray-300   hover:text-slate-500" href="/cart"><BsBag /></a>
                    <a className="create hover:border-gray-300   hover:text-slate-500" href="/create_product"><h2>Post Product</h2></a>
                    <a className="login hover:border-gray-300   hover:text-slate-500" href="/login"><h2>Login</h2></a>
                    <a className="register hover:border-gray-300   hover:text-slate-500" href="/register"><h2>Register</h2></a>
                </div>
        </div>
    )
}
export default Header;