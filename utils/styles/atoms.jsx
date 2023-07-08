import { Link } from 'react-router-dom'
import styled from 'styled-components'


export const StyledLink = styled(Link)`
  font-family: Montserrat;

  text-decoration: none;
  font-weight: 500;
  text-align: center;
  color: #FF6060;
  text-transform: uppercase;
  &:hover{
    text-decoration: underline;
  }

  @media (min-width: 1200px) {
  
     text-transform: lowercase;
      &:hover{
      text-decoration: underline;
    }

  }
  
`

export const StyledSyntaxe = styled.p`
font-family: Montserrat;
color: #FF6060;



`

