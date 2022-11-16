import { useState } from "react"


export default function  Parents(){
    let [text,setText] = useState('');

    let [state,setState] = useState('typing');

    let [err,setError] = useState('');
    function submitForm(){
        return  new Promise((res,rej)=>{
            setTimeout(()=>{if(text.toLowerCase() === 'delhi'){
                res();
            }
        else{
            rej(new Error("the good guess but wrong ans"));
        }
        },1500)
        })

        
    } 
    
    if(state === 'success'){
        return("thats right answer")
    }
    async function handleForm(e){
        e.preventDefault();
        setState('submitting');

        try{
            let a =await submitForm();
            console.log(a);
            setState('success');
        }
        catch(e){
            setState('typing');
            setError(e);
            
        }

        
    }

    return(
        <>
            <form onSubmit={handleForm}>

                <h1>the capital of india</h1>
                <div>
                    <input type="text" onChange={(e)=>setText(e.target.value)} disabled={state === 'submitting'}></input>
                </div>
                <div>
                    <button disabled={text.length == 0 || state === 'submitting'}>submit</button>
                </div>

                <p >{err.message}</p>
            </form>
        </>
    )
}


