import { useState } from "react";

import ColoredBoxes from "./child";
export default function Parent(){

    let [name,setName] = useState("");
    let [color,setColor] = useState("red");
    return(
        <>
            <input type="text" value = {name} onChange={e=>setName(e.target.value)}></input>

            <h1> hello <span style={{color:color}}>{name}</span> </h1>

            <ColoredBoxes  color={color} btn = {setColor}/>
        </>
    )
}