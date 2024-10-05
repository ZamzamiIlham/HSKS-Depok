import { img } from "framer-motion/client"
import { Banner } from "../assets/images"

const BannerSection = () => {
  return (
    <div className="max-container py-12">
        <div className="flex justify-center items-center gap-8 flex-col lg:flex-row sm:items-center">
            {Banner.map((image, index)=>(               
                <img className="max-w-[300px] sm:max-w-[500px] "
                key={index}
                src={image}/>
            ))}
        </div>
    </div>
  )
}

export default BannerSection