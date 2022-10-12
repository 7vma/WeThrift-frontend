// import RegisterForm from "../components/RegisterForm";
import  {useNavigate} from 'react-router-dom'
import {useState} from 'react'


const Register = ({signUp}) => {
const initialState = { username: "",email:"", password:""}
const [input, setInput] = useState(initialState)
const navigate = useNavigate()

const handleSubmit = async (e) => {
    e.preventDefault()
    const createdUserToken = await signUp(input)

    if (createdUserToken) {
        navigate("/")
    } else {
        navigate("/")
    }
		setInput(initialState);
};

const handleChange = (e) => {
    setInput({ ...input, [e.target.name]: e.target.value });
};

return (
    <>
        <h1>Register</h1>
        <form onSubmit={handleSubmit}>
            <label htmlFor="username">Username: </label>
            <input
                id="username"
                name="username"
                value={input.username}
                onChange={handleChange}
        />
        <br />
        <br />
        <label htmlFor="email">Email: </label>
            <input
                id="email"
                name="email"
                value={input.email}
                onChange={handleChange}
        />
        <br />
        <br />
            <label htmlFor="password">Password: </label>
            <input
                id="password"
                name="password"
                value={input.password}
                onChange={handleChange}
        />
        <br />
        <br />
            <input type="submit" value="signUp" />
        </form>
    </>

    );

};

export default Register