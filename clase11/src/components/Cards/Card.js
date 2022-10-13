import React from 'react'
import img1 from '../../assets/img1.jpg'
import './Card.css'

function Card () {
    return (<div className='card'>
        <img src={img1} alt="imagen1" className='img'/>
        <div className='card-body'>
            <h4 className='card-tittle'>My tittle</h4>
            <p className='card-text'>lorem ipsum dolor sit amet lorem ipsum dolor sit amet lorem ipsum dolor
                 sit amet lorem ipsum dolor sit amet lorem ipsum dolor sit amet 
            </p>
        </div>
        
    </div> );
}
 
export default Card;