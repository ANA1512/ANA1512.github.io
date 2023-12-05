import {useState} from 'react'
import { useParams} from 'react-router-dom'
import FilesData from '../../Data.json'
import "react-responsive-carousel/lib/styles/carousel.min.css"; 
import './Slider.css'
import BtnSlider from './btnSlider'


function Slideshow(){
      
      // found identifiant 
      const {id} =useParams();
      const foundItem = FilesData.find((identifiant)=>identifiant.id ===id);
      const pictures=foundItem.pictures
    
      // arrow direction
      const [slideAnim,setSlideAdmin] = useState (0)

      const nextSlide= () => {
         
            setSlideAdmin( slideAnim === pictures.length -1 ? 0 : slideAnim + 1);
      }
         
      const prevSlide= () => {
              
            setSlideAdmin( slideAnim === 0 ? pictures.length -1 : slideAnim - 1);
      }
 
   return(

      <div className="container-slider"> 
    
            {pictures.map((img,index)=>{
               
               return(                                   
                  <div key={index} >
                
                  { index === slideAnim && ( <img src={img} alt="flat pict"  className="flatpict" />)}    
                  {index ===slideAnim &&(<p className="counter">{slideAnim+ 1}/{pictures.length}</p>)}
                  
                  </div>
               )

            })}

           {pictures.length>1 && (
            <>
              <BtnSlider moveSlide={nextSlide} direction={"next"}/>
              <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
            </>
          )}
       
      </div>

   )
     
  }
              

export default Slideshow





