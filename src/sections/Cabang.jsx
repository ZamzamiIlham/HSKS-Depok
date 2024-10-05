import { CabangHsKsItem } from "../constants"

const Cabang = () => {
  return (
    <div>
        <div className="max-container py-8 px-2">
            <div className="flex flex-col gap-6 items-center">
                    <h1 className="text-2xl font-bold text-center">Temukan Homeschooling Kak Seto<br />Di Sekitarmu</h1>
                    <div className="flex flex-col sm:flex-row gap-8 justify-center">
                        {CabangHsKsItem.map((item,index) => (
                            <div className="flex flex-col gap-8 items-center cursor-pointer" key={index}>
                                <img src={item.image} alt="" className="w-[300px] sm:w-auto" />
                                <h1 className="text-lg font-semibold">{item.title}</h1>
                            </div>
                        ))}
                    </div>
            </div>
        </div>
    </div>
  )
}

export default Cabang