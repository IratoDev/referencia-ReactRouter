import NavBar from "../../components/navBar/NavBar";
import axios from "axios";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import StylePage from "./styleProdutopages.module.css";
import { Ferramentas } from "../../components/ModalFerramentas/ModalFerramentas";

export function ProductPage(){

const {id} = useParams();
const [Data, setData]=useState([]);
const [Produto , setProduto]=useState("")

useEffect(()=>{

axios.get('/Banco.json')
.then(response => response.data)
.then(Data => setData(Data))
.catch(error =>{

console.error("deu erro",error)

})
    
},[]);

useEffect(()=>{

const FilterProdut = Data.filter((item)=>{

if(item.title === id){

setProduto(item.id);
console.log(Data.id);

}

})



},[Data,id])

console.log("produto:",Produto);
//console.log("Data::",typeof(Data[0].title));
console.log("id:",typeof(id));

return(

<>

<NavBar/>

<main>

<section id={StylePage.ConteinerProdutoPages}>

<Ferramentas id={Produto}/>

</section>

</main>

</>

)

}