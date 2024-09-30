import { BannerSection, Benefit, ConnectWithUs, Contibution, Home, ListPorgram, Reason, SchoolPartners, TahapPendaftaran, Testimoni} from "./sections";
import { Nav } from "./components";

const App = () => {
  return(
    <main className="relative my-5">
      <Nav></Nav>
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
    </main>
  )
}
export default App;