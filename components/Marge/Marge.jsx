import React from 'react'
import "../../components/Marge/marge.css"


function Marge({children}) {
  return (
    <div>

        <div className='marge'>
             {children}

        </div>
      
    </div>
  )
}

export default Marge
