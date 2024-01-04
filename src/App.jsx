import {
  BrowserRouter as Router,
  Route,
  Routes,

} from "react-router-dom";
import Home from "./Pages/Home";
import Privacy from "./Pages/Privacy";

function App() {
  return (
   <>
   <Router>
    <Routes>
      <Route path="/" element={ <Home/>}/>
      <Route path="/privacy-policy" element={ <Privacy/>}/>

    </Routes>
   </Router>
   </>
  );
}

export default App;
