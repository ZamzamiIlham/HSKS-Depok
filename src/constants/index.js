import { image, title } from "framer-motion/client";
import { instagramGray,telegramGray,tiktokGray,whatsAppGray,youtubeGray } from "../assets/icons/Sosmed";
import { instgram,Yt, Wa,Tiktok,Tele } from "../assets/icons/Sosmed";
import { Asteristik, Benefit1, Benefit2, Benefit3, Benefit4, cabangImage, IconCheck, Kids, Num1, Num2, Num3, Num4, Testi1, Testi2 } from "../assets/images";

export const navLinks = [
    {href: "#tentang", label:"Tentang"},
    {href: "#program", label:"Program"},
    {href: "#Alumni", label:"Alumni"},
    {href: "/Lokasi", label:"Lokasi"},
]

export const sosmedHome = [
    {
        image: instgram,
        imageHov: instagramGray,
        title: '@HSKS_Depok',
    },
    {
        image: Tele,
        imageHov: telegramGray,
        title: 'hsksDepok',
    },
    {
        image: Tiktok,
        imageHov: tiktokGray,
        title: '@HSKS_Depok',
    },
    {
        image:Wa,
        imageHov: whatsAppGray,
        title: '082310008542',
    },
    {
        image:Yt,
        imageHov: youtubeGray,
        title: '@HSKS_Depok',
    },
]

export const BenefitItem =[
    {
        iamge : Benefit1,
        title : 'Terakreditasi A',
        description : 'Kami menjamin Ananda mendapat kualitas pendidikan yang unggul dan standar pendidikan yang tinggi.'
    },
    {
        iamge : Benefit2,
        title : 'Ramah Anak',
        description : 'Senantiasa menanamkan budaya positif dalam pergaulan khususnya bersikap dan bertutur kata baik.'
    },
    {
        iamge : Benefit3,
        title : 'Kemudahan Belajar',
        description : 'Tatap muka, Online, ataupun Hybrid semuanya dapat disesuaikan dengan kebutuhan Ananda.'
    },
    {
        iamge : Benefit4,
        title : 'Terakreditasi A',
        description : 'Ananda  turut aktif bereksplorasi, berdiskusi, dan tidak hanya pasif mendengarkan pelajaran.'
    },
]

export const ContributionItem = [
    {
        title:'3000+',
        description:'Siswa Lulus(SD,SMP, dan SMA)'
    },
    {
        title:'500+',
        description:'Lanjut ke PTN & Luar Negeri'
    },
    {
        title:'300+',
        description:'Alumni Sukses dalam Karir'
    },
    {
        title:'170+',
        description:'Penelitian Tindakan Kelas(PTK)'
    }
]

export const reosenItem = [
    {
        icon: IconCheck,
        title: 'Terakreditasi A',
        description: 'Kami menjamin Ananda mendapat kualitas pendidikan yang unggul dengan standar pendidikan yang tinggi.'
    },
    {
        icon: IconCheck,
        title: 'Solusi Belajar Fleksibel',
        description: 'Tatap muka, Online, ataupun Hybrid dengan tetap berkualitas menyesuaikan kebutuhan Ananda'
    },
    {
        icon: IconCheck,
        title: 'Ramah Anak',
        description: 'Lingkungan yang senantiasa memberikan rasa aman dan nyaman dengan penuh keramahan dari setiap sivitas'
    },
    {
        icon: IconCheck,
        title: 'Mengembangkan Potensi Anak',
        description: 'Menggunakan pendekatan individual yang mendorong pengembangan minat dan bakat setiap peserta didik'
    }
]

export const TestimoniItem =[
    {
        image   : Testi1,
        name    : 'Bunda Amalia',
        status  : 'Ibunda Siswa',
        description : 'Sebelumnya Fathan sangat pemalu, Kurang bersosial dan banyak distraksi belajar sehingga tidak nyaman. Namun sejak bersekolah di HS Kak Seto Depok Fathan sudah bisa lebih berkonsentrasi, lebih ceria dan sosialisasinya lebih baik dari pada sebelumnya'
    },
    {
        image   : Testi2,
        name    : 'Kak Seto Mulyadi',
        status  : 'Pembina Sekolah Kak Seto',
        description : 'Dari banyaknya Cabang Homeschooling Kak Seto, di Depok ini merupakan bentuk nyata dari ‘Homeschooling’ sebenarnya, suasana belajar sangat asri dan nyaman seperti di rumah'
    },
    {
        image   : Testi2,
        name    : 'Kak Seto Mulyadi3',
        status  : 'Pembina Sekolah Kak Seto',
        description : 'Dari banyaknya Cabang Homeschooling Kak Seto, di Depok ini merupakan bentuk nyata dari ‘Homeschooling’ sebenarnya, suasana belajar sangat asri dan nyaman seperti di rumah'
    },
    {
        image   : Testi1,
        name    : 'Bunda Amalia4',
        status  : 'Ibunda Siswa',
        description : 'Sebelumnya Fathan sangat pemalu, Kurang bersosial dan banyak distraksi belajar sehingga tidak nyaman. Namun sejak bersekolah di HS Kak Seto Depok Fathan sudah bisa lebih berkonsentrasi, lebih ceria dan sosialisasinya lebih baik dari pada sebelumnya'
    }
]

export const BestProgram = [
    {
        types   : 'Komunitas',
        items    : [
            {
                icon          : Asteristik,
                title         : 'Kelas Ekslusif',
                description   : 'Kapasitas siswa di kelas minimal 1 siswa dan maksimal 12 siswa' 
            },
            {
                icon          : Asteristik,
                title         : 'Tutor Berkualitas',
                description   : 'Tutor terjamin berkualitas dan interaktif dengan para siswa' 
            },
            {
                icon          : Asteristik,
                title         : 'Media pembelajaran berbasis teknologi',
                description   : 'Sistem pembelajaran Multi Channel Learning menggunakan Learning Management System sebagai media pembelajaran' 
            },
            {
                icon          : Asteristik,
                title         : 'Konten Pembelajaran Digital',
                description   : 'Konten pembelajaran digital yang beraneka ragam dan menarik' 
            },
            {
                icon          : Asteristik,
                title         : 'Waktu belajar 3x per minggu',
                description   : 'Pembelajaran secara langsung bersama tutor 3x per minggu' 
            }
        ]
    },
    {
        types   : 'Komunitas Online',
        items    : [
            {                
                icon        : Asteristik,
                title       : 'Belajar secara fleksibel',
                description : 'Pembelajaran dapat dilakukan secara online dari rumah atau dimana saja'                
            },
            {                
                icon        : Asteristik,
                title       : 'Tutor berkualitas',
                description : 'Tutor terjamin berkualitas dan interaktif dengan para siswa'                
            },
            {                
                icon        : Asteristik,
                title       : 'Media pembelajaran berbasis teknologi',
                description : 'Sistem pembelajaran Multi Channel Learning menggunakan Learning Management System sebagai media pembelajaran'                
            },
            {                
                icon        : Asteristik,
                title       : 'Konten Pembelajaran Digital',
                description : 'Konten pembelajaran digital yang beraneka ragam dan menarik'                
            },
            {                
                icon        : Asteristik,
                title       : 'Waktu belajar 3x per minggu',
                description : 'Pembelajaran secara langsung bersama tutor 3x per minggu'                
            }
        ]
    },
   
  
]

export const TahapPendaftaranItem = [
    {
        icon    : Num1,
        title   : 'Konsultasi',
        desct   : 'Ayah dan Bunda dapat melakukan konsultasi terlebih dahulu dengan kami mengenai program yang sesuai untuk Ananda.'
    },
    {
        icon    : Num2,
        title   : 'Pendaftaran',
        desct   : 'Setelah menemukan program yang sesuai, Ayah dan Bunda dapat mendaftarkan Ananda pada program tersebut.'
    },
    {
        icon    : Num3,
        title   : 'Proses Administrasi',
        desct   : 'Screening awal merupakan proses seleksi berkas utama yang harus dipenuhi sebelum proses registrasi.'
    },
    {
        icon    : Num4,
        title   : 'Siap untuk Bersekolah',
        desct   : 'Ananda sudah siap untuk menjelajahi dunia yang baru dengan Cerdas, Kreatif, dan Ceria.',
        image   : Kids
    },
]


export const CabangHsKsItem = [
    {
        image : cabangImage[0],
        title : 'Pusat'
    }, 
    {
        image : cabangImage[1],
        title : 'Bekasi'
    }, 
    {
        image : cabangImage[2],
        title : 'Pekanbaru'
    }, 
]