import FilesData from '../../Data.json'
import styled from 'styled-components'
import Card from '../../components/Card'
import './home.css'
import Footer from '../../components/Footer'
import {Link} from 'react-router-dom'

const GalleryContainer = styled.div`
 
    margin-top: 20px;
    background-color: blue;
    font-family: 'Montserrat';
    margin-left: 10px;
    margin-right: 10px;
        
`
function Home(){
  return(  
           <div className="ici"> 
            <div className= "herosection">
             <p className='subtitle-hero'>Chez vous, partout et ailleurs</p>
             </div>
            <GalleryContainer  className="gallery">
              <div className="cardimg">
                {FilesData.map((files) =>(
                 
                    <Link  key={files.id} to= {`/logement/${files.id}`}>
                          <Card  
                           cover={files.cover}
                           title={files.title}
                           /> 
                    </Link>
 
              ))} 
                    
          </div>     
      </GalleryContainer>
      <Footer/>
      </div>  
  )
}

export default Home 