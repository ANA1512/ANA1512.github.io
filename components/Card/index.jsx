import styled from 'styled-components'
import '../../components/Card/card.css'


const CardWrapper = styled.div ` 
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 340px;
  border-radius:10px ;
  margin-bottom : 10px;
`



const CardImage = styled.img`
  width:100%;
  height:100%;
  border-radius:10px;
  object-fit: cover;
`

const CardTitle = styled.p`

font-size: 18px;
color : #FFFFFF;
margin-top: 290px;
overflow: hidden;

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