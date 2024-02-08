import image1 from "./../assets/image/1.svg"
import image2 from "./../assets/image/2.svg"
import image3 from "./../assets/image/3.svg"
import image4 from "./../assets/image/4.svg"
import image5 from "./../assets/image/5.svg"
const TrustedBy = () => {
    return (
        <div>
        <div className="text-center py-10">Trusted By</div>
            <div className="grid-cols-5 grid w-full gap-x-10">
                <img className="w-40" src={image1} alt="logo img"/>
                <img className="w-40" src={image2} alt="logo img"/>
                <img className="w-40" src={image3} alt="logo img"/>
                <img className="w-40" src={image4} alt="logo img"/>
                <img className="w-40" src={image5} alt="logo img"/>
            </div>
        </div>
    )
}

export default TrustedBy