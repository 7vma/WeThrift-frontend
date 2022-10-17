// import RegisterForm from "../components/RegisterForm";
import  {useNavigate} from 'react-router-dom'
import {useState, useEffect} from 'react'
import '../dist/output.css'

const Register = ({signUp}) => {
const initialState = { username: "",email:"", password:""}
const [input, setInput] = useState(initialState)
const navigate = useNavigate()


const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUserToken = await signUp(input)

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
    <div className='loginForm rounded grid grid-cols-3 gap-24  '>
        
        <h1 className="logo  hover:border-gray-300  hover:text-slate-500">
                    Thrifts</h1>
        <form className='mt-12 border border-black border-3 rounded' onSubmit={handleSubmit}>

        <h1 className=' rounded login_register  bg-black border border-transparent flex flex-row justify-center items-center space-x-2 py-2 w-full'>Register</h1>
        <div className="">
            <label htmlFor="username" className='block text-sm login_register font-medium '>Username: </label>
            <input
                id="username"
                name="username"
                value={input.username}
                onChange={handleChange}
                className=" min-h-full w-full items-center justify-center py- px-2 sm:px-6 lg:px-8"
        />
        {/* <div className="-space-y-px rounded-md shadow-sm"></div> */}
        <br />
        <br />
        <label htmlFor="email" className='block text-sm font-medium login_register' >Email: </label>
            <input
                id="email"
                name="email"
                value={input.email}
                onChange={handleChange}
                className="min-h-full w-full items-center justify-center py-1 px-4 sm:px-6 lg:px-8"
        />
        <br />
        <br />
            <label htmlFor="password" className='block text-sm font-medium login_register ' >Password: </label>
            <input
                id="password"
                name="password"
                value={input.password}
                onChange={handleChange}
                className="min-h-full w-full items-center justify-center py-1 px-4 sm:px-6 lg:px-8"
        />
        <br />
        <br />
        <div className='center-btn'></div>
        <button className=' border  border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-2 rounded w-full submit-btn'><input type="submit" value="signup"/> </button>
        </div>
        </form>
        </div>
        

    );

};

export default Register