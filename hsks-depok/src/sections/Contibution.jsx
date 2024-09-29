import { ContributionItem } from "../constants"

const Contibution = () => {
  return (
    <div className="max-container py-12">
        <div className="flex flex-col items-center gap-8">
            <h1 className="text-3xl font-bold text-center">Kontirbusi Kami dalam Pendidikan Indonesia</h1>
                <div className="flex justify-center flex-wrap gap-12 ">
                    {ContributionItem.map((data,index) => (
                        <div className="flex flex-col justify-center items-center gap-2" key={index}>
                            <h1 className="text-2xl font-semibold">{data.title}</h1>
                            <p className="text-sm">{data.description}</p>
                        </div>
                    ))}
                </div>
        </div>
    </div>
  )
}

export default Contibution