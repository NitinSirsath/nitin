import React from 'react'
import './Home.css'
import ProductList from './components/ProductList'

const Home = () => {
    return (
        <>
         <div className="main-title">
             <div className="slogan">
                 <h3>Premium</h3>
                 <button className="explore-button">Explore</button>
             </div>
             <div className="main-img">
                <img style={{height: 500}} src="./img/main.jpg" alt="" />
             </div>
             </div> 
             <div className="product-list">
                 <ProductList />
                 </div>   
        </>
    )
}

export default Home
