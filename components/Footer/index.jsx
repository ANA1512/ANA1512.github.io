import styled from 'styled-components'
import logoFooter from '../../assets/logo-footer.png'

const FooterStyled = styled.div`
 
   background-color: black;
   height:209px;
   text-align: center;
   padding-top: 50px;


`
const CopyrightStyled = styled.p`
    color: white; 
    font-family: 'Montserrat';
    padding-top:  20px;
`
function Footer(){
     return(
        <FooterStyled>
          <img src={logoFooter} alt="logo-white-footer"/>
          <CopyrightStyled> © 2020 Kasa.All rights reserved</CopyrightStyled>
       </FooterStyled>

     )
}

export default Footer