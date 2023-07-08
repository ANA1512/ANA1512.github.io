import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Slideshow from "../../components/Slideshow";
import Navbar from "../../components/Navbar/index";
import Footer from "../../components/Footer/index";
import Marge from "../../components/Marge/Marge";
import Erreur from '../../components/Erreur';
import FilesData from '../../Data.json';
import Collapse from "../../components/Collapse";
import Stars from "../../components/Stars";
import { StyledSyntaxe} from '../../utils/styles/atoms';
import styled from 'styled-components';
import './logement.css';


//style component
const ImgHost =styled.img`
   width: 70px;
   height: 70px;
   border-radius: 100%;
`
const StyledTag = styled.li`
   justify-content= flex-start;
   width: auto; 
   color:white; 
   background-color:#FF6060;
   font-size: 10px;
   padding: 5px 20px 5px;
   margin-bottom: 5px;
   margin-right:5px;
   border-radius:5px;
   list-style-type: none;
`
const NameHost = styled.p`
    padding-top: 15px;
    font-size: 14px; 
    font-weight: 500;
`

export default function Logement() {

  // get id flat
   const {id}  = useParams();

   const [item, setItem] = useState();

   useEffect(()=>{
  
     const foundItem = FilesData.find((flat)=>flat.id ===id);
     setItem(foundItem);
    
   },[id]);
   
   // Flat not found : error page display
   if(!item){
     return <Erreur/>
   }

   // return equipement list
   const listItemEquipment = item.equipments.map((equipments)=> 
   <li key={equipments}>{equipments}</li>);
   
   //return tag 
   const tagItem = item.tags.map((tags)=> 
   <StyledTag key={tags}>{tags}</StyledTag>);

      return (
        <div>

          <Marge>
          <Navbar/>
           
          {/* section slideshow  */}
             
            <Slideshow pictures={item.pictures}></Slideshow>
            
            {/* flat info */}
            <StyledSyntaxe>
              <div className="global_info_flat">
                <div  className="flat_info">
                  <h2>{item.title}</h2>
                  <p>{item.location}</p>
                
                <div className="block_tag">
                  <div className="one_tag">
                  {tagItem}
                </div>
                </div>
              </div>
   
               {/* section stars rating  */}
            
              <div className="host_info">
              <div className="stars_rating">
                <Stars rating={item.rating}/>
              </div>
              <div className="name_photo">
                <NameHost>{item.host.name}</NameHost>
                <ImgHost src={item.host.picture} alt="host pictures" className="picthost"/>
              </div>
              </div>
              </div>
           
            {/* section accordeon */}
            <div  className="collapse-part">   
            <Collapse  contenu={item.description}  part="Description" />
            <Collapse  contenu={listItemEquipment} part="équipements"/>
            </div>    
          </StyledSyntaxe>
           </Marge>
           <Footer/>
        
        </div>

      )

}
