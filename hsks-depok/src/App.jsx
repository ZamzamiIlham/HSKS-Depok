import { BannerSection, Benefit, Contibution, Home, Reason, SchoolPartners} from "./sections";
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
    </main>
  )
}
export default App;