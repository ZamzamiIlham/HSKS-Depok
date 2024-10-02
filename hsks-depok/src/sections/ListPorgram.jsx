import { div, use } from "framer-motion/client"
import { BestProgram } from "../constants"
import { useEffect, useState } from "react"
import { arrowLeft, arrowRight } from "../assets/icons/Sosmed"
import { Particle, Particle2, Waves } from "../assets/images"

const ListPorgram = () => {
  const [currentIndex,setCurrentIndex] = useState(0)
  const [currnetWidth,setCurrentWidth] = useState(600)

  useEffect(() => {
    const handleWidth = () => {
        if(window.innerWidth >= 1220){
            setCurrentWidth(600)
        } else if(window.innerWidth >= 640){
            setCurrentWidth(600)
        } else{
            setCurrentWidth(380)
        }
    }

    handleWidth()

    window.addEventListener('resize',handleWidth)

    return() => {
        window.removeEventListener('resize',handleWidth)
    }

  },[])


  const handleNext = () => setCurrentIndex((currentIndex) => (
    currentIndex === BestProgram.length -1 ? 0 : currentIndex + 1 
  ))

  const handlePrev = () => setCurrentIndex((currentIndex) => (
    currentIndex === 0 ? BestProgram.length -1 : currentIndex -1
  ))
  return (
    <div className="bg-blue-soft rounded-tl-[8rem]"> 
        <img src={Particle2} alt="" className="absolute w-[648px] h-[354px] rounded-tl-[8rem]"/> 
        <div className="max-container py-12 px-2">
        <div className="300 flex flex-col items-center justify-center gap-8">
            <h1 className="text-3xl font-bold">Program Unggulan HS Kak Seto</h1>
            <div className="xl:w-[1220px] sm:w-[600px] w-[380px] overflow-hidden flex items-center justify-between xl:justify-center ">
            <div
            className=" flex xl:gap-8 transition-transform duration-500"
            style={{ transform: `translateX(-${currentIndex * currnetWidth}px)` }}
            >
                {BestProgram.map((data,index) => (
                    <div className="flex justify-center sm:w-[600px]">
                        <div className="flex flex-col items-center justify-between gap-4 " key={index}>
                        <h1 className="text-2xl font-semibold">{data.types}</h1>
                        {data.items.map((item, itemIndex) => (
                            <div key={itemIndex} className="flex items-center gap-4 bg-white p-5 w-[380px] sm:w-[566px] sm:h-[106px] rounded-xl">
                                <img src={item.icon} alt="" className="w-[24px] h-[24px]" />
                                <div className="flex flex-col gap-1">
                                    <h1 className="text-lg font-semibold">{item.title}</h1>
                                    <p className="text-sm">{item.description}</p>
                                </div>
                            </div>
                        ))}

                    </div>
                    </div>
                    
                ))}
            </div>
            </div>
            <div className='flex gap-10 px-2'>
                <button onClick={handlePrev}>
                    <img src={arrowLeft} alt="" className='h-[42px]' />
                </button>

                <button onClick={handleNext}>
                    <img src={arrowRight} alt="" className='h-[42px]' />
                </button>
            </div>
            
        </div>
    </div>
    <img src={Waves} alt="" />
    </div>
    
  )
}

export default ListPorgram