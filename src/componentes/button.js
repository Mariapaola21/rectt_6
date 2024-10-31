import React, {useState} from "react";

const Botones= () => {
    const [button, setButton] = useState("haz click aqui")

    const buttonClick = () =>{
        setButton("Gracias por clickearme")
    };
    return(
      <div>
        <button onClick={buttonClick}>{button}</button>
      </div>
    );
  }
export default Botones;