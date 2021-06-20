import React from 'react'

const Coin=(props)=>{
    return(
    <div className="coin-cointainer">
        {props.face ===1 ? <img className="coin" src="https://qph.fs.quoracdn.net/main-qimg-9c81a54813716fccd8e3608ab2f51dcf"/>: <img className="coin" src="https://image.shutterstock.com/image-vector/one-rupee-coin-silver-vector-260nw-1220570092.jpg"/>}
    </div>
        )
}

export default Coin