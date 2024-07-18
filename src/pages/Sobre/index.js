
import NavBar from "../../components/navBar/NavBar"
import StylePages from "./StyleSobrePages.module.css"
export function SobrePage(){

return(


<main >

<NavBar/>

<section id={StylePages.ConteinerSobre}>

<div className={StylePages.BoxText}>

<h1>sobre</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

</div>

</section>

</main>

)

}