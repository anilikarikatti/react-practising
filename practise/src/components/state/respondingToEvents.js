// import { Children } from "react"
/*
export default function Events(){

        function subit(e){
            e.preventDefault()
            alert("submitted")
        }

        const divStyles = {
            height:'20px',
            

        }
    return (
        // <>
        //     <div className="tool" onClick={()=>{
        //         alert("you clicked tool bar")
        //     }} style ={{background:'red'}} >
        //    <EventsChild  message= " im a good man you clicked message " >
        //         play movie
        //     </EventsChild> 
        //    <EventsChild  message= "you are also a good man clicked upload image " >
        //         upload image
        //     </EventsChild> 
        //     </div>
        //    </>

        <>
            <form method="get">
                <input type="text" name="inp" ></input>
                <button  type= "submit" onClick={subit}>submit</button>

                <button  type= "submit" >submit</button>
                
            </form>
        </>
    )   
}


function EventsChild({message,children}){

    function click(e){
        e.stopPropagation()
        alert(message)
    }
    return(
        <>
            <button onClick={click}>{children}</button>

        </>
    )
}
*/
/*
import { useState } from "react"
export default function  Events(){
    console.log("executed");
    let [name,setName] = useState('anil');
    


    

    
    return(
        <>
            <ChildEvent setName={setName}  name={name} />
            <ChildEvent setName={setName}  name={name} />

    

        </>
    )
}

function ChildEvent({name,setName}){
    // console.log(index);
    let [index ,setindex] = useState(0)
    
    function changeIndex(){
        setindex(index+1);
    }
    function prom(){
        let n = prompt("enter your name")
        console.log(n);
        changeName(n);
    }
    
    function changeName(para){
        setName(para);
     
    }
    return(
        <>
            <h1 onClick={()=>{prom();changeIndex()}}>hello {name} {index}</h1>
        </>
    )


}
*/
/*
import { useEffect, useState } from "react";

export default function Events(){

    let [arr,changeArray] = useState([]);

    console.log(arr);
    return(
        <>
            <h1>    hello world</h1>
            <ChildEvents changeArray={changeArray} arr={arr}/>
        </>
    )
}


function ChildEvents({changeArray,arr}){
useEffect(()=>{
    for(let i=0;i<10;i++){
        let num = Math.floor(Math.random()*10%2);
        console.log(num);
        if(num){
            arr.push(i);
            // console.log(arr);
            changeArray(arr)
            console.log(arr);
        }

    }
})
   

    // changeArray(arr);
    // useEffect(()=>{
    //     let arr1=[200,300,400]

    //     // changeArray(arr1)

    //     })
    // if(arr.length===0){
    //     console.log("entered");
    //     let arr1=[200,300,400]
    //     // nam(arr1)
        
    // }
    return(
        <>

        </>
    )
}*/

/*

import {useState} from 'react'

 export default function Events(){
    let [obj,setObj] = useState({x:0,y:0});
    return(
        <>
            <div onPointerMove={(e)=>{
                setObj({x:e.clientX,y:e.clientY})
            }} style={{ position : 'relative',height:'100vh',width:'100vw',border:'2px solid black',overflow:'hidden'}}>
                <div style={{position:'absolute',height:'20px',width:'20px',backgroundColor:'red',borderRadius:'50%',clientX:'100',transform:`translate(${obj.x}px,${obj.y}px)`}}></div>
            </div>
        </>
    )
}
*/
// import { useState } from 'react';
// export default function Events() {
//   const [position, setPosition] = useState({
//     x: 0,
//     y: 0
//   });
//   return (
//     <div
//       onPointerMove={e => {
//         setPosition({
//           x: e.clientX,
//           y: e.clientY
//         });
//       }}
//       style={{
//         position: 'relative',
//         width: '100vw',
//         height: '100vh',
//       }}>
//       <div style={{
//         position: 'absolute',
//         backgroundColor: 'red',
//         borderRadius: '50%',
//         transform: `translate(${position.x}px, ${position.y}px)`,
//         left: -10,
//         top: -10,
//         width: 20,
//         height: 20,
//       }} />
//     </div>
//   );
// }

/*
import { useState } from "react";


export default function Events(){
    let [form,setForm] = useState({
        firstName:'anil',
        lastName:'karikatti',
        
        email:'an@gmail.com',
        mobileNumber:'908765421'    
        
        
    });


    function handleChange(e){
        // console.log(...form);
        setForm({
            ...form,

        [e.target.name] : e.target.value

        }

        )
    }
    // function changeFname(e){
    //     // console.log(...form);
    //     setForm({
    //         ...form,

    //     firstName : e.target.value

    //     }

    //     )
    // }

    // function changeLname(e){

    //     setForm({
    //         ...form,
    //     lastName:e.target.value})
    // }

    // function changeemail(e){

    //     setForm({
    //         ...form,
    //     email:e.target.value

    // })
    // }

    // function changeMobileNum(e){
    //     setForm({
    //         ...form,
    //     mobileNumber:e.target.value
            
    // })    
    // }
    return(
        <>
            
            <div>
                <div>
                    <label for="fName">firstName</label>
                    <input type="text" id="fName" name="firstName"onChange={handleChange}value={form.firstName}></input>
                </div>
                <div>
                    <label for="LName">lastName</label>
                    <input type="text" id="LName" name= "lastName" onChange={handleChange}value={form.lastName}></input>
                </div>
                <div>
                    <label for="email">email</label>
                    <input type="email" id="email" name="email" onChange={handleChange}value={form.email}></input>
                </div>
                <div>
                    <label for="mobileNum">mobile Number</label>
                    <input type="text" id="mobileNum" name="mobileNumber" onChange={handleChange}value={form.mobileNumber}></input>
                </div>
                <div>
                    <p>{form.firstName}</p>
                    <p>{form.lastName}</p>

                    <p>{form.email}</p>
                    <p>{form.mobileNumber}</p>
                    </div>                
            </div>
        </>
    )
}
*/


// add array in state


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
/*
import { useState } from 'react';

let initialArtists = [
  { id: 0, name: 'Marta Colvin Andrade' },
  { id: 1, name: 'Lamidi Olonade Fakeye'},
  { id: 2, name: 'Louise Nevelson'},
];

export default function List() {
  const [artists, setArtists] = useState(
    initialArtists
  );

  return (
    <>
      <h1>Inspiring sculptors:</h1>
      <ul>
        {artists.map(artist => (
          <li key={artist.id}>
            {artist.name}{' '}
            <button onClick={() => {
                  // console.log(a);
            setArtists(                
                artists.filter(a =>{
                    console.log(artist.id);
                 return a.id !== artist.id
                })
              );
              console.log(artists);

            }}>
              Delete
            </button>
          </li>
        ))}
      </ul>
    </>
  );
}
*/