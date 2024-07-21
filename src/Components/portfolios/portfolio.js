import React from 'react'
import Photoc from "../image/Photoc.jpg"
// import { Grid } from '@mui/material'
export default function Portfolio() {
  return (
    <div className="items-center justify-center min-h-screen">


      <div className="flex flex-col items-center gap-2.5 mb-7">
        <img className=" rounded-full w-150 h-150" src={Photoc} alt="" />
        <h1 className="text-4xl font-bold">Hello, my name is Dipendra yesmali magar.</h1>
        <h2 className="text-2xl font-bold">Full stack Mern Develover from Mindrisers instituue    </h2>
        <h2 className="text-2xl font-bold">
          Kathmandu, chabhill-04 , Nepal</h2>
        <p className="text-xl font-medium">Note: for the pratice purpose, this website is made of HTML, CSS, JAVASCRIPT & REACT</p>

      </div>



      <div class="flex flex-col items-center gap-2 bg-amber-600 rounded-md h-8rem w-full text-center font-sans font-bold text-lg ">
        <h1 className="mt-6">HTML, CSS and JAVASCRIPT are the core technoogies of world wide web; <br />
        </h1>
        <ul class="" >
          <li>For being a good Develoveranyone have to start from scratch:
          </li>
          <li className="mt-4">HTML</li>
          <li>CSS</li>
          <li>JAVASCRIPT</li>
        </ul>




      </div>

      <div className="mt-20 text-center flex flex-col text-bold font-sans gap-8 ">

        <div className="bg-amber-700 h-40 w-40 html rounded-full mb-20"><a href=" ">HTML Lesson Praticed</a></div>

        <div className="bg-amber-700 html rounded-full full h-40 w-40 mb-20"> <a href="">CSS Lesson Praticed</a></div>

        <div className="bg-amber-700 h-9rem html rounded-full h-40 w-40 mb-20">
          <a href="">JS Lesson Praticed</a>
        </div>

      </div>


    </div >
  )
}
