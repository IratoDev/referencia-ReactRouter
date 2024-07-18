import NavBar from "../../components/navBar/NavBar";
import StylePages from "./StyleHomePages.module.css";

export function HomePage(){

return(

<>

<NavBar/>

<main>

<section id={StylePages.ConteinerHome}>

<div className={StylePages.BoxText}>

<h1>Home</h1>
<p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>

</div>

</section>

</main>

</>

)

}