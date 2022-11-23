import { isDisabled } from "@testing-library/user-event/dist/utils";
import { useState } from "react"

export default function ComputerInput(){

    let [data,setData] = useState('')

    let [status,setStatus] = useState('typing'); 
    // console.log(data);

    if(status == 'sent'){
        return (
            <>
                <h1>thank you for your Feed Back</h1>
            </>
        )
    }
    async function sendFeedBack(){
        setStatus('sending');

        try{
            await comp_Inp();
            setStatus('sent');
        }
        catch(e){
            console.log(e);
            setStatus('typing');
        }
    

    }

    function comp_Inp(){
        return new Promise((resolve,rej)=>{
            setTimeout(()=>{
                resolve("thank you")
            },2000);
        })
    }
    return(
        <>
            <div>

                <textarea cols={50} rows={10} onChange={e=>setData(e.target.value)  } disabled = {status=='sending' || status == 'sent'}></textarea>

            </div>
            <button disabled = {status == 'sending'} onClick={sendFeedBack}>sumbit</button>

        </>
    )
}