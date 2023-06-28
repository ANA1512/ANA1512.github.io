
import styled from 'styled-components'
import '../../components/Card/card.css'




const CardWrapper = styled.div ` 
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 340px;
  background: linear-gradient(180deg,rgba(0,255,0,0) 70% , rgba(255, 96, 96, 1));
  border-radius:10px ;
  margin-bottom : 10px;
`


const CardImage = styled.img`
  width:100%;
  height: 280px;
  border-radius:10px 10px 0px 0px;
  
`

const CardTitle = styled.p`
  font-weight: 500;
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