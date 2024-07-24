import { useEffect , useState, useReducer} from "react";
import { Link,useLocation } from "react-router-dom";
import "./StyleNavBar.modules.css"

export default function NavBar(){

const[Produto, setProduto] = useState("");
const location = useLocation();
const reducer =(State, action)=>{

  switch(action.type){
  
  case "Home":
  return{ativo:"Home"}
  
  case "Sobre":
  return{ativo:"Sobre"}
  
  case "Produto":
  return{ativo:"Produto"}
  
  default:
  return{ativo:"Error"}
  
  
  }
  
}

const [State, dispatch] = useReducer(reducer,{ativo:"Home"});

useEffect(() => {

  if (location.pathname === "/") {
    dispatch({ type: "Home" });
  } else if (location.pathname === "/Sobre") {
    dispatch({ type: "Sobre" });
  } else if (location.pathname.startsWith("/produto")) {
    dispatch({ type: "Produto" });
  } else {
    dispatch({ type: "Error" });
  }

}, [location.pathname]);


const getBackgroundColor = (status) => {
  switch (status) {
    case "Home":
      return "#045cff";
    case "Sobre":
      return "#f79f1d";
    case "Produto":
      return "#003811"; // Exemplo de cor para Produto
    case "Error":
      return "#2b0500"; // Exemplo de cor para Error
    default:
      return "#FFF"; // Cor padrão se necessário
  }
};

const StyleButton = {

padding: "1em",
borderRadius: "20px",
backgroundColor: getBackgroundColor(State.ativo),
color: "#292828",

}

const handleBlur = (e) => {

e.preventDefault();
const ID = document.getElementById("CampoPesquisa").value;
const ProdutoID = `/produto/${ID}`;

setProduto(ProdutoID)

}

console.log(State)
console.log(Produto)

return(

<header>

<nav>

<Link style={StyleButton}
to="/">
Home
</Link>

<Link style={StyleButton}
to="/Sobre">
Sobre
</Link>

<input id="CampoPesquisa" onBlur={handleBlur} type="text" placeholder="Produtos..." />

<Link style={StyleButton} to={Produto} >Pesquisar</Link>

</nav>

</header>

)

}