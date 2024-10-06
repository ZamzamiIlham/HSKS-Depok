import { KakSeto } from "../assets/images"
import { ButtonComponent } from "../components"

const CTASection = () => {
  return (
    <div className="bg-gradient-to-b from-blue-strong-500 to-blue-soft-500 bg-">
        <div className="max-container pt-8 px-2">
            <div className="flex flex-col md:flex-row md:justify-center items-center gap-8">
                <div className="flex flex-col items-center md:items-start gap-8">
                    <div className="flex flex-col gap-2">
                        <h1 className="text-2xl md:text-4xl text-white font-bold text-center md:text-left">Rasakan keceriaan belajar <br /> bersama kami</h1>
                        <p className="text-md md:text-lg text-white text-center md:text-left max-w-[650px]">Ayo daftarkan diri Ananda sekarang untuk memulai pembelajaran yang Cerdas, Kreatif, dan Ceria. Klik tombol di bawah ini untuk bergabung!</p>
                    </div>
                    <div className="flex flex-col lg:flex-row gap-4 items-center">
                    <ButtonComponent
                    Label={"Daftar Sekarang"}
                    BgColor="bg-white"
                    BgHover={"bg-slate-100"}
                    TextColor="text-black"/>
                    <ButtonComponent
                    Label={"Konsultasi Yuk"}
                    BgColor="none"
                    BgHover={"bg-slate-100"}
                    TextColor="text-white"
                    Border={"border-white"} />
                    </div>
                </div>
                <img src={KakSeto} alt="" className="w-[240.5px] md:w-[400px]" />
            </div>
        </div>
    </div>
  )
}

export default CTASection