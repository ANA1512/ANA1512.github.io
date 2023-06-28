import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Card from "../../components/Card"
import Erreur from '../../components/Erreur'
import FilesData from '../../Data.json'
import Collapse from "../../components/Collapse";
import Stars from "../../components/Stars";

export default function Logement() {

  // get id flat
   const {id}  = useParams();

   const [item, setItem] = useState();

   useEffect(()=>{
  
     const foundItem = FilesData.find((flat)=>flat.id ===id);
     setItem(foundItem);
    
   },[]);
   
   // Flat not found : error page display
   if(!item){
     return <Erreur/>
   }

   // return equipement list
   const listItemEquipment = item.equipments.map((equipments)=> 
   <li key={equipments}>{equipments}</li>);
   

      return (
   
         <div>
          {/* section slideshow  */}
            <Slideshow pictures={item.pictures}></Slideshow>
            <p>{item.title}</p>
            <p>{item.location}</p>
             <p>{item.tags}</p>

          {/* section stars rating  */}
             <Stars rating={item.rating} />

            <p>{item.host.name}</p>
            <img src={item.host.picture} alt="host pictures" />

            {/* section accordeon */}        
            <Collapse  contenu={item.description}  part="Description" />
            <Collapse  contenu={listItemEquipment} part="équipements"/>
        
         </div>

      )

}
