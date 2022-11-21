import React from "react";
import { useState } from "react";

const FormSubmit = ()=>{

    let [fname,setFname] = useState("");

    let [lname,setLname]=useState("");

    function changeName(e){
        setFname(e.target.value)
    }

    function changeLName(e){
        setLname(e.target.value)
    }

    
    return(
        <>
            <form method = "get">

                <div className="main">
                    <input type="text" placeholder="enter your name" name="fname" onChange={changeName}/>
                    <input type="text" placeholder="enter your last name" name="lname" onChange={changeLName}></input>
                </div>
                <button type="submit" >submit</button>
            </form>
        </>
    )

}

export default FormSubmit;
