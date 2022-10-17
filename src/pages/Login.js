

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
import '../dist/output.css';

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
    <div className='loginForm grid grid-cols-3 gap-24 '>
        <h1 className="logo hover:border-gray-300  hover:text-slate-500">
                    Thrifts</h1>
        <form className='loginForm mt-8 space-y-4 rounded border border-3 border-black' onSubmit={handleSubmit}>
        <h1 className=' login_register rounded bg-black border border-transparent flex flex-row justify-center items-center space-x-2 py-2 w-full'>Login Into Your Account</h1>
            <label className='text-sm font-medium' htmlFor="username">Username: </label>
            <input
                id="username"
                name="username"
                value={input.username}
                onChange={handleChange}
                className="relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"
        />
        <br />
        <br />
            <label className='text-sm font-medium' htmlFor="password">Password: </label>
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
        <div className='center-btn '></div>
        <button className='border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-2 rounded w-full submit-btn'><input type="submit" value="Login"/> </button>
        </form>
        
        </div>

    );

};

export default Login