import { useState } from "react"

export default function Main(){
    
    return (
        <>
             <Panel title="About">
        With a population of about 2 million, Almaty is Kazakhstan's largest city. From 1929 to 1997, it was its capital city.
      </Panel>   


            <Panel title="Etymology">
        The name comes from <span lang="kk-KZ">алма</span>, the Kazakh word for "apple" and is often translated as "full of apples". In fact, the region surrounding Almaty is thought to be the ancestral home of the apple, and the wild <i lang="la">Malus sieversii</i> is considered a likely candidate for the ancestor of the modern domestic apple.
      </Panel>
        </>
    )
}

function Panel({title,children}){

    let [show,setShow] = useState(false)
        return(
            <>
                <h1>{title}</h1>

                {show ? <p>{children}</p> : <button onClick={()=>setShow(true)}>show</button> }
            </>
        )
}