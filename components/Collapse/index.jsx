import React, {useState} from 'react'
import './collapse.css'
import Arrow from '../../assets/arrow.png'




// affichage contenu accordéon 
function Collapse(contenu ) {

const [isActive, setIsActive] = useState(null)

  return (
      <div className = "box-collapse" key= {contenu.id}>
               <div className="section-title-collapse">
                  <h3  className="contenu_txt">{contenu.part}</h3>
                  <button 
                  onClick={()=>setIsActive(!isActive)}
                  className= {isActive ? "open" : "close" }
                  >
                     <img src={Arrow} alt="chevron"  className="chevron"/>
                  </button>
               </div>

                <div className= {isActive ? "open" : "hide" }  id="content-collapse"
                
                >{contenu.contenu}</div>
               
         
        </div>
  )
}

export default Collapse



