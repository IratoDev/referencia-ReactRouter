import NavBar from "../../components/navBar/NavBar";
import StylePage from "./styleErrorPage.module.css";

export function ErrorPage(){

return(
<>

<NavBar/>

<main>

<section id={StylePage.ConteinerErrorPage}>

<div className={StylePage.BoxText}>

<h1>Erro</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

</div>

</section>

</main>

</>

)

}