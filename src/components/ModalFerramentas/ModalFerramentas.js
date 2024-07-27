import axios from "axios";
import { useState, useEffect } from "react";
import StyleModal from "./styleModalFerramentas.module.css";


export function ModalFerramenta(){

return(

<div id={StyleModal.ConteinerModel}>
<Ferramentas id="1"/>
<Ferramentas id="2"/>

</div>

)

}

function Ferramentas({id}){

const [Data, setData]=useState([]);

useEffect(()=>{

axios.get('/Banco.json')
.then(response => response.data)
.then(Data => setData(Data))
.catch(error =>{

console.error("deu erro",error)

})

},[]);

const filteredData = Data.filter(item => item.id === id);

if (filteredData.length === 0) {
  
  return <div>Ferramenta não encontrada.{id}</div>;
}
const item = filteredData[0];


return(

<div className={StyleModal.FerramentaModal}>

      <h1>{item.title}</h1>
      <p>{item.description}</p>

      <h3>{item.advantages[0]}</h3>
      <ol>
        {item.advantages.slice(1).map((advantage, index) => (
          <li key={index}>{advantage}</li>
        ))}
      </ol>

      <h3>{item.disadvantages[0]}</h3>
      <ol>
        {item.disadvantages.slice(1).map((disadvantage, index) => (
          <li key={index}>{disadvantage}</li>
        ))}
      </ol>

      <h3>{item.use_cases[0]}</h3>
      {item.use_cases.slice(1).map((use_case, index) => (
        <p key={index}>{use_case}</p>
      ))}

      <h3>{item.syntax[0]}</h3>
      {item.syntax.slice(1).map((syntax, index) => (
        <p className={StyleModal.TextSyntax} key={index}>{syntax}</p>
      ))}
    </div>
  
)

}