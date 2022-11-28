import { useState } from "react"


export default function Main(){
    const[fancy,setFancy] = useState(false);

    console.log(fancy);
    return(
        <>
          
          
          
            <label htmlFor="inp">check to fancy </label>
            <input type="checkbox" onChange={e=>setFancy(e.target.checked)}></input>  


            {(fancy)?  
            <Counter fancy={fancy}/>
            :
            <Counter fancy={fancy}/>
            }

            {(fancy)?  
                <Counter fancy={fancy}/>
                :
                <div >
                <Counter fancy={fancy}/>
                </div>
        }          
        </>
    )
}


function Counter({fancy}){
    let[count,setCount]=useState(0);
    return(
        <>
            <div>
                <div style={{border:'2px solid black',height:'120px',width:'80px',marginLeft:'50px'
            ,
                       
                backgroundColor:fancy?"red":"yellow"
                              }}>
                    <h2 style={{textAlign:"center"}}>{count}</h2>
                    <button style={{  
                
                backgroundColor:fancy?"yellow":"red",
                position:"absolute",
                left:"60px"
                }} onClick={()=>{setCount(count+1)}}>add Inc</button>
                </div>
            </div>
        </>
    )
}