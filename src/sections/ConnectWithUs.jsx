import React from 'react'
import { Maps, Waves2 } from '../assets/images'
import IconButton from '../components/IconButton'
import { sosmedHome } from '../constants'
import { Wa } from '../assets/icons/Sosmed'


const ConnectWithUs = () => {
  return (
    <div className='bg-cream'>
        <img src={Waves2} alt="" className="object-cover" />
        <div className="max-container py-8 px-2">
          <div className="flex flex-col items-center justify-center md:flex-row gap-12">
            <div className="flex flex-col items-center md:items-start gap-8">
                <div className="flex flex-col items-center gap-2 md:items-start">
                  <h1 className='text-3xl font-bold'>Homeschooling Kak Seto Depok</h1>
                  <p className='text-black text-center md:text-left'>Jl. Putri Tunggal No.53, Harjamukti, Kec. Cimanggis, Kota Depok, Jawa Barat 16454</p>
                </div>
                <div className="flex flex-wrap items-center justify-center md:justify-start
                                gap-8">
                    {sosmedHome.map((btn)=>(
                         <IconButton text={btn.title} image={btn.image} imageHov={btn.imageHov} bgColor={"bg-white"} HoverBgColor={"border-blue-500"}>
                         </IconButton>
                    ))}
                </div> 
                <div className="flex flex-col gap-2">
                    <div className="flex gap-4">
                        <img src={Wa} alt="" className='w-[20px] h-[20px]' />
                        <p>097776701567</p>
                    </div>
                    <div className="flex gap-4">
                        <img src={Wa} alt="" className='w-[20px] h-[20px]' />
                        <p>halo.hsksdepok@sekolahkakseto.id</p>
                    </div>
                </div>  
            </div>
            <div className='object-cover max-w-[400px] sm:w-[600px] md:max-w-[700px]'>
              <img src={Maps} alt="" />
            </div>
          </div>
        </div>
    </div>
  )
}

export default ConnectWithUs