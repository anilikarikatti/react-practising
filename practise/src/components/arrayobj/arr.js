import { useState } from "react"
 let id =0;
export default function Arr(){

    let [data,setData] = useState('');
    let [arr,setArray]= useState([]);


    function changeArray(){
        setData('');

        id+=1;
        setArray([...arr,{num:id,title:data}]);
        console.log(arr);

    }

    
    return (
        <>
        
             <input type="text" value = {data} onChange={(e)=>{setData(e.target.value)}}/>
             <button onClick={changeArray}>submit</button>
             {arr.map((elem)=>{
                    return <ol key={elem.num}>{elem.title} <button onClick={()=>{
                        let num = elem.num;
                        setArray(arr.filter((el)=>el.num!==num))

                    }}>delete</button>
                     </ol>

                    })}
        </>
    )
}