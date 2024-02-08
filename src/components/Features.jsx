import React from 'react'
import card1 from "./../assets/image/card1.svg"
import card2 from "./../assets/image/card2.svg"
import card3 from "./../assets/image/card3.svg"
import card4 from "./../assets/image/card4.svg"
import Button from "./elements/Button"
import Featurecard from './Featurecard'
const card = [
    {   image:card1,
        title: "UX EXPERIENCE",
        link: '',
        content: "I design products that are more than pretty. I make them  usable."
    },
    {   image:card2,
        title: "UI DESIGN",
        link: '',
        content: "I design products that are more than pretty. I make them  usable."
    },
    {   image:card3,
        title: "Product Analysis",
        link: '',
        content: "I design products that are more than pretty. I make them  usable."
    },
    {   image:card4,
        title: "Product Design",
        link: '',
        content: "I design products that are more than pretty. I make them  usable."
    }
]


const Features = () => {
    return (
        <div  className='flex-row flex py-20'>
            <div className='flex-col flex w-1/2'>
                <h6 className='text-gray-400 py-5 text-xl tracking-wider font-light'>FEATURES</h6>
                <h1 className='text-5xl font-bold'>Giving Your Business
                    Some Great Ideas</h1>
                <p className='text-gray-500 text-lg py-10'>Every designer needs the right tools to do the perfect job.<br/>
                 Thankfully, we can do that. 
                I design products that are more <br/>than pretty. I make them shippable and usable.</p>
                <Button className="w-fit"
                title={'Contact us'}
            />
            </div>
            
            <div className='grid gap-5 grid-cols-2 flex-1'>
            {
                        card.map(item => (
                            <Featurecard  heading={item.title}
                             description={item.content} 
                             img={item.image}/>
                        ))
                    }
            </div>
        </div>
    )
}

export default Features
