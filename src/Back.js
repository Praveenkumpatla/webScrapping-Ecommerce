import {useEffect,useState} from 'react'
import axios from 'axios'
import Card from './Card'
function Back() {
    const [data, setdata] = useState([])
    useEffect(() => {
        async function fact (){
            let dat = await axios.post('https://hackscrap.herokuapp.com/flipkart',{ 
                "url": "https://www.flipkart.com/search?q=mobiles&otracker=search&otracker1=search&marketplace=FLIPKART&as-show=on&as=off"
            })
            setdata(dat.data)
        }fact()
    }, [])
    const [inp, setinp] = useState("")
    return (
        <div className="row">
            <div className="col-9 m-1"><input className="form-control" value={inp} onChange={(e)=>{setinp(e.target.value)}} placeholder="Enter Flipkart item-search URl"/></div>
            <div className="col-2 mb-1 mr-1 mt-1"><button className="btn btn-info float-left" onClick={async ()=>{
                let dat = await axios.post('https://hackscrap.herokuapp.com/flipkart',{ 
                    "url": inp
                })
                setdata(dat.data)
            }}>Scrap</button></div>
            {
                data.map((item,index) =>{
                    return <Card joint={item} key={index}></Card>
                })
            }
        </div>
    )
}

export default Back
