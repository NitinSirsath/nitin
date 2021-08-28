import React from 'react'

const Ifelse = () => {
    const serie = "amazon"

    
    return (
        <>
          <h1>Ifelse</h1>  
        {(serie ==="netflix")? "netflix" : "amazon"}
        </>
    )
}

export default Ifelse
