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
            
            <section className=''>
                <div className='login_register grid grid-cols-3 gap-8 loginForm'>
                {/* <h1>Create Product</h1> */}
                {/* <hr /> */}
                <h1 className="logo hover:border-gray-300  hover:text-slate-500">
                    Thrifts</h1>
                
                <form className='product-form mt-8 space-y-4 login_register border border-black' onSubmit={handleSubmit}>
                <h1 className=' login_register rounded-sm bg-black border-transparent flex flex-row justify-center items-center space-x-2 py-1 w-full'> Upload Product Form</h1>
            
                    <label className='  text-sm ' htmlFor="type">
                        Type:
                        <input className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' type="text" name="type" id="type" value={input.type} onChange={handleChange} />
                    </label>
                    {/* name attributes will set the request body's key value pairs  */}
                    {/* req.body { title: "abcd", body: 'abcd' } */}
                    
                    
                    <label className='  text-sm  mb-2' htmlFor="brand">
                        Brand:
                        <input className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' type="text" name="brand" id="brand" value={input.brand} onChange={handleChange}/>
                    </label>
                    
                    
                    <label className='  text-sm  mb-2' htmlFor="image">
                        Image:
                        <input className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' type="text" name="image" id="image" value={input.image} onChange={handleChange}/>
                    </label>
                    
                    
                    <label className='  text-sm  mb-2' htmlFor="description">
                        Description:
                        <input className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' type="text" name="description" id="description" value={input.description} onChange={handleChange}/>
                    </label>
                    
                    
                    <label className='  text-sm  mb-2' htmlFor="title">
                        title:
                        <input className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' type="text" name="title" id="title" value={input.title} onChange={handleChange}/>
                    </label>
                    
                    
                    <label className='block  text-sm  mb-2' htmlFor="condition">
                        Conditon:
                        <input className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' type="text" name="condition" id="condition" value={input.condition} onChange={handleChange}/>
                    </label>
                    
                    
                    <label className='block  text-sm  mb-2' htmlFor="price">
                        Price:
                        <input className='relative block w-full appearance-none rounded-none rounded-t-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm' type="text" name="price" id="price" value={input.price} onChange={handleChange}/>
                    </label>
                    
                    
                    <button className='border border-transparent hover:border-gray-300 bg-gray-900 hover:bg-white text-white hover:text-gray-900 flex flex-row justify-center items-center space-x-2 py-2 rounded w-full submit-btn' type="submit">Upload A Product</button>
                </form>
                {/* inputs for all fields required to create a new document */}
                </div>
            </section>
            )
    } else {
        return <p>Please login to create a note</p>
    }
    
}
export default CreateProduct