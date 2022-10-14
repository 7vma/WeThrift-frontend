import { useEffect, useState } from 'react'
import { useParams, useNavigate } from 'react-router-dom'

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
        navigate(URL)

          // navigate will change the browser's URL
          // which will cause react-router to "redirect" to home page;
          // the Main will then re-render the People component
          // upon mount People will fetch the updated index of people data

    } catch (err) {
        console.log(err)
        navigate(URL)
    }
}



    useEffect(() => {getProduct()}, [])

	const loaded = () => {
        
		return (
			<div className="product">
				<h1 className='home-text'>Product Details</h1>
				<h2>{product.brand}</h2>
				<h2>{product.price}</h2>
				<img src={product.image} alt={product.description} />
                <div className='submit-btn'>
                    <button className="delete" onClick={removeProduct}>
						Remove Product
					</button>
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
