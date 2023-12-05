import logo from '../../assets/logo.png'
import { NavLink, useLocation } from 'react-router-dom'
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

const {pathname} =useLocation();
const  isPageActive = {textDecoration :" underline"};


     return(
       
        <NavContainer>
             <NavLink to ="/"  style= {pathname === '/' ? isPageActive :undefined} >
                <img src={logo} alt= "logo-kasa" className= "imglogo"/>
            </NavLink>
            <NavNavbar>
                <StyledLink to="/"  className="nav_lien" style={pathname ==='/' ? isPageActive : undefined}>Accueil</StyledLink>
                <StyledLink to="/apropos" className="nav_lien" style={pathname ==='/apropos' ? isPageActive : undefined}  > A propos</StyledLink>
           </NavNavbar>
        </NavContainer>
    
     )
      
}

export default Navbar