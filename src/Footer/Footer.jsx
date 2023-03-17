import React from 'react'
import './Footer.css';
import logo from "../assest/gol-logo 1.jpg"

const Footer = () => {
  return (
    <>
     <footer className="footer">
         <div className="container">
             <div className="row">

             <div className="footer-col">
                     <h4><img src={logo} alt="" /></h4>
                     <ul>
                        <p id='lo'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Consequatur.</p>
                        
                        
                     </ul>
                 </div>

                 <div className="footer-col">
                     <h4>Company</h4>
                     <ul>
                         <li><a href="#">Event</a></li>
                         <li><a href="#">Blogs</a></li>
                         <li><a href="#">FAQ</a></li>
                         <li><a href="#">Join US</a></li>
                        
               
                     </ul>
                     
                 </div>
                 
                 <div className="footer-col">
                    <h4>About</h4>
                    <ul>
                        <li><a href="#">Project</a></li>
                        <li><a href="#">Lorem</a></li>
                        <li><a href="#">Services</a></li>
                        <li><a href="#">Our Story</a></li>
                        <li><a href="#">Marketing</a></li>
            
                    </ul>
                    
                </div>
                 <div className="footer-col">
                     <h4>Contact Us
                     </h4>
                     <ul>
                         <li><a href="#">abc@lorem.com</a></li>
                         <li><a href="#">India</a></li>
                     
                         
                     </ul>
                 </div>
              
                 
             </div>
         </div>
    </footer>
    </>
  )
}

export default Footer
