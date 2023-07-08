
import './apropos.css'
import Collapse from '../../components/Collapse'
import { StyledSyntaxe} from '../../utils/styles/atoms'
import '../../components/Banner/Banner.css'
import Navbar from "../../components/Navbar"
import Footer from "../../components/Footer"
import Marge from  "../../components/Marge/Marge"

function Propos() {

   return(

    <div> 
        <Marge>
        <Navbar/>
        <StyledSyntaxe>
        <div className= "banner-about "></div>
      
        <div className="section-collapse-about" >

            <Collapse  contenu="Les annonces postées sur Kasa garantissent une fiabilité
            totale. Les photos sont conformes aux logements, et toutes les informations 
            sont régulièrement vérifiées  par nos équipes."   part="Fiabilité" />

            <Collapse contenu="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation
            du voisinage entraînera une exclusion de notre plateforme."   part="Respect"/>

            <Collapse contenu="Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. 
            N'hésitez pas à nous contacter si vous avez la moindre question."   part=" Service" />

            <Collapse contenu="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés.
            Nous organisons également des ateliers sur la sécurité domestique
            pour nos hôtes."   part="Sécurité"/>

        </div>
 
        </StyledSyntaxe>
        </Marge>
        <Footer/>
    </div>

   )

}

export default  Propos 