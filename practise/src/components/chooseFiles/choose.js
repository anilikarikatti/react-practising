import { useState } from "react";

export default function Choose(){
    const initialItems = [
        { title: 'pretzels', id: 0 },
        { title: 'crispy seaweed', id: 1 },
        { title: 'granola bar', id: 2 },
      ];


      let [choosed,setChoosed] = useState(initialItems[0].title);

    //   let [data,setData] = useState(initialItems);
      let data = initialItems;
      console.log(data);
      return (
        <>
            <ul>
                {data.map(elem=>{
                    return <li key={elem.id}>  {elem.title} 
                        <button onClick={(e)=>setChoosed(elem.title)}>choose</button>
                     </li>
                })}

             </ul>

             <p>you picked {choosed} </p>
        </>
      )
}