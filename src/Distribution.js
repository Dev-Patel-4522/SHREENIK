import React from 'react'
import './App.css';
import film from './Image/film.jpg'

function Distribution() {
  return (
    <div>
<section className="text-gray-400 body-font ">
  <div className="container px-5 py-24 mx-auto" style={{marginTop:"50px"}}>
  <br></br>

    <div className="flex flex-wrap w-full mb-20">
      <div className="lg:w-1/2 w-full mb-6 lg:mb-0">
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white" style={{fontSize:"xxx-large",color:"khaki"}}>Film Distribution</h1>
        
        <div className="h-1 w-60 bg-indigo-500 rounded"> </div>
     
       
      </div>
      
      <div className="md:p-2 p-1 w-1/2">
      <br></br><br></br>
          <img alt="gallery" className="w-full object-cover h-full object-center block" style={{height:"500px",width:"600px",marginLeft:"-760px",marginTop:"100px"}} src={film}/>
        </div>
      <p className="lg:w-1/2 w-full leading-relaxed text-gray-400 text-opacity-90" style={{fontSize:"x-large",color:"white",marginLeft:"800px",marginTop:"-500px"}}>Our strong reach enables us to maintain transparency and flexibility over core regions in which we distribute our films. We distribute our content in all the circuits either through our distribution network offices and through trusted sub-distributors. In recent years Gujarati cinema has witnessed upsurge of quality entertaining films from talented producers. We believe quality content should reach to audience at the end of lines. Our association with all exhibitors and theatre brands across Gujarat and overseas enables us to showcase films to Gujarati audience in the state and settled abroad. We distribute our films theatrically overseas through our sister company, S R Entertainment which based in Mumbai.</p>
      <br></br>
    </div>
    <br></br>
    <br></br>
    <br></br>


    <div>
        <h1 className="sm:text-3xl text-2xl font-medium title-font mb-2 text-white" style={{textAlign:"center",fontSize:"xxx-large",color:"khaki"}}>Our Projects</h1>
        <div className="h-1 w-60 bg-indigo-500 rounded" style={{marginLeft:"620px"}}  >      
     </div>
      <br></br>
      <br></br>
      <br></br>
      <br></br><br></br>
      
      </div>

    <div className="flex flex-wrap md:-m-2 -m-1">
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="	https://shreenik.com/wp-content/uploads/2022/01/tari-sathe-master-poster-3x1.5ft-2048x1024.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="https://shreenik.com/wp-content/uploads/2020/04/Babubhai-Sentimental1.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="	https://shreenik.com/wp-content/uploads/2020/04/ek-hota-pani-marathi-movie-cover-poster-image.jpg"/>
        </div>
      </div>
      <div className="flex flex-wrap w-1/2">
        <div className="md:p-2 p-1 w-full">
          <img alt="gallery" className="w-full h-full object-cover object-center block" src="https://shreenik.com/wp-content/uploads/2020/04/aron-movie.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="	https://shreenik.com/wp-content/uploads/2022/02/download.jpg"/>
        </div>
        <div className="md:p-2 p-1 w-1/2">
          <img alt="gallery" className="w-full object-cover h-full object-center block" src="	https://shreenik.com/wp-content/uploads/2020/04/dahvi-horizontal.jpg"/>
        </div>
      </div>
    </div>
    <br></br><br></br><br></br>

  </div>
</section>




    </div>
  )
}

export default Distribution