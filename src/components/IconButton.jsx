import { useState } from "react"
import { useRef } from "react"

export default function IconButton({ children,image, imageHov, text, textColor, hoverTextColor, bgColor, HoverBgColor, ...props}){
    const[hovered,setHovered] = useState(false)
    const ref = useRef(null)
    return(
        <button 
        onMouseEnter = {() => setHovered(true)}
        onMouseLeave = {() => setHovered(false)}
        className=
            {   `btn__Sosmed flex flex-row
                justify-center gap-2 border-2 px-6 py-2
                rounded-full ${hovered? HoverBgColor: bgColor}` }
        {...props}>

        <img src={hovered? image :imageHov}
             alt="social media"
             className="transition-colors duration-500 ease-linear"
             style={{width:"24px"}} />

        {children}
            <div
            style={{width: hovered ? ref.current?.offsetWidth || 0 : 0}}
            className="overflow-x-hidden transition-all duration-700 ease-out">
                <span ref={ref}
                className={`${hovered? hoverTextColor : textColor}`}>{text}</span>
            </div>     
        </button>
    )
}