import { Route, Routes } from "react-router-dom"
import { About } from "./components/About"
import { Dashboard } from "./components/dashboard/dashboar5d"
import { Home } from "./components/Home"
import { Place } from "./components/Place"

export const AllRoutes=()=>{
    return <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/about" element={<About/>}/>
        <Route path="/place" element={<Place/>}/>
        <Route path="/admindashboard" element={<Dashboard/>}/>



    </Routes>
}