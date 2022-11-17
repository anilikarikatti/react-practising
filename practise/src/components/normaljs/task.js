
import { useState } from "react";

export default function Form(){
    let [show,setShow] = useState(false);
    
    let [obj,setObj]= useState({
        Fname:'',
        Lname:''
    })

    function setForm(e){
        setObj({
            ...obj,
            [e.target.name] : e.target.value
        })
    }
    return (

        <>
            <div >
                <label>First Name</label>
                {show ? <h2>{obj.Fname}</h2>:<input  name = "Fname" onChange = {setForm}></input>}
            </div>
            <div>
                <label>Last Name</label>
                {show ? <h2>{obj.Lname}</h2>:<input  name = "Lname" onChange = {setForm}></input>}
            </div>

            <button onClick ={()=>setShow(!show)}>{show ? 'Edit Profile': 'save Profile'}</button>
        </>
    )
}