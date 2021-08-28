import React, {useState} from 'react'


const Hooks = () => {
    const state = useState();
    let [count, setCount ]= useState(0)  ;
    const inCr = () =>{
        setCount(count + 1)
        console.log('ckicked');
    }
    return (
        <>
           <h1>{count}</h1> 
           <button onClick={inCr}>Click</button>
        </>
    )
}

export default Hooks
