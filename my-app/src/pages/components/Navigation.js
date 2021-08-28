import { Link } from "react-router-dom"

const Navigation = () => {
    return (
        <>
            <nav className="nav-bar">
               <div>
                   <Link to="/">
                   <img style={{height: 40}} className="icon" src="/img/icon.png" alt="icon" />
                   </Link>
               </div>
               <div>
                   <ul className="list-items">
                       <li><Link to="/">Home</Link></li>
                       <li><Link to="/about">About</Link></li>
                       <li><Link to="/products">Products</Link></li>
                       <li><Link to="/cart">
                           <div className="cart-value">
                               <div>
                           <img style={{height: 30}} src="/img/cart.png" alt="cart" />
                           </div>
                           <div>
                           <span>10</span>
                           </div>
                           </div>
                           </Link></li>
                   </ul>
               </div>
            </nav>
        </>
    )
}

export default Navigation
