import { instagramGray,telegramGray,tiktokGray,whatsAppGray,youtubeGray } from "../assets/icons/Sosmed";
import { instgram,Yt, Wa,Tiktok,Tele } from "../assets/icons/Sosmed";
import { Benefit1, Benefit2, Benefit3, Benefit4, IconCheck } from "../assets/images";

export const navLinks = [
    {href: "#tentang", label:"Tentang"},
    {href: "#program", label:"Program"},
    {href: "#Alumni", label:"Alumni"},
    {href: "#Lokasi", label:"Lokasi"},
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