import {useState, useEffect} from 'react'
import { Link } from "react-router-dom";


function Home(props){
    const [productList, setProductList] = useState([])
    const productURL = "https://letsthrift-backend.herokuapp.com/product"

    useEffect(() => {
        fetch(productURL)
        .then((res) => res.json())
        .then((json) => {
            console.log(json)
            setProductList(json)
        })
        .catch(console.error)
    }, [])

    return(
        <div className="Home">
            <div className='gif-box'>
            <img className='top-image' src="https://monophy.com/media/b29IZK1dP4aWs/monophy.gif"></img>
            <img className='top-image' src='https://media.tenor.com/dfDU02ysJfwAAAAC/blue-anime.gif'></img>
            </div>
    <div className="text-bottom-border">
        <h1 className="home-text">All Products</h1>
    </div>
    <section className="productList grid grid-rows-2 grid-cols-3 gap-4  ">
        
        {productList.map((product,_id)=>{
            return (
                <div className='home-text max-w-md'>
                    <h1 className='text-center    '>{product.brand}</h1>
                    <h1 className='text-center  '>{product.price}</h1>
                <Link to= {`/products/${product._id}` }>
                    <div className="product-card grid grid-col-3 ">
                        
                    {/* <MDBRipple
        className='bg-image hover-overlay shadow-1-strong rounded'
        rippleTag='div'
        rippleColor='light'
        > */}

        
                        <img className='' src= {product.image}/>
                        
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                        {/* </MDBRipple> */}
                    </div>
                </Link>
                </div>
        )
    }
)}
    </section>
        </div>
    )
}
export default Home