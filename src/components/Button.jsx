import { useState } from "react";

export default function ButtonComponent({BgColor="bg-blue-strong-500",BgHover,TextColor="text-white",TextHover,Border="border-none",BorderHover,Label}){
    const[hover,setHover] = useState(false)

    return(
        <button
        onMouseEnter={()=> setHover(true)}
        onMouseLeave={()=>setHover(false)}
        className={`flex justify-center items-center px-6 py-2 rounded-lg border-2 font-semibold min-w-[200px]
                        ${hover? `${BgHover} ${TextHover}` : `${BgColor} ${TextColor}` }
                        ${Border? Border : BorderHover}`}>{Label}</button>
    )
}