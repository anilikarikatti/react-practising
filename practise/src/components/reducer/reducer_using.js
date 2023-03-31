import { useEffect, useReducer, useState } from "react";

let next_id = 0

function taskReducer(tasks,action){
    if(action.type == "added"){
        let {id,name,type} = action
        return ([...tasks,{id,name,type}])

    }
}
export default function Todo(){
    // let [task,setTask] = useState([]);
    console.log("called");
    let [task,dispatch] = useReducer(taskReducer,[])
    let [text,setText] = useState("")

    function add(){
        dispatch({
            id:next_id,name:text,type:"added"
        })

        console.log(task);
        next_id++
        setText("")
    }
    // function add(){
    //     setTask([...task,{id:next_id,name:text,type:"added"}])
    // // console.log(text);
    // // setTask([...task,text])
    // setText("")

    //     next_id++
    // }

    function changeText(e){
        setText(e.target.value);
        // console.log(e);
    }

    useEffect(()=>{
        document.title = "ak page"
    },[])
    return(
        <>
            <input onChange={changeText}  value={text}></input>
            <button onClick={add}>add</button>
            <div>
            {task.map(elem=>
             <p key = {elem.id}>{elem.name}</p>
            )}
            </div>
        </>
    )
}