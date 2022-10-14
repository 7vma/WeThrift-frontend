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
        <h1 className="home-text te">All Products</h1>
    </div>
    <section className="container">
        {productList.map((product,_id)=>{
            return (
                <Link to= {`/home/${product._id}` }>
                    <div className="product-card">
                    {/* <MDBRipple
        className='bg-image hover-overlay shadow-1-strong rounded'
        rippleTag='div'
        rippleColor='light'
        > */}

        
                        <img src= {product.image}/>
                        
                        <h4>{product.title}</h4>
                        <div className='mask' style={{ backgroundColor: 'rgba(251, 251, 251, 0.2)' }}></div>
                        {/* </MDBRipple> */}
                    </div>
                </Link>
        )
    }
)}
    </section>
        </div>
    )
}
export default Home