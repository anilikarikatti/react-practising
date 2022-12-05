import { useReducer, useState } from "react";


const initialTasks = [
    {id: 0, text: 'Visit Kafka Museum', done: true,edit_mode:false},
    {id: 1, text: 'Watch a puppet show', done: false,edit_mode:false},
    {id: 2, text: 'Lennon Wall pic', done: false,edit_mode:false},
  ];

  let next_id = 3;

  export default function TaskApp(){

    const [text,setText] = useState("");
    const[data,dispatch] = useReducer(taskReducer,initialTasks);

    console.log(data);


    function add(text){
        dispatch({
            type:"add",
            id:next_id++,
            text:text
        })
    }


    return (
        <>
            <div>

                <div>
                <input type="text" value = {text} onChange={(e)=>setText(e.target.value)}/>
                <button onClick={()=>add(text)}>add</button>

                
                </div>

                <div>
                    {data.map(elem=>{
                        return (
                            <div key = {elem.id}>
                                <h2 >{elem.text}</h2>
                            </div>
                        )   
                    })}
                </div>
            </div>
        </>
    )
  }


  function taskReducer(tasks,action){
    if(action.type == 'add'){
        return [
            ...tasks,
            {
                id:action.id,
                text:action.text,
                done:false
            }
        ]
        
    }
  }