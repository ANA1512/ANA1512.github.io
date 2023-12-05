import notFound from '../../assets/notfound.png'
import styled from 'styled-components'
import './erreur.css'
import colors from '../../utils/colors'
import React from 'react'
import { StyledLink } from '../../utils/styles/atoms'
import Navbar from '../../components/Navbar'
import Marge from '../../components/Marge/Marge'

const ErrorTitle = styled.p`
    font-family: Montserrat;
    font-size: 18px;
    font-weight: 500;
    margin-top: 40px;
    color: ${colors.primary};
    text-align: center;
`

function Erreur() {
    return (
          <div >
           <Marge>
          <Navbar/>
         
            <div className="erreur-img">
            <img className="img-notfound" src={notFound} alt="not found"/>
               <ErrorTitle>Oups! La page que vous demandez n'existe pas</ErrorTitle>
            <div className="returnlink">
               <StyledLink to={"/"} >Retourner sur la page d'accueil</StyledLink>
            </div>
         </div>
         </Marge>
         </div>
    )
  }
export default Erreur