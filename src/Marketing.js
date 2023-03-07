import React from 'react'
import LoveNiStory from './Images/LoveNiStory.jpg';
import babubhai from "./Images/babubhai.jpg";

import shortcircuit from './Images/shortcircuit.jpg';
import './App.css'


function Marketing() {
  return (
    <div>
<section class="text-gray-400 body-font ">
  <div class="container px-5 py-24 mx-auto"style={{marginTop:"50px"}}>
  <div class="container px-5 py-24 mx-auto" style={{marginTop:"-100px"}}>
    <h1 class="text-2xl font-medium title-font mb-4 tracking-widest"style={{fontSize:"xxx-large",color:"khaki",textAlign:"center"}}>Marketing</h1>
    <br></br>
    <br></br>
    <br></br>
    <div class="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4 md:space-y-0  md:space-x-0 space-x-0 space-y-6" style={{marginLeft:"-80px"}}>
      <div class="p-4 md:w-1/3 flex  border border-black border-opacity-75 p-6 rounded-lg" style={{borderRadius:"50px",}}>
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          <p class="leading-relaxed text-base" style={{color:"white",fontSize:"larger"}}>Film promotion can have a huge effect on whether or not it is successful. We believe in the crucial role of intelligence to identify the right promotional strategy for each film.</p>
          
        </div>
       
      </div>
      
      <div class="p-4 md:w-1/3 flex  border border-black border-opacity-75 p-6 rounded-lg" style={{borderRadius:"50px"}}>
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <circle cx="6" cy="6" r="3"></circle>
            <circle cx="6" cy="18" r="3"></circle>
            <path d="M20 4L8.12 15.88M14.47 14.48L20 20M8.12 8.12L12 12"></path>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          
          <p class="leading-relaxed text-base"style={{color:"white", fontSize:"larger"}}> Movie promotions not only include getting the attention of the audiences but also feeding them the content related to the movie.</p>
        
        </div>
      </div>
      <div class="p-4 md:w-1/3 flex  border border-black border-opacity-85 p-6 rounded-lg" style={{borderRadius:"50px"}}>
        <div class="w-12 h-12 inline-flex items-center justify-center rounded-full bg-gray-800 text-indigo-400 mb-4 flex-shrink-0">
          <svg fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" class="w-6 h-6" viewBox="0 0 24 24">
            <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
            <circle cx="12" cy="7" r="4"></circle>
          </svg>
        </div>
        <div class="flex-grow pl-6">
          
          <p class="leading-relaxed text-base"style={{color:"white", fontSize:"larger"}}> Our expertise covers all areas of marketing and promotion, including strategy, advertising, on Ground promotions and social media campaigns, TV, Radio, Hording, Influencer marketing and outdoor outreach.</p>
         
        </div>
      </div>
    </div>
  </div>
  <div class="flex flex-col text-center w-full mb-12 ">
      <h1 class="sm:text-3xl text-2xl  title-font mb-4 text-white" style={{color:"khaki",fontSize:"x-large"}}>Sponsorship And In film  Branding</h1>
      <p class="lg:w-2/3 mx-auto leading-relaxed text-base" style={{color:"white",fontSize:"larger"}}>Our purpose is to facilitate contact between investors, sponsors and filmmakers. We help producers, filmmakers, to identify and approach apt investors and sponsors. Producer can seek funds at any stage of film be it Pre production, Production, Post Production, Marketing, Distribution etc. Similarly we provide opportunity to investors to collaborate with filmmakers directly without a middle man & have a wide range of films to choose from. One of our services comprises of legal licensing of film makers with authorities to get state provided benefits and get acquainted with the process. </p>
    
    </div>
    <br></br>
    <br></br>
    <br></br>

    <h1 class="sm:text-3xl text-2xl font-medium title-font mb-2 text-white" style={{textAlign:"center",fontSize:"xx-large",color:"khaki"}}>OUR PROJECTS</h1>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <br></br>
    <div class="flex flex-wrap -m-4">
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={LoveNiStory} alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xl font-medium title-font">LOVE STORY</h3>
        
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src={babubhai} alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xl font-medium title-font"> BABUBHAI</h3>
         
       
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded w-full object-cover object-center mb-6" src="https://shreenik.com/wp-content/uploads/2022/01/tari-sathe-master-poster-3x1.5ft-2048x1024.jpg" alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xl font-medium title-font">TARI SATHE</h3>
          
        </div>
      </div>
      <div class="xl:w-1/4 md:w-1/2 p-4">
        <div class="bg-gray-800 bg-opacity-40 p-6 rounded-lg">
          <img class="h-40 rounded  object-cover object-center mb-5"  src={shortcircuit} alt="content"/>
          <h3 class="tracking-widest text-indigo-400 text-xl font-medium title-font">SHORT CIRCUIT</h3>
          
        </div>
      </div>
    </div>
    <br></br>
    <br></br>
    <br></br>
    <br></br>

  </div>
</section>

    </div>
  )
}

export default Marketing