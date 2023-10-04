import Home from "./Home";
import Services from "./Services";
import { BrowserRouter as Router ,Routes,Route} from "react-router-dom";s
const Webpage =()=>
{
    return(
        <>
         <Router>
            <Routes>
                <Route exact path="/" element={<Home/>}></Route>
                <Route exact path="/services" element={<Services/>}></Route>
            </Routes>
         </Router>
        </>
    )
}
export default Webpage;