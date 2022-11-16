import { useState } from "react"


export default function Parents(){
    let [arr,setArray] = useState({
        name:'',
        password:''
    });

    function changeArray(e){
        setArray({...arr,[e.target.name]:e.target.value})
    }

    function btn(e){
        e.preventDefault();
        console.log(arr);
    }
    return(
        <>
            <form>
                <div>
                    <label>enter name</label>
                    <input onChange={changeArray} name="name"></input>
                </div>
                <div>
                    <label>enter password</label>
                    <input onChange={changeArray} name="password"></input>
                </div>
                <div>
                    <button onClick={btn}>submit</button>
                </div>
            </form>
        </>
    )
}