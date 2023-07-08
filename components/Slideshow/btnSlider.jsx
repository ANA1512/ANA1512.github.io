import React  from  'react'
import leftArrow from '../../assets/chevron-left.png'
import rightArrow from '../../assets/chevron-right.png'



export default function btnSlider({direction,moveSlide}) {

  return (
    <div>
        <button
            onClick={moveSlide}
            className={direction ==="next" ? "btn-slide next": "btn-slide prev"}>
            <img src={direction==="next" ? rightArrow :leftArrow} alt="fleche directionnel" className="arrow"/>
        </button>
    </div>
 
  )
}
