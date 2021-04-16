import React from 'react'
import {Link} from 'react-router-dom'

function Choice() {
    return (
        <div className="d-block">
            <div>Choose the below sites to Scrap</div>
            <Link to="/flipkart/scrap" className="btn btn-info m-1" >Flipkart Scrap</Link>
            <Link to="/amazon/scrap" className="btn btn-info m-1" >Amazon Scrap</Link>
            <Link to="/" className="btn btn-info m-1" >Snapdeal Scrap Soon</Link>
        </div>
    )
}

export default Choice
