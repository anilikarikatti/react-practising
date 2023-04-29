import { useState } from "react";


function GetColors(){
    let colors = ['red',"blue","green"];

    return colors[Math.floor(Math.random()*10) % colors.length]
}


export default function ColoredBoxes({color,btn}){
    let [color1,setColor] = useState(GetColors());

    console.log(color1);

    return (
    <button style={{backgroundColor:color1}} onClick={()=>btn(color1)}>color change</button>
    )
}