import logo from '../../assets/logo.png'
import { Link } from 'react-router-dom'
import styled from 'styled-components'
import { StyledLink } from '../../utils/styles/atoms'
import './navbar.css'


//navigation
const NavContainer = styled.nav`
  
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 120px;
  padding: 15px;


`
const NavNavbar = styled.div`
  display: flex;
  justify-content: space-around;   
  width: 180px;
  height:auto;
  
`


function Navbar() {
     return(
       
        <NavContainer>
             <Link to ="/">
                <img src={logo} alt= "logo-kasa" className= "imglogo"/>
            </Link>
            <NavNavbar>
                <StyledLink to="/"  className="nav_lien">Accueil</StyledLink>
                <StyledLink to="/apropos" className="nav_lien"> A propos</StyledLink>
           </NavNavbar>
        </NavContainer>
    
     )
      
}

export default Navbar