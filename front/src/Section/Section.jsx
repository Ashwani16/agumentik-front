import React from 'react'
import './Section.css';

const Section = () => {
  return (
    <>

<section id="section_1" >
        <div id="cont1">
            <div id="sec-div-1">
                <h1 id="take">The Exotic <span id="spn"> Lakshadweep</span> Island</h1>
                {/* <p id="calTag">Calendly is your hub for scheduling meetings professionally and efficiently, eliminating the hassle of back-and-forth emails so you can get back to work.</p> */}
                <button id="start">Discover Now</button>
            </div>
            
            <div id="sec-div-2"><img style={{width:"100%"}} src="https://images.appypie.com/wp-content/uploads/2020/10/05112119/travel-website-builder.svg" alt=""/></div>
        </div>



        
        <div>
            <div><h1>Where You are flying?</h1></div>
            <div>
                <form action="">
                    <input type="text" placeholder=''/>
                </form>
            </div>
        </div>




            
    </section>

    </>
  )
}

export default Section;
