// import {Link} from "react-router-dom"

function Header() {
    return(
        <div className="Header">
                <a href="/home"><h1 className="logo">
                    <span className="logo-w">W</span>
                    <span className="logo-e">e</span>
                    Thrift</h1></a>

                <a className="create" href="/create_product"><h2>Post Product</h2></a>
                <a className="login" href="/login"><h2>Login</h2></a>
                <a className="register" href="/register"><h2>Register</h2></a>
        </div>
    )
}
export default Header;