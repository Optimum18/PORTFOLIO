import Button from "./elements/Button"
import image from "./../assets/image/Hero.jpg"
const Hero = () => {
    return (
        <div className=" md:flex-row flex flex-col">
        <div className="md:w-1/2 w-full p-5">
          <h1 className="font-semibold md:text-6xl text-3xl"><span>ADARSH</span> 
          <br/><span>SHRIVASTAVA</span></h1>
          <p className="py-10">Award Wining product designer based in Georgia. We 
             create user-friendly interfaces for fast-growing startups.</p>
              <Button
               style={'bg-black text-white'}
                title={'Contact Us'}
            /> 
        </div>

        <div className="flex-1 md:order-last order-first">
           <img className="h-[25rem] w-full object-cover"
           src={image} alt="hero image"/>
        </div>  
        </div>


    )
}

export default Hero

