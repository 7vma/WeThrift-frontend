import { useParams, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react'

function Edit(props) {
    const [product, setProduct] = useState(null)
    const [editForm, setEditForm] = useState("")
    
		const navigate = useNavigate()

    const params = useParams()
    const { id } = params

    const URL = `https://letsthrift-backend.herokuapp.com/product/${id}`

    // console.log("id", id, URL)
    // console.log(`Current Person: ${JSON.stringify(person)}`)

    const handleChange = (e) => setEditForm({ ...editForm, [e.target.name]: e.target.value })


    const updateProduct = async (e) => {
        e.preventDefault()
        // console.log(editForm)
        try {
            const options = {
                method: "PUT",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(editForm)
            }
            const response = await fetch(URL, options)
            const updatedProduct = await response.json()

            setProduct(updatedProduct)
            setEditForm(updatedProduct)

        } catch (err) {
            console.log(err)
            navigate(URL)
        }
    }

    const getProduct = async () => {
        try {

            const response = await fetch(URL)
            const foundProduct = await response.json()

            setProduct(foundProduct)
            setEditForm(foundProduct)

        } catch (err) {
            console.log(err)
        }
    }

    const removeProduct = async () => {
        try {
            const options = {
                method: "DELETE"
            }
            const response = await fetch(URL, options)
            const deletedProduct = await response.json()
            // console.log(deletedPerson)
            navigate('/home')

            // navigate will change the browser's URL
            // which will cause react-router to "redirect" to home page;
            // the Main will then re-render the People component
            // upon mount People will fetch the updated index of people data

        } catch (err) {
            console.log(err)
            navigate('/home')
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const loaded = () => (
        <>
        <h1 className='home-text '>Edit Page</h1>
            <section className="grid grid-template-col justify-center">
                <div >
                    
                    <h2 className=' font-bold'>{product.price}</h2>
                    <h2 className=' font-bold'>{product.title}</h2>
                    <img className='product-img' src={product.image} alt={product.title + " image"} />
                
                    <button className=' delete'> <input type="submit" value="Update Product" /></button>  
                <div>
                        <button 
														className="delete" 
														onClick={removeProduct}>
															Remove Product
												</button>
                    </div>

                </div>
                <h2>Edit this Product</h2>
                <form className='loginForm text-black' onSubmit={updateProduct}>
                    <input 
                        type="text"
                        value={editForm.price}
                        name="price"
                        placeholder="price"
                        onChange={handleChange}
                        className=" loginForm bg-black"
                    />
                    <input
                        type="text"
                        value={editForm.image}
                        name="image"
                        placeholder="image URL"
                        onChange={handleChange}
                        className=" loginForm bg-black"
                    />
                    <input
                        type="text"
                        value={editForm.title}
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                        className=" loginForm bg-black"
                    />
                
                </form> 
            </section>
        </>


    )


    const loading = () => (
        <>
            <h1>
                Loading...
            </h1>
        </>
    );
    return (
        <div>{product ? loaded() : loading()}</div>
    )
}

export default Edit
// const Edit = ({ handleSubmit, handleChange, updateProduct, val }) => {


    
//     <form className="EditForm" onSubmit={handleSubmit}>
//         <label>
//             <span>title</span>
//             <input type="text" required name="type" placeholder="type" onChange={handleChange} value={updateProduct.type} />
//         </label>
//         <label>
//             <span>description</span>
//             <input type="text" required name="description" placeholder="description" onChange={handleChange} value={updateProduct.description} />
//         </label>
//         <label>
//             <span>price</span>
//             <input type="text" required name="price" placeholder="price" onChange={handleChange} value={updateProduct.price} />
//         </label>
//         <input type="submit" value={val} />
//     </form>
// }
// }
// }
// export default Edit