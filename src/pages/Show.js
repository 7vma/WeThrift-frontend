import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import Edit from './Edit'
import { Link } from "react-router-dom";
import{Redirect} from 'react-router'
function Show() {
    const [ product, setProduct ] = useState(null)
		const { id } = useParams()

    const productURL = `https://letsthrift-backend.herokuapp.com/product/${id}`
// console.log(productURL)
    const getProduct = async () => {
        try {
            const response = await fetch(productURL)
            const result = await response.json()
            setProduct(result)
        } catch (err) {
            console.log(err)
        }
    }

    const navigate = useNavigate()

	const removeProduct = async (props) => {
		try {
            const options = {
                method:"DELETE"
        }

        const response = await fetch(productURL, options)
console.log(response)
					// you can inspect the response for debugging or extended 
					//functionality. 
        // const deletedProduct = await response.json()

          // console.log(deletedPerson)
        navigate('/home')

    } catch (err) {
        console.log(err)
        navigate("/home")
    }
}

useEffect(() => {
    fetch(productURL)
    .then((res) => res.json())
    .then((json) => {
        console.log(json)
        setProduct(json)
    })
    .catch(console.error)
}, [])


    useEffect(() => {getProduct()}, [])

	const loaded = () => {
        
		return (
            <div className='Show'>
                <h1 className='home-text'>Product Details</h1>
			<div className="product-card grid grid-template-col justify-center">
				
                <h2 className=' font-bold'>{product.title}</h2>
                <h2 className=' font-bold'>{product.brand}</h2>
				<h2 className=' font-bold'>{product.price}</h2>
				
				<img className='product-img' src={product.image} alt={product.description} />
                <div className=''>
                    {/* <Edit /> */}
                    <Link to= {`/products/edit/${product._id}` }>
                    <button className=' delete'><a className=' text-center' href='/products/edit/{:id}'> Edit</a></button>
                    </Link>
                    <button className="delete" onClick={removeProduct}>
						Remove Product
					</button>
            </div>
		</div>
        </div>
	)
}	

const loading = () => {
	return <h1>Loading.........</h1>
	}

	return product ? loaded() : loading()
        }




export default Show
