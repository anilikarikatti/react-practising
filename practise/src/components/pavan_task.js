import { useState } from "react"


export default function Pavan_Task(){
    let arr = ["a","b","c","d","e"]
    return(
        <>
            <Child prop={arr}></Child>
        </>
    )

}

function Child({prop}){
    let [set,Reset] = useState(prop)
    // let da = "";
        let fun = (e)=>{
            let index = e.target.value

            console.log(index);

            
            let a = set[index]
            if (index < set.length-1) {let b = set[index+1]
            let temp="" ;
            temp = b;
            b=a;
            a=temp;
            set.splice(index,2,a,b);
                // console.log(set);
           

           Reset([...set])
    // console.log(set);
            }
        }
    // console.log(prop);
    return(
        <>
            { set.map((elem,index)=>{
                return <li key={elem} onClick={fun} value={index}>{elem}</li>
            })}
        </>
    )
}