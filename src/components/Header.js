// import {Link} from "react-router-dom"

function Header() {
    return(
        <div className="Header">
                <h1 className="logo">WeThrift</h1>
                <a className="login" href="/login"><h2>Login</h2></a>
                <a className="register" href="/register"><h2>Register</h2></a>
        </div>
    )
}
export default Header;