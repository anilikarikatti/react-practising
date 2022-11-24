import { useState } from "react"


let data = [{
    title:"about",
    description : " With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
},
{
    title:"Ethmylozy",
    description:`    The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.`    
},
{title:"about",
    description : " With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city."
},
{
    title:"Ethmylozy",
    description:`    The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.`    
},

]
export default function Main(){

    let [activeIndex,setActiveIndex] = useState(0);
    let [dat,setData] = useState(data);
    return(
        <>
            {/* first doing simple passing true or false */}

            {/* <Panel title="About" index={activeIndex===0} onshow ={()=> setActiveIndex(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>   


            <Panel title="Etymology" index={activeIndex === 1} onshow ={()=> setActiveIndex(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>

      <Panel title="About" index={activeIndex===2} onshow ={()=> setActiveIndex(2)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>   


            <Panel title="Etymology" index={activeIndex === 3} onshow ={()=> setActiveIndex(3)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel> */}


      {/* another way condition in child component */}
{/*       
       <Panel title="About" index ={0} activeIndex={activeIndex} onshow ={()=> setActiveIndex(0)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>   


            <Panel title="Etymology"  index ={1} activeIndex={activeIndex} onshow ={()=> setActiveIndex(1)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>

      <Panel title="About" activeIndex={activeIndex} index ={2} onshow ={()=> setActiveIndex(2)}>
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>   


            <Panel title="Etymology" index ={3} activeIndex={activeIndex} onshow ={()=> setActiveIndex(3)}>
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel> */}


      {/* here we used the datastructure */}
      {dat.map((elem,index)=>{
        return <Panel key={index} title={elem.title} description={elem.description} index={index} activeIndex={activeIndex} onshow ={()=>setActiveIndex(index)}></Panel>
      })}
        


        </>
    )
}

function Panel({title,index,description,activeIndex,onshow}){
    console.log(title);
    return(
        <>
        <h2>{title}</h2>
            {activeIndex === index ? (
                <p>{description}</p>
            ):
            (
                <button onClick={onshow}>show</button>
            )
        }
        </>
    )
}