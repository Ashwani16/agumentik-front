import logo from './logo.svg';
import './App.css';
import axios from "axios"
import { Dashboard } from './components/dashboard/dashboar5d';
import { useEffect } from 'react';
import Navbar from './Navbar/Navbar'
import Footer from './Footer/Footer';
import Section from './Section/Section';
import { AllRoutes } from './AllRoutes';



function App() {
  // useEffect(()=>{
  //   axios.get(`http://localhost:8080/`).then((res)=>{
  //     console.log(res.data)
  //   })
  // },[])
  return (
    <div className="App">
      <Navbar/>
      <AllRoutes/>
      <Footer/>
    </div>
  );
}

export default App;
