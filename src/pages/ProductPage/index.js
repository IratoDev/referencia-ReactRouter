import NavBar from "../../components/navBar/NavBar";
import { useParams } from "react-router-dom";
import StylePage from "./styleProdutopages.module.css"

export function ProductPage(){

const {id} = useParams();

return(

<>

<NavBar/>

<main>

<section id={StylePage.ConteinerProdutoPages}>

<div className={StylePage.BoxText}>

<h1>Produto {id}</h1>
<p>Produto {id}  Lorem Ipsum is simply dummy text of the printing and typesetting industry.</p>

</div>

</section>

</main>

</>

)

}