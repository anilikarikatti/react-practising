
import { useState } from "react";

function ChildState({arr1,change}){
    let arr = [10,20,30,40];

    if(arr1.length == 0){
        change(arr)
    }
    // change(arr)
    // console.log(arr);
    return(
        <>
            <p>hello child</p>
        </>
    )
}

function StateMaintain(){
    let [arr1,changeArray] =useState([]);

    function change(elem){
        // console.log(elem);
        changeArray(elem);

        console.log(arr1);
    }
    return(
        <>
            <ChildState arr1 = {arr1} change={change}/>
            <p>hello parent</p>
            {/* <ChildState name={name}  nameChanging={nameChanging}/> */}

        </>
    )
}

export default StateMaintain;