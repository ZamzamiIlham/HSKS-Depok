import { useState,useEffect } from "react";
import navLogo from "../assets/images/Depok.svg";
import { navLinks } from "../constants";
import { Home } from "../sections";

const Nav = () => {
  const [menuOpen,setmenuOpen] = useState(false);
  const [isScrolled,setScrolled] =useState(false);
  const closeMenu = () => {
    setmenuOpen(false);
  }

  useEffect(()=> {
    const scrollNav = () => {
      if(window.scrollY > 100){
        setScrolled(true)
      } else {
        setScrolled(false)
      }
    };

    window.addEventListener("scroll",scrollNav);

    return () => {
      window.removeEventListener("scroll",scrollNav)
    }
  })
  

  return (
   <header className={`w-full px-5 py-2 fixed top-0 left-0 z-10  bg-white
                       ${isScrolled? "shadow-lg" : ""} transition-shadow duration-300`}>
      <div className="max-container flex justify-between items-center">
        <a href="/">
          <img 
          src={navLogo}
          href={Home}
          alt="logoDepok"
          width={100}/>
        </a>

        {/* Icon Menu untuk layar responsive */}
        <i class='bx bx-menu text-3xl cursor-pointer md:hidden'
        onClick={() => setmenuOpen(!menuOpen)}></i>

        {/*tampilan listmenu layar responsive*/}
        <div className={`fixed top-0 right-0 h-full flex flex-col gap-9
                        px-4 py-6
                         bg-white shadow-md transform
                         ${menuOpen? "translate-x-0" : "translate-x-full"}
                         transtition-transform duration-300 ease-in-out md:hidden`}
                         style={{width: "300px"}}>
          <ul className="flex flex-col gap-9 items-end">
            {navLinks.map((item)=> (
              <li key={item.label}>
                <a href={item.href} onClick={closeMenu}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white px-4 py-3 rounded-lg ">Hubungi Kami</button>
        </div>

        <div className="flex gap-16 items-center max-md:hidden ">
          <ul className="flex gap-9 ">
            {navLinks.map((item) => (
              <li key={item.label}>
                <a href={item.href}>
                  {item.label}
                </a>
              </li>
            ))}
          </ul>

          <button className="bg-primary text-white px-4 py-3 rounded-lg ">Hubungi Kami</button>
        </div>
      </div>
   </header>
  )
}

export default Nav;