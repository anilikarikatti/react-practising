import { useState } from "react";


export default function ChatBox(){

    const contacts = [
        { id: 0, name: 'Taylor', email: 'taylor@mail.com' },
        { id: 1, name: 'Alice', email: 'alice@mail.com' },
        { id: 2, name: 'Bob', email: 'bob@mail.com' }
      ];
      
    
    const [to,setTo] = useState(0);


    console.log(to);
    return (

        <>
        <div style={{display:"flex"}}>
            <Contacts contact={contacts} to={to} onSelect ={id=>setTo(id)} />           
            <Box to={contacts[to].name} email={contacts[to].email}></Box>
            </div>
        </>
    )
}


function Contacts({contact,to,onSelect}){

    return(

        <>
        <div style={{marginLeft:"30px",marginTop:"30px",pointerenter:"pointer"}}>
            {contact.map(elem=>{
                return (<div  key = {elem.name} onClick={()=>onSelect(elem.id)} style = {{border:"1px solid black",height:"20px",width:"70px",textAlign:"center",backgroundColor:"ButtonFace"}}>{elem.name}</div>)
            })}
            </div> 
        </>
    )
}


function Box({to,email}){
    let [text,setText] = useState("")
    return (

        <>
        <div>
            <div style ={{border:"2px solid black",marginLeft:"30px",marginTop:"10px"}}>
            <h2>chat to {to}</h2>
            <textarea cols={30} rows={10} onChange={e=>setText(e.target.value)}/>

            </div>
            <button  style ={{marginLeft:"30px"}} ><a href={`mailto:${email}?subject=dummy&body=${text}`} style ={{color:"black",textDecoration:"none"}}>{email}</a></button>
            

            {/* <a href="mailto:`{email}`?subject={subject}&body={body}">Click to Send an Email</a> */}
 
            </div>
        </>
    )
}