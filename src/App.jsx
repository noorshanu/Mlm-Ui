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

function App() {
  return (
   <>
   <Router>
    <Routes>
    <Route path="/" element={ <Home/>}/>
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
