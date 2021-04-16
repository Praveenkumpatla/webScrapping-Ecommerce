import {useEffect,useState} from 'react'
import axios from 'axios'
import Card from './Card'

function Front() {
    const [data, setdata] = useState([])
    useEffect(() => {
        async function fact (){
            let dat = await axios.post('https://hackscrap.herokuapp.com/amazon',{ 
                "url": "https://www.amazon.in/s?k=air+conditinor&ref=nb_sb_noss"
            })
            setdata(dat.data)
        }fact()
    }, [])
    const [inp, setinp] = useState("")
    return (
        <div className="row">
            <div className="col-9 m-1"><input className="form-control" value={inp} onChange={(e)=>{setinp(e.target.value)}} placeholder="Enter Amazon item-search URl"/></div>
            <div className="col-2 mb-1 mr-1 mt-1"><button className="btn btn-info float-left" onClick={async ()=>{
                let dat = await axios.post('https://hackscrap.herokuapp.com/amazon',{ 
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

export default Front
