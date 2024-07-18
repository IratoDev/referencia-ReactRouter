
import { useState } from "react";
import { Link } from "react-router-dom";
import "./StyleNavBar.modules.css"

export default function NavBar(){


const[Button, setButton]=useState(false); // o erro ta aqui !!!

const StyleButton = {

padding: "1em",
borderRadius: "20px",
backgroundColor: (Button ? "#f79f1d":"#045cff" ),
color: "#000",

}

console.log(Button)

return(

<header>

<nav>

<Link style={StyleButton} to="/" >
<button  onClick={()=>{setButton(false); console.log("home ativado")}}>Home</button>
</Link>

<Link style={StyleButton} to="/Sobre">
<button  onClick={()=>{setButton(true); console.log("sobre ativado")}}>Sobre</button>
</Link>

</nav>

</header>

)

}