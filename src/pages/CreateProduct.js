import { getUserToken } from '../utils/authToken'
import {useState} from 'react'
function CreateProduct(props) {
    const [input, setInput] = useState({ type: "", brand: "", image: "", description: "",title: "", condition: "", price: "" })
    // state - {} - references key/value pairs in our model MVP (title body)
    // handlers:
    // handleSubmit - form
    // handleChange - inputs
    const handleChange = (e) => {
        setInput({...input, [e.target.name]: e.target.value})
    }
    const handleSubmit = async (e) => {
        // how can we stop the page from refreshing, dom event, submit
        e.preventDefault()
        try {
            const data = {...input}
            setInput({type: "", brand: "",  image: "", description: "", title: "", condition: "", price: "" })
            const config = {
                method: 'POST',
                headers: {
                    "Content-Type": 'application/json',
                    'Authorization': `bearer ${getUserToken()}`,
                },
                body: JSON.stringify(data)
            }
            const response = await fetch('https://letsthrift-backend.herokuapp.com/product', config)
            // check status before converting to JSON

            const newProduct = await response.json()
            console.log(newProduct)
            // console.log("all good: ", newNote.status < 400)
        }catch(err){
            console.log(err)
        }
        
        // 
    }
    if(getUserToken()){
        // conditional render to prevent a form from submitting a request with a missing token
        return (

            <section>
                {/* <h1>Create Product</h1> */}
                {/* <hr /> */}
                <form className='product-form ' onSubmit={handleSubmit}>
                <br/>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="type">
                        Type:
                        <input type="text" name="type" id="type" value={input.type} onChange={handleChange} />
                    </label>
                    {/* name attributes will set the request body's key value pairs  */}
                    {/* req.body { title: "abcd", body: 'abcd' } */}
                    <br/>
                    <br/>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="brand">
                        Brand:
                        <input type="text" name="brand" id="brand" value={input.brand} onChange={handleChange}/>
                    </label>
                    <br/>
                    <br/>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="image">
                        Image:
                        <input type="text" name="image" id="image" value={input.image} onChange={handleChange}/>
                    </label>
                    <br/>
                    <br/>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="description">
                        Description:
                        <input type="text" name="description" id="description" value={input.description} onChange={handleChange}/>
                    </label>
                    <br/>
                    <br/>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="title">
                        title:
                        <input type="text" name="title" id="title" value={input.title} onChange={handleChange}/>
                    </label>
                    <br/>
                    <br/>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="condition">
                        Conditon:
                        <input type="text" name="condition" id="condition" value={input.condition} onChange={handleChange}/>
                    </label>
                    <br/>
                    <br/>
                    <label className='block text-gray-700 text-sm font-bold mb-2' htmlFor="price">
                        Price:
                        <input type="text" name="price" id="price" value={input.price} onChange={handleChange}/>
                    </label>
                    <br/>
                    <br/>
                    <button className='submit-btn' type="submit">Create A Product</button>
                </form>
                {/* inputs for all fields required to create a new document */}
            </section>)
    } else {
        return <p>Please login to create a note</p>
    }
    
}
export default CreateProduct