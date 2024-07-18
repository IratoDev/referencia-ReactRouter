
import { BrowserRouter,Routes,Route } from "react-router-dom";

//pages
import { HomePage } from "./pages/Home";
import { SobrePage } from "./pages/Sobre";

export default function AppRouter(){

return(

<BrowserRouter>


<Routes>

<Route path="/" element={<HomePage/>} />

<Route path="/sobre" element={<SobrePage/>}/>

</Routes>


</BrowserRouter>

)

}