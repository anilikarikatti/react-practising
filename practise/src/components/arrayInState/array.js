
import { useState } from "react";

let next_id =4;
let initialArtists = [
    { id: 0, name: 'Marta Colvin Andrade' },
    { id: 1, name: 'Lamidi Olonade Fakeye'},
    { id: 2, name: 'Louise Nevelson'},
  ];
  
export default function Events(){

    let [name ,setName] = useState('')
    let [arr,setArray] = useState(initialArtists);

    // console.log(next_id);
    console.log(...arr)

    return(
        <>
            <div>
                <div>
                    <h1>hello world</h1>
                    <input type="text" name="name"  value={name} onChange={e=>setName(e.target.value)}>
                        
                    </input>

                </div>
                <div>
                    <button onClick={()=>{setName('');setArray([...arr,{id:next_id+=1,name:name}])}}>submit</button>
                </div>
                <div>
                    <ul>
                        {arr.map(e=>(

                            <li key={e.id} >{e.name}{' '} 
                                <button onClick={() => {
                
                            setArray(              
                                arr.filter(a =>{
                                    return a.id !== e.id
                                })
                            );
                    }}>delete</button>
                            </li>
                        ))}
                        
                        
                    </ul>
                </div>
            </div>
        </>
    )
}