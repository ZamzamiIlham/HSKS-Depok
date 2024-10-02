import { sosmedHome } from "../constants";
import IconButton from "../components/IconButton";
import { BgImage } from "../assets/images";


const Home = () => {
  return (
    <div className="home__section w-full relative pt-14 px-5">
        <div className="max-container flex flex-col items-center gap-8">
            <div className="home__header flex flex-col gap-8 items-center">
                <p className="bg-secondary inline-block 
                            px-6 py-2 rounded-lg 
                            text-white font-semibold text-center">Terakreditasi A</p>
                <div className="home__title flex flex-col gap-4">
                    <h1 className="sm:text-6xl text-4xl font-bold text-center">Homeschooling Kak Seto</h1>
                    <p className="text-center">Nyaman, belajar dengan bebas, ramah anak, bersekolah dengan nyaman seperti rumah
                    mulai dari jenjang SD-SMA</p>
                </div>
    
                <div className="home__sosmed
                                flex flex-wrap items-center justify-center
                                gap-8
                                ">
                    {sosmedHome.map((btn)=>(
                         <IconButton text={btn.title} image={btn.image} imageHov={btn.imageHov} textColor={"text-gray"} hoverTextColor={"text-blue-500"} HoverBgColor={"border-blue-500"}>
                         </IconButton>
                    ))}
                </div>   
            </div>
            <img src={BgImage} alt="" className="home__bg" />
        </div>
    </div>
  )
}

export default Home