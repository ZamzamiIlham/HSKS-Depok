import { useState,useEffect } from "react";
import navLogo from "../assets/images/Depok.svg";
import { navLinks } from "../constants";
import { Home } from "../sections";

const Nav = () => {
  const [menuOpen,setmenuOpen] = useState(false);
  const [isScrolled,setScrolled] =useState(false);
  const [isSubmenu,setSubMenu] = useState(null);

  const openSubmenu = (index) => {
    if (isSubmenu === index){
      setSubMenu(null)
    } else {
      setSubMenu(index)
    }
  }

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
        <i class={`${!menuOpen ? 'bx bx-menu' : 'bx bx-left-indent'} text-3xl cursor-pointer md:hidden`}
        onClick={() => setmenuOpen(!menuOpen)}></i>

        {/*tampilan listmenu layar responsive*/}
        <div className={`fixed top-[54px] right-0 h-full w-full flex flex-col gap-9
                        px-4 py-6
                         bg-white shadow-md transform
                         ${menuOpen? "translate-x-0" : "translate-x-full"}
                         transtition-transform duration-300 ease-in-out md:hidden`}
                         >
          <ul className="flex flex-col gap-9 items-center">
            {navLinks.map((item,index)=> (
              <li key={index} onClick={(e)=> {
                e.stopPropagation()

                if(index !== 3){
                  closeMenu()
                }
              }} className="flex gap-4">
                <a href={item.href}>
                  {item.label}
                </a>
                  {item.submenu && (
                    <div className="cursor-pointer" onClick={(e) => {
                      e.stopPropagation();
                      openSubmenu(index)
                    }}>
                      -
                    </div>
                  )}

                  {isSubmenu === index && item.submenu &&(
                    <ul className="flex flex-col gap-2 bg-white shadow-sm rounded-lg">
                        {item.submenu.map((subItems,subIndex) => (
                          <li key={subIndex} onClick={()=> closeMenu()}>
                            <a href={subItems.href}>{subItems.label}</a>
                          </li>
                        ))}
                    </ul>
                  )}
              </li>
            ))}
          </ul>
          <button className="bg-primary text-white px-4 py-3 rounded-lg ">Hubungi Kami</button>
        </div>

        <div className="flex gap-16 items-center max-md:hidden ">
          <ul className="flex gap-9 justify-center">
            {navLinks.map((item,index) => (
              <li key={index} className={`relative flex gap-2 ${index === 3 ? 'w-[150px]' : ''}`}>
                <a href={item.href}>
                  {item.label}
                </a>
                  {item.submenu && (
                    <div className="cursor-pointer" onClick={()=> openSubmenu(index)}>-</div>
                  )}

                  {isSubmenu === index && item.submenu && (
                    <ul className="absolute flex flex-col justify-center gap-4 mt-8
                                 bg-white w-[150px] py-3 rounded-lg">
                        {item.submenu.map((subItems,subIndex) => (
                          <li key={subIndex} className="flex pl-4">
                            <a href={subItems.href}>{subItems.label}</a>
                          </li>
                        ))}
                    </ul>
                  )}
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