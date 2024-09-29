import { div } from "framer-motion/client"
import { SliderCard } from "../components"
import { TestimoniItem } from "../constants"

const Testimoni = () => {

    return(
        <div className="py-12 px-2">
            <div className="flex flex-col gap-8 items-center">
                <h1 className="text-3xl font-bold">Beragam Cerita Sekolah Kami</h1>
                <SliderCard cards={TestimoniItem} />
            </div>
        </div> 
    )
}

export default Testimoni