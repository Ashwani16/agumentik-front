import { useState } from "react"
import axios from "axios"
import {useNavigate} from "react-router-dom"
export const Dashboard=()=>{
    const navigate=useNavigate()
    const [data,setdata]=useState({
       heading1:"",
       packageCat:[],
       packages:[],
       heading2:"",
       heading2package:[],
       heading2quote:"",
       heading3:"",
       heading3clients:[],
       aboutquote:"",
       teamMembers:[],
       custumersayquote:"",
       certificatequte:"",
       certificates:[],
       place:"",
       placeovervie:"",
       days:[],
        inclusion:[],
        exclusion:[]
    })
    const [packageCat,setpackageCat]=useState("")
    const [packages,setpackages]=useState("")
    const [heading2package,setheading2package]=useState("")
    const [heading3clients,setheading3clients]=useState("")
    const [teamMembers,setteamMembers]=useState("")
    const [certificates,setcertificates]=useState("")
    const [day,setday]=useState({heading:"",body:""})
    const [inclusion,setinclusion]=useState("")
    const [exclusion,setexclusion]=useState("")

     function submitHandler(){
        //  setdata((pre)=>{
        //     return {...pre,packageCat,packages,heading2package,heading3clients,teamMembers,certificates,days:day,inclusion,exclusion}
        // })
        //console.log(data)
        axios.post(`https://perfect-crab-bathing-suit.cyclic.app/`,data).then((res)=>{
           // console.log(res)
            navigate("/")
        })
    }
    function changeHandler(e){
        setdata((pre)=>{
            return {...pre,[e.target.name]:e.target.value}
        })
    }
    return <div>
        <div>
            <h2>Home</h2><br/>
            <label>Heading 1</label><br/>
            <input name="heading1" value={data.heading1} onChange={changeHandler} placeholder="Enter first Haeding"/><br/>
            <label>Packages Category</label><br/>
            {data.packageCat.length>0 && data.packageCat.map((e,i)=>{
                return <h5 key={""+i}>{e}</h5>
            })}
            <input name="packageCat" onChange={(e)=>{setpackageCat(e.target.value)}} placeholder="add categories"/>
            <button onClick={()=>{setdata({...data,packageCat:[...data.packageCat,packageCat]})}} >Add</button><br/>

            <label>Packages</label><br/>
            {data.packages.length>0 && data.packages.map((e,i)=>{
                return <h5 key={""+i}>{e}</h5>
            })}
            <input name="packages" onChange={(e)=>{setpackages(e.target.value)}}  placeholder="add Packages"/>
            <button onClick={()=>{setdata({...data,packages:[...data.packages,packages]})}}>Add</button><br/>
            <label>Heading 2</label><br/>
            <input name="heading2" value={data.heading2} onChange={changeHandler} placeholder="Heading 2"/><br/>
            <label>Heading2 Packages</label><br/>
            <input name="heading2package" onChange={(e)=>{setheading2package(e.target.value)}} placeholder="add Heading2 Packages"/><br/>
            <button onClick={()=>{setdata({...data,heading2package:[...data.heading2package,heading2package]})}}>Add</button><br/>

            {data.heading2package.length>0 && data.heading2package.map((e,i)=>{
                return <h5 key={""+i}>{e}</h5>
            })}
            <label>heading2 Quote</label><br/>
            <input name="heading2quote" value={data.quote} onChange={changeHandler} placeholder="Enter quote"/><br/>
            <label>Heading 3</label><br/>
            <input name="heading3" value={data.heading3} onChange={changeHandler} placeholder="Enter Heading 3"/><br/>
            <label>Heading3 clients</label><br/>
            {data.heading3clients.length>0 && data.heading3clients.map((e,i)=>{
                return <h5 key={""+i}>{e}</h5>
            })}
            <input name=""  onChange={(e)=>{setheading3clients(e.target.value)}} placeholder="add cliets"/>
            <button onClick={()=>{setdata({...data,heading3clients:[...data.heading3clients,heading3clients]})}}>Add</button><br/>

            

        </div>
        <div>
            <h2>About page</h2>
            <label>Add Quote</label><br/>
            <input name="aboutquote" value={data.aboutquote} onChange={changeHandler} placeholder="enter quote"/><br/>
            <label>Team Members</label><br/>
            {data.teamMembers.length>0 && data.teamMembers.map((e,i)=>{
                return <h5 key={""+i}>{e}</h5>
            })}
            <input name="" onChange={(e)=>{setteamMembers(e.target.value)}} placeholder="add members"/>
            <button onClick={()=>{setdata({...data,teamMembers:[...data.teamMembers,teamMembers]})}}>Add</button><br/>
            <label>Customer Saying quote</label><br/>
            <input name="custumersayquote" value={data.custumersayquote} onChange={changeHandler} placeholder="Enter quote"/><br/>
            <label>Certificate Quote</label><br/>
            <input name="certificatequte" value={data.certificatequte} onChange={changeHandler} placeholder="add quote"/><br/>
            <label>Certificates</label><br/>
            {data.certificates.length>0 && data.certificates.map((e,i)=>{
                return <h5 key={""+i}>{e}</h5>
            })}
            <input name="certificates"  onChange={(e)=>{setcertificates(e.target.value)}} placeholder="add certificate"/>
            <button onClick={()=>{setdata({...data,certificates:[...data.certificates,certificates]})}}>Add</button><br/>

        </div>
        <div>
            <h2>Place</h2>
            <label>add place</label><br/>
            <input name="place" value={data.place} onChange={changeHandler} placeholder="add place"/><br/>
            <label>Place Over view</label><br/>
            <input name="placeovervie" value={data.placeovervie} onChange={changeHandler} placeholder="add overview"/><br/>
            <label>add day</label><br/>
            {data.days.length>0 && data.days.map((e,i)=>{
                return <h5 key={""+i}>{e.heading} {e.body}</h5>
            })}
            <input name="" onChange={(e)=>{setday({...day,heading:e.target.value})}} placeholder="day heading"/><br/>
            <input name="" onChange={(e)=>{setday({...day,body:e.target.value})}} placeholder="day body"/>
            <button onClick={()=>{setdata({...data,days:[...data.days,day]})}}>add</button><br/>
            <label>Additional Info</label><br/>
            <label>Inclusions</label><br/>
            <input name="inclusion"  onChange={(e)=>{setinclusion(e.target.value)}}  placeholder="add inclusions"/>
            <button onClick={()=>{setdata({...data,inclusion:[...data.inclusion,inclusion]})}}>Add</button><br/>
            <label>Exclusions</label><br/>
            <input name="exclusion" onChange={(e)=>{setexclusion(e.target.value)}}  placeholder="add exclusions"/>
            <button onClick={()=>{setdata({...data,exclusion:[...data.exclusion,exclusion]})}}>Add</button><br/>
        </div>
        <button onClick={submitHandler}>submit</button>

    </div>

}