import { useState } from "react";




export default function Forming(){

    let [status,setStatus] = useState('typing');
    let [inp,setInp] = useState ('');

    return(
        <>
            <Child setInp={setInp} setStatus={setStatus} status = {status} inp={inp}></Child>      
        </>
    )
}


function Child({setInp,setStatus,status,inp}){
    
    if (status === 'success'){
        return(
            <p>thats right</p>
        )
    }


       return(
            <>
                
                <h1>quiz question</h1>
                <h2>capital of india</h2>
                <input type="text" onChange={(e)=>setInp(e.target.value)}disabled = {status === "success" }></input>
                
                <button  disabled = {status === "success" || status === 'empty' } onClick={(e)=>{
                    if(inp.toLowerCase() === 'delhi'){
                        setStatus('success')
                    }
                    else{
                        setStatus('error')
                    }
                }}>submit</button>

                {status === 'error' &&
                    <p>good guess but wrong ans</p>
                    }
            </>
        )
        
        
    }
