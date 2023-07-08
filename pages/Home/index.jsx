import FilesData from '../../Data.json'
import Card from '../../components/Card'
import './home.css'
import {Link} from 'react-router-dom'
import '../../components/Banner/Banner.css'
import Marge  from '../../components/Marge/Marge'
import Footer from '../../components/Footer/index'
import Navbar from '../../components/Navbar/index'

function Home(){
  return(  
          <div> 
           <Marge>
            <Navbar/>
            <div className= "banner">
              <p className='subtitle-hero'>Chez vous, partout et ailleurs</p>
            </div>
            <div className="gallery">
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
            </div>
            </Marge>
            <Footer/>
          </div>  
  )
}

export default Home 