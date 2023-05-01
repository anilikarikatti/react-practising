import { useState} from 'react';


export function Conditional (){
    // let [state,setState ] = useState(true)
    let [state,setState ] = useState(true)

    if(state){

        return <p>hello </p>
    }
    else{
        <><p>jai hind</p></>
    }

}

// exports.add = Conditional