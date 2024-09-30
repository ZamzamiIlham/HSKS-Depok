import { TahapPendaftaranItem } from "../constants"
import { Particle, Waves2 } from "../assets/images"

const TahapPendaftaran = () => {
  return (
    <div className="bg-gradient-to-b from-blue-soft-500 to-blue-strong-500 py-8">
        <div className="max-container bg-cover " style={{ backgroundImage: `url(${Particle})`}} >
            <div className="flex flex-col items-center gap-8">
                <div className="flex flex-col items-center">
                    <h1 className="text-3xl text-center font-bold text-white">Langkah Mudah Mendaftar ke <br />Homeschooling Kak Seto</h1>
                    <p className="text-yellow-50">Cukup dengan 4 langkah sederhana berikut</p>
                </div>
                <div className="flex items-center justify-center flex-wrap gap-12 ">
                    {TahapPendaftaranItem.map((data,index) => (
                        <div key={index} className={`flex items-center gap-4 bg-white rounded-[2rem] py-7 px-7 ${index === 3 ? 'sm:pb-0 sm:pt-0 sm:pr-0 border-8 border-blue-opacity' : ''}`}>
                            <div className="flex flex-col gap-4 rounded-3xl">
                            <div className="flex items-center gap-2">
                                <img src={data.icon} alt="" className="w-[32px]" />
                                <h1 className="text-xl font-bold">{data.title}</h1>
                            </div>
                            <p className="w-[360px] text-base">{data.desct}</p>
                        </div>
                         {data.image && (
                            <div className="overflow-hidden rounded-b-3xl">
                                <img src={data.image} alt="" className={`object-cover overflow-hidden ${index === 3 ? 'hidden sm:block' : ''}`} />
                            </div>
                        )}
                        </div>                
                    ))}
                </div>
            </div>
        </div>
    </div>
  )
}

export default TahapPendaftaran