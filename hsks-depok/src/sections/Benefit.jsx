import { BenefitItem } from "../constants"

const Benefit = () => {
  return (
    <div className="max-container flex flex-col gap-8 py-6">
        <div className="flex flex-col items-center gap-2">
                <p className="text-gray-400">Mengapa Homeschooling Kak Seto?</p>
                <h1 className="text-2xl font-bold text-center max-w-[400px]"> <span className="text-primary">Kami Percaya</span><br/>Setiap anak berhak memperoleh pendidikan yang layak bagi dirinya</h1>
        </div>
        <div className="flex flex-wrap items-center justify-center gap-9">
            {BenefitItem.map((image,index) => (
                <div key={index} className="flex flex-col items-center gap-4">
                    <img src={image.iamge} className=" max-h-[120px]"/>
                    <div className="flex flex-col gap-1">
                        <h1 className="text-xl font-semibold text-center">{image.title}</h1>
                        <p className="text-sm text-center max-w-[260px]">{image.description}</p>
                    </div>
                </div>
            ))}
        </div>
    </div>
  )
}

export default Benefit