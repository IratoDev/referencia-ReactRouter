
import { BrowserRouter,Routes,Route } from "react-router-dom";

//pages
import { HomePage } from "./pages/Home";
import { SobrePage } from "./pages/Sobre";
import {ErrorPage} from "./pages/ErrorPage";

export default function AppRouter(){

return(

<BrowserRouter>


<Routes>

<Route path="/" element={<HomePage/>} />

<Route path="/sobre" element={<SobrePage/>}/>

<Route path="*" element={<ErrorPage/> }/>

</Routes>


</BrowserRouter>

)

}