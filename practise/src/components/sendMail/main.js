import { useState } from "react";

const contacts = [
    { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
    { id: 1, name: 'Alice', email: 'alice@mail.com' },
    { id: 2, name: 'Bob', email: 'bob@mail.com' }
  ];



  export default function Main(){
    let [to,setTo] = useState(contacts[0]);

    console.log(to);

    return(
        <>
            <Contacts contacts = {contacts}  onSelect = {elem=>setTo(elem)}/>

            <ChatArea to={to}/>
            <button>{to.email}</button>
        </>
    )
  }


  function Contacts({contacts,onSelect}){
    return(
        <>
            <ul>
                {contacts.map(elem=>{
                   return( <li key = {elem.id} >
                        <button onClick={()=>{onSelect(elem)}}>{elem.name}</button></li>)
                    // {console.log(elem)}
                })}
          </ul>
        </>
    )
  }


  function ChatArea({to}){
    let [text,setText] = useState('')

    console.log(text);
    return(
        <>
            <textarea cols="30" rows="10" value={text}  onChange = {e=>setText(e.target.value)} placeholder={"chat to " + to.name}>
                {/* <h2>chat to {to.name}</h2> */}
                </textarea>
        </>
    )
  }
