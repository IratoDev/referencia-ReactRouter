
import NavBar from "../../components/navBar/NavBar"
import StylePages from "./StyleSobrePages.module.css"
import { ModalFerramenta } from "../../components/ModalFerramentas/ModalFerramentas"

export function SobrePage(){

return(


<main >

<NavBar/>

<section id={StylePages.ConteinerSobre}>

<ModalFerramenta/>

</section>

</main>

)

}