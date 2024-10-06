import { BannerSection, Benefit, Cabang, ConnectWithUs, Contibution, CTASection, Footer, Home, ListPorgram, Reason, SchoolPartners, TahapPendaftaran, Testimoni} from "./sections";
import { Nav } from "./components";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  return(
    <main className="relative my-5">
      
      <Nav/> 
      <Home/>
      <SchoolPartners/>
      <BannerSection/>
      <Benefit/>
      <Contibution/> 
      <Reason/>
      <Testimoni/>
      <ListPorgram/>
      <TahapPendaftaran/>
      <ConnectWithUs/>
      <Cabang/>
      <CTASection/>
      <Footer/>
    </main>
  )
}
export default App;