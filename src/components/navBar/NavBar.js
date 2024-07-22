
import { useState } from "react";
import { useEffect } from "react";
import { Link,useLocation } from "react-router-dom";
import "./StyleNavBar.modules.css"

export default function NavBar(){


const[Button, setButton]=useState(false);
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

console.log(Button)

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

</nav>

</header>

)

}