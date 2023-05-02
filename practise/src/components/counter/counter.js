import { useState,useEffect, useRef } from "react"

export default function Counter (){
    let [counter , setCounter] = useState(0);

    let ref = useRef(null)
    // console.log(counter);
    // console.log("called");
    let inc = ()=>{
       setCounter(count => { 
        //  console.log(count)
         return count +  1;
        })
    // console.log(counter,setCounter);

        console.log(
        // ref.current += 1

        );
    }

    return(
        <>
            <h1>
                {counter}
            </h1>

            <div>
            
                <button onClick={()=>ref.current = setInterval(inc,1000)}>start</button>
                <button onClick={()=>clearInterval(ref.current)}>stop</button>

            </div>
        </>
    )
}