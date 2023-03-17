import { useEffect, useState } from "react"
import axios from "axios"
import Section from "../Section/Section"
import  "./Home.css"
export const Home=()=>{
    const [data,setData]=useState([])
    useEffect(()=>{
        axios.get(`https://perfect-crab-bathing-suit.cyclic.app/`).then((res)=>{
            setData(res.data)
          console.log(res.data)
        }).catch((err)=>{
            console.log(err)
        })
      },[])
    return <div>
        <Section/>
       
        {data.heading1?<h1>{data.heading1}</h1>:""}
        <p>This is a unique experince on ship, sea and land, exploring different coral islands of Lakshadeep</p>
        <div className="msca__maldeev">
            {data.packageCat && data.packageCat.map((e,i)=>{
                return <div  key={i+e}> <p>{e}</p></div>
            })}
        </div>
        <div className="iii__images">
            {
                data.packages && data.packages.map((e,i)=>{
                    return <div className="iii__images1" key={e+i}>
                        <img src="https://c4.wallpaperflare.com/wallpaper/654/698/342/green-blue-indonesia-landscape-wallpaper-preview.jpg" alt="image"/>
                        <h3>{e}</h3>
                        <p>Lorem ipsum dolor sit am, eius sint saepe neditiis</p>
                        <button className="btn__iii">Book Now</button>
                    </div>
                })
            }
        </div>
        <button className="discover__more">Discover more</button>
        {data.heading2?<h1 >{data.heading2}</h1>:""}
        <p className="section__5__pTag">This is a unique experince on ship, sea and land, exploring different coral islands of Lakshadeep</p>
        
        <div className="iii__images22">
            {
                data.heading2package && data.heading2package.map((e,i)=>{
                    return <div className="iii__images2" key={e+i}>
                        <img src="https://www.lifeberrys.com/img/article/island-resorts-1645884457-lb.jpg" alt="image"/>
                        <h3>{e}</h3>
                        <p>Lorem ipsum dolor sit am, eius sint saepe neditiis consequuntur labore ipsa obcaecati nobis natus alia</p>
                    </div>
                })
            }
        </div>
        <div>
            <h1>{data.heading2quote}</h1>
            <p>Lorem ipsum, dolopsum molestiae, ullate sed! Nesciunt ipsum tempora ducimus enim ipsa.</p>
        </div>
        {data.heading3?<h1>{data.heading3}</h1>:""}
        <div className="iii__images22 h3clients">
            {
                data.heading3clients && data.heading3clients.map((e,i)=>{
                    return <div key={e+i}>
                        <img className="h3clientsimage" src="https://www.shutterstock.com/image-photo/high-fashion-lookyoung-stylish-confident-260nw-467304407.jpg " alt="image"/>
                        <h2>{e}</h2>
                        <p>Tranto,Canada</p>
                        <p>Lorem ipsum dolaepe neditiis consequuntur labore ipsa obcaecati nobis natus alia</p>
                        <p>★★★★★</p>
                    </div>
                })
            }
        </div>
    </div>
}