import { Book } from "../assets/images"
import { reosenItem } from "../constants"


const Reason = () => {
  return (
    <div className="max-container py-8 px-5">
        <div className="grid items-center grid-cols-1 md:grid-cols-2 gap-8">
            <div className="flex flex-col items-center col-span-1 ">
                <h1 className="text-3xl font-bold ">Mengapa <br /> Homeschooling?</h1>
                <img className="max-w-[276px]" src={Book} alt="book" />
            </div>
            <div className="flex flex-col gap-8">
                {reosenItem.map((data,index) => (
                    <div className="flex items-center gap-4" key={index}>
                        <img className="max-w-[40px] md:max-w-[68px]" src={data.icon} alt="" />
                        <div className="flex flex-col">
                            <h1 className="text-base sm:text-xl font-semibold">{data.title}</h1>
                            <p className="text-xs sm:text-sm">{data.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Reason