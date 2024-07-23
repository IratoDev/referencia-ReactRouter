import { useEffect , useState} from "react";
import { Link,useLocation } from "react-router-dom";
import "./StyleNavBar.modules.css"

export default function NavBar(){


const[Button, setButton]=useState(false);
const[Produto, setProduto] = useState();
const location = useLocation();


useEffect(() => {
    if (location.pathname === "/Sobre") {
      setButton(true);
    } else {
      setButton(false);
    }
}, [location.pathname]);



const StyleButton = {

padding: "1em",
borderRadius: "20px",
backgroundColor: (Button ? "#f79f1d":"#045cff" ),
color: "#000",

}

const handleBlur = (e) => {

e.preventDefault();
const ID = document.getElementById("CampoPesquisa").value;
const ProdutoID = `/produto/${ID}`;

setProduto(ProdutoID)

}

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