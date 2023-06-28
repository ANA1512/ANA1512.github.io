import React, {useState} from 'react'
import './collapse.css'
import Arrow from '../../assets/arrow.png'




// affichage contenu accordéon 
function Collapse(contenu ) {

const [isActive, setIsActive] = useState(null)

  return (
      <div className = "box-collapse" key= {contenu.id}>
               <div className="section-title-collapse">
                  <h3  id="texte">{contenu.part}</h3>
                  <button 
                  onClick={()=>setIsActive(!isActive)}
                 
                  className= {isActive ? "ouvert" : "fermer" }
                  >
                     <img src={Arrow} alt="chevron"/>
                  </button>
               </div>

                <div className= {isActive ? "ouvert" : "hide" }
                
                >{contenu.contenu}</div>
               
         
        </div>
  )
}

export default Collapse



