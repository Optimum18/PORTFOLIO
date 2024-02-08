import Button from "./elements/Button"
import imagefooter1 from "./../assets/image/footer1.svg"
import imagefooter2 from "./../assets/image/footer2.svg"
const Footer = () => {
    return (
    <div className="bg-black flex-col flex h-auto pl-24 pr-24">
            <div className='flex-row flex justify-between py-20 items-center'>
        <div>
            <h6 className='font-light text-gray-400'>Latest Blog</h6>
            <p className='text-3xl font-semibold text-gray-50'>Check Some Of Latest <br/>
            News & Articles </p>
        </div>
        <Button style={'bg-white text-black h-fit'} 
                title={'Learn More'}
            />
        </div>
        <div className="flex-row flex gap-10">
            <div className="flex-col flex text-white">
              <img className="w-full" src={imagefooter1} alt="footer_image"/>
                <h6 className="pl-24 text-gray-500 -mt-20">UI Design | 22 May 2023</h6>
                  <h1 className="pl-24 font-semibold text-3xl">What is UI Design in Front <br/> End Design ?</h1>
                      <p  className="pl-24 py-5">But I must explain to you how all this mistaken
                         idea of <br/> denouncing pleasure and praising
                         pain was born and I will <br/> give you a complete account of the system</p>
                    <h2 className="pl-24">READ MORE</h2>
            </div>

            <div className="flex-col flex text-white">
              <img className="w-full" src={imagefooter2} alt="footer_image"/>
                <h6 className="pl-24 text-gray-500 -mt-20">UI Design | 22 May 2023</h6>
                  <h1 className="pl-24 font-semibold text-3xl">What is UI Design in Front <br/> End Design ?</h1>
                    <p  className="pl-24 py-5">But I must explain to you how all this mistaken 
                      idea of <br/> denouncing pleasure and praising
                      pain was born and I will <br/> give you a complete account of the system</p>
                <h2 className="pl-24">READ MORE</h2>
            </div>
        </div>
    </div>
    )
}

export default Footer