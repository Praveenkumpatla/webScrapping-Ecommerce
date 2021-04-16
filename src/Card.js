import React from 'react'

function Card(props) {
    return (
        <div className="col-3">
            <div className="card m-1" style={{color:"black",height:"300px"}}>
                <img className="cardimg-top ml-5" src={props.joint.image} alt=""style={{height:"100px",width:"180px"}}/>
                <div className="card-body">
                    <div className="card-text" style={{fontSize:"10px"}}>
                        <h6>{props.joint.urlText}</h6>
                        <p>Rating : {props.joint.rating}</p>
                        <p>Offer price : {props.joint.fprice}</p>
                        <p>Actual price : {props.joint.aprice}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card
