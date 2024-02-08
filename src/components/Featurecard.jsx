import React from 'react'
const Featurecard = ({heading,description,img}) => {
  return (
    <div>
        <img className ="w-full" src={img}/>
        <h2 className='py-3'>{heading}</h2>
        <p>{description}</p>
        </div>
  )
}

export default Featurecard