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
            <img className='top-image ' src="https://64.media.tumblr.com/deb997f02b2bbace4b603af128a9f003/tumblr_p0xtlpsBEx1v4pf8xo1_540.gif"></img>
            {/* <img className='top-image' src="https://monophy.com/media/b29IZK1dP4aWs/monophy.gif"></img> */}
            <img className='top-image' src='https://i.pinimg.com/originals/2e/ba/29/2eba2929ae5e66d96f0fbfcaa36650ed.gif'></img>
            </div>
    <div className="text-bottom-border">
        <h1 className="home-text bg-slate-500">All Products</h1>
    </div>
    <section className="productList bg-stone-200 grid grid-cols-4  ">
        
        {productList.map((product,_id)=>{
            return (
                <div className=' hover:bg-slate-500 font-bold border-black max-w-md'>
                    <h1 className='text-center    '>{product.title}</h1>
                    <h1 className='text-center  '>{product.price}</h1>
                <Link to= {`/products/${product._id}` }>
                    <div className="product-card  grid grid-col-3 ">
                        
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