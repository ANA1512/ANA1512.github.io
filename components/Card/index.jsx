import styled from 'styled-components'
import '../../components/Card/card.css'


const CardWrapper = styled.div ` 
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 340px;
  background: linear-gradient(180deg,rgba(34, 34, 34, 0.2), rgba(255, 96, 96, 1) 75%,rgb(176, 80, 80), rgb(163, 98, 98));
  border-radius:10px ;
  margin-bottom : 10px;
`


const CardImage = styled.img`
  width:100%;
  height: 280px;
  border-radius:10px 10px 0px 0px;
  object-fit: cover;
`

const CardTitle = styled.p`
  
  font-size: 18px;
  color : #FFFFFF;
  margin-top: 290px;

`

function Card({title,cover}){
  
       return(
       
        <CardWrapper className= "cardwrapper">
            
             <CardImage src={cover} alt="logement" className="home-img"/>
         
             <CardTitle className="home-subtitle">{title}</CardTitle>
           
        </CardWrapper>
       
       )

}

export default Card