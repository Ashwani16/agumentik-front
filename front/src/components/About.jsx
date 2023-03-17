import "./About.css"
import { useEffect, useState } from "react"
import axios from "axios"
export const About=()=>{
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
        <h1>About</h1>
        <h2>Our Team</h2>
        <p>{data.aboutquote}</p>
        <div className="aboutdiv">
            <img src="https://i.pinimg.com/originals/cf/dc/5b/cfdc5b103f45bba8aa1b83952c6c525d.jpg"/>
            <div>
                <h5>{data.teamMembers&&data.teamMembers[0]}</h5>
                <p>Founder, Lead PhotoGrapher, CEO</p>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim sunt magnam maiores, aut eos recusandae quia commodi nisi pariatur similique cupiditate ratione quaerat quis sapiente. At quia suscipit voluptatibus perfer</p>
            </div>
        </div>
        <div>
            <h1>What customer's are saying?</h1>
            <p>{data.custumersayquote}</p>
        </div>
        <h2>Certificate</h2>
        <p>{data.certificatequte}</p>
        <div className="certi">
        {
            data.certificates&&data.certificates.map((e,i)=>{
                return <img key={e+i} src={e} alt="certrificates images" />
            })
        }
        </div>
        
    </div>

}