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
            navigate(URL)
        }
    }

    useEffect(() => {
        getProduct()
    }, [])

    const loaded = () => (
        <>
            <section>
                <div className="product">
                    <h1>Show Page</h1>
                    <h2>{product.price}</h2>
                    <h2>{product.title}</h2>
                    <img src={product.image} alt={product.title + " image"} />
                    <div>
                        <button 
														className="delete" 
														onClick={removeProduct}>
															Remove Product
												</button>
                    </div>
                </div>
            </section>
            <section>
                <h2>Edit this Product</h2>
                <form className='' onSubmit={updateProduct}>
                    <input 
                        type="text"
                        value={editForm.price}
                        name="price"
                        placeholder="price"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.image}
                        name="image"
                        placeholder="image URL"
                        onChange={handleChange}
                    />
                    <input
                        type="text"
                        value={editForm.title}
                        name="title"
                        placeholder="title"
                        onChange={handleChange}
                    />
                <button className='submit-btn'> <input type="submit" value="Update Product" /></button>  
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