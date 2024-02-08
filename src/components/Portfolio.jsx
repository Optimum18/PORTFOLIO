import React from 'react'
import Button from "./elements/Button"
import image6 from "./../assets/image/Portfolio1.svg"
import image7 from "./../assets/image/Portfolio2.svg"
import image8 from "./../assets/image/Portfolio3.svg"

const Portfolio = () => {
    return (
        <div className='flex-col flex'>
        <div className='flex-row flex justify-between py-20'>
        <div>
            <h6 className='font-light'>PORTFOLIO</h6>
            <p className='text-3xl font-semibold'>Some Of Our Best Works</p>
        </div>
        <Button 
                style={'bg-black text-white'}
                title={'Learn More'}
            />
        </div>
        <div className=' md:grid-cols-3 grid  grid-cols-1 gap-6'>
        <div className='relative'>
            <img className='w-full h-full object-cover relative' src={image6} alt='Rectangle Image'/>
        <div className='absolute bottom-5 left-5'>
            <h6 className='text-gray-500'>UI Design</h6>
            <h1 className='text-white'>Greeny Website</h1>
        </div>    
        </div>
        <img className='w-full object-cover' src={image7} alt='Rectangle Image'/>
        <img className='w-full object-cover' src={image8} alt='Rectangle Image'/>
        </div>
        </div>
    )
}

export default Portfolio