

// function Login() {
//     return (
//         <div className="Login">

//             <button>Login Here</button>
//         </div>
//     )
// }
// export default Login;

// import RegisterForm from "../components/RegisterForm";
import  {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import '../dist/output.css'

const Login = ({login}) => {
const initialState = { username: "",email:"", password:""}
const [input, setInput] = useState(initialState)
const navigate = useNavigate()


const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUserToken = await login(input)

    if (createdUserToken) {
        navigate("/home")
    } else {
        navigate("/login")
    }
		setInput(initialState);
};

const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
};

return (
    <div className='loginForm'>
        
        <h1 className='login_register'>Login</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
                id="username"
                name="username"
                value={input.username}
                onChange={handleChange}
                className="text-sm text-gray-base w-full 
                mr-3 py-5 px-4 h-2 border 
                border-gray-200 rounded mb-2"
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
            <input
                id="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="text-sm text-gray-base w-full 
                mr-3 py-5 px-4 h-2 border 
                border-gray-200 rounded mb-2"
        />
        <br />
        <br />
            <label htmlFor="password">Password: </label>
            <input
                id="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                className="text-sm text-gray-base w-full 
                mr-3 py-5 px-4 h-2 border 
                border-gray-200 rounded mb-2"
        />
        <br />
        <br />
        <button><input className='bg-sky-500/50' type="submit" value="signup"/> </button>
        </form>
        </div>

    );

};

export default Login