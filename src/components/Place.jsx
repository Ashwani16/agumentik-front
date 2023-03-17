import "./Place.css"
import { useEffect, useState } from "react"
import axios from "axios"
export const Place=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://perfect-crab-bathing-suit.cyclic.app/`).then((res)=>{
            setData(res.data)
          console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
      },[])
    return <div className="ma1">
       <h1>{data.place}</h1>
       <h3>Overview</h3>
       <img  className="imgm1" src="https://media.istockphoto.com/id/1360554439/photo/maldives-tropical-island.jpg?b=1&s=170667a&w=0&k=20&c=AWY54kmUT9IcXJZdSdxxm5JUFK_3fxpmMbWQ6IhEG50="/>
       <p>{data.placeovervie}</p>
       <hr/>
       <h2>Day wise Itineary</h2>
       {
        data.days&&data.days.map((e,i)=>{
            return <div className="days" key={e+i}>
                <p>Day{i+1}</p>
                <h6>{e.heading}</h6>
                <p>{e.body}</p>
            </div>
        })
       }
       <h2>Additioonal information</h2>
       <div>
        <p>Inclusion</p>
        {
            data.inclusion&&data.inclusion.map((e,i)=>{
                return <p className="info" key={e+i}>{e}</p>
            })
        }
       </div>
       <div>
       <p>Exclusion</p>
        {
            data.exclusion&&data.exclusion.map((e,i)=>{
                return <p className="info" key={e+i}>{e}</p>
            })
        }
       </div>
    </div>
}