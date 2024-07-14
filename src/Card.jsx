/* eslint-disable react/prop-types */
// import React from 'react'
import { FaHeart } from "react-icons/fa"
import './cardStyle.css'

const Card = ({ plantType, plantName, price }) => {
  const addToCart = (plantType, plantName, price) => {
    
  }
  return (
    <div className='card' onClick={addToCart(plantType, plantName, price)}>
      <h3 className="margin-top-bottom">{plantType}</h3>
      <h2 className="margin-bottom-12">{plantName}</h2>
      <div className="direction-flex">
        <h2 className="margin-bottom-14">{price}</h2>
        <FaHeart className="font-class" />
      </div>
    </div>
  )
}
export default Card