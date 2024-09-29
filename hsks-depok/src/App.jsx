import { BannerSection, Benefit, Contibution, Home, ListPorgram, Reason, SchoolPartners, Testimoni} from "./sections";
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
    </main>
  )
}
export default App;