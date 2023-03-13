const { useState, useRef } = require("react");

export default function Myvideo(){
    let [isplaying,setPlaying] = useState(false);

    let ref = useRef(null);

        let handleClick = ()=>{
            setPlaying(!isplaying)

            if(isplaying){
                ref.current.pause()
            }
            else{
                ref.current.play()
            }
        }


        

    return(
        <>

            <button onClick={handleClick}>{isplaying ? "pause" : "play"}</button>

            <video width="250" ref={ref}>
                <source src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4"
          type="video/mp4" />

                {/* </source> */}
            </video>
        </>
    )
}