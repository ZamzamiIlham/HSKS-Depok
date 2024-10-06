import { instagramGray, tiktokGray, whatsAppGray, youtubeGray } from "../assets/icons/Sosmed"
import { HsksLogo } from "../assets/images"
import { alamatCabang } from "../constants"

const Footer = () => {
  return (
    <div>
        <div className="max-container py-8 px-2">
            <div className="flex flex-col gap-6 justify-center">
                <div className="grid grid-rows-3 lg:grid-cols-3 lg:grid-rows-none gap-6 lg:items-stretch w-full">
                    <div className="flex flex-col gap-4">
                        <img src={HsksLogo} alt="" className="w-[120px]"/>
                        <p className="text-sm w-[300px]">Dengan belajar di homeschooling, Ayah Bunda dapat menyesuaikan pembelajaran dan menciptakan lingkungan pendidikan yang lebih sesuai dengan kebutuhan Ananda.</p>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold">HS Kak Seto</h1>
                            <ul className="text-sm flex flex-col gap-2 text-gray-500">
                                <li>Tentang</li>
                                <li>Hubungi Kami</li>
                                <li>Alumni</li>
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold">Program</h1>
                            <ul className="text-sm flex flex-col gap-2  text-gray-500">
                                <li>Komunitas</li>
                                <li>Komunitas Online</li>
                                <li>Distance Learning</li>
                                <li>Distance Learning Tunggal</li>
                            </ul>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 items-start">
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold">Bantuan</h1>
                            <ul className="text-sm flex flex-col gap-2 text-gray-500">
                                <li className="flex gap-2 items-center">
                                    <img src={whatsAppGray} className="w-[20px]" alt="" />
                                    08172727728228(Pusat)
                                </li>
                                <li className="flex gap-2 items-center">
                                    <img src={whatsAppGray} className="w-[20px]" alt="" />
                                    089831102221(Bekasi)
                                </li>
                                <li className="flex gap-2 items-center">
                                    <img src={whatsAppGray} className="w-[20px]" alt="" />
                                    08239101223811(Depok)
                                </li>
                                <li className="flex gap-2 items-center">
                                    <img src={whatsAppGray} className="w-[20px]" alt="" />
                                    08308765571992(Pekanbaru)
                                </li>
                               
                            </ul>
                        </div>
                        <div className="flex flex-col gap-2">
                            <h1 className="font-semibold">Sosial media</h1>
                            <div className="flex gap-4">
                                <img src={instagramGray} alt="" className="w-[20px]" />
                                <img src={youtubeGray} alt="" className="w-[20px]" />
                                <img src={tiktokGray} alt="" className="w-[20px]" />
                            </div>
                        </div>
                    </div>
                </div>
                <div className="w-full border-[1.5px] border-gray-300 rounded-lg"></div>
                <div className="flex flex-col lg:items-center gap-4">
                    <h1 className="font-semibold">Cabang Homeschooling</h1>
                        {alamatCabang.map((items,index) => (
                            <div key={index} className="flex gap-4 lg:w-[800px]">
                                <div className="flex">
                                    <h1 className="font-semibold w-[100px]">{items.city}</h1>
                                </div>
                                <p className="max-w-[400px] lg:max-w-full">{items.address}</p>
                            </div>
                        ))}
                </div>
                <div className="w-full border-[1.5px] border-gray-300 rounded-lg"></div>
                <div className="flex lg:justify-center">
                    <h1>Hak Cipta © Homeschooling Kak Seto. All Rights Reserved.</h1>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Footer