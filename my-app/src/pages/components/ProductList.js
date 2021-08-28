import React from 'react'
import './ProductsList.css'
import Data from './Data'

const ProductList = () => {
    const sdata = Data.map((getdata)=>{
        return(
            <>
            <div className="item">
                    <img style={{ height : 290}}src={getdata.img} alt="" />
                    <p>{getdata.modelName}</p>
                    <p>{getdata.style}</p>
                    <div className="add-cart">    
                    <p>{getdata.price}</p>
                    <p><button>ADD</button></p>
                    </div>
                </div>
            </>
        )
    })
    return (
        <>
        <div className="product-list-heading">
            <h1>Products</h1>
            </div>
            <div className="list-items">
                <div className="red">
                <div className="item">
                    <img style={{ height : 290}}src="./img/iphone.png" alt="" />
                    <p>IPHONE 12 PRO/MAX</p>
                    <p>Demo Style</p>
                    <div className="add-cart">    
                    <p>$12,000</p>
                    <p><button>ADD</button></p>
                    </div>
                </div>
                <div className="item">
                    <img style={{ height : 290}}src="./img/iphone2.png" alt="" />
                    <p>IPHONE 12 PRO/MAX</p>
                    <p>SCARAB</p>
                    <div className="add-cart">    
                    <p>$12,190</p>
                    <p><button>ADD</button></p>
                    </div>
                </div>
                <div className="item">
                    <img style={{ height : 290}}src="./img/iphone3.png" alt="" />
                    <p>IPHONE 12 PRO/MAX</p>
                    <p>PARADE OF THE PLANETS TITANIUM</p>
                    <div className="add-cart">    
                    <p>$14,000</p>
                    <p><button>ADD</button></p>
                    </div>
                </div>
                </div>
                <div>
              {sdata}
              </div>
                </div>
               
        </>
    )
}

export default ProductList;
