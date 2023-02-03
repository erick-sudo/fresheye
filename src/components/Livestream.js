import React, { useRef } from "react"

const style={"width":"100%", "height": "100%", "position": "absolute", "left":"0px", top:"0px", overflow:"hidden"}

function Livestream() {

    const parentLivestreamDiv = useRef()

    return (
        <div ref={parentLivestreamDiv} className="livestream">
            <iframe style={style} frameborder="0" type="text/html" src="https://www.dailymotion.com/embed/video/x8hqgwl?autoplay=1" width="100%" height="100%" allowfullscreen title="Dailymotion Video Player" allow="autoplay"> </iframe>


        </div>
    )
}

export default Livestream;