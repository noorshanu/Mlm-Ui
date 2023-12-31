import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from "./Pages/Home";
import Privacy from "./Pages/Privacy";
import Terms from './Pages/Terms'
import Returns from "./Pages/Returns";
import Galary from "./Pages/Galary";
import About from "./Pages/About";
import Products from "./Pages/Products";
import Legal from "./Pages/Legal";
import ContactUs from "./Pages/ContactUs";

function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route path="/" element={ <Home/>}/>
    <Route path="/about" element={ <About/>}/>
    <Route path="/legal" element={ <Legal/>}/>
    <Route path="/contact-us" element={ <ContactUs/>}/>


    <Route path="/products" element={ <Products/>}/>




    <Route path="/gallery" element={ <Galary/>}/>

      <Route path="/privacy-policy" element={ <Privacy/>}/>
      <Route path="/terms-conditions" element={ <Terms/>}/>
      <Route path="/return-policy" element={ <Returns/>}/>

    </Routes>
   </Router>
   </>
  );
}

export default App;
