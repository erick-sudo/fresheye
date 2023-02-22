import React, { useRef, useState, useEffect } from "react"
import { useNavigate, useParams } from "react-router-dom"

const style={"width":"100%", "height": "100%", "position": "absolute", "left":"0px", top:"0px", overflow:"hidden"}

function Livestream() {

    const { accessToken } = useParams()

    const [tokenValid, setTokenValid] = useState(false)
    const [videoId, setVideoId] = useState("x8hqgwl")

    const navigate = useNavigate()

    useEffect(() => {
        fetch(`https://fresheye-video-server.herokuapp.com/transactions`)
        .then(res => res.json())
        .then(data => {
            for(let pay of data){
                if(Boolean(pay["CallbackMetadata"]["Item"].find(item => item["Value"] === accessToken))) {

                    setTokenValid(true)
                    break;
                }
            }
        })
    }, [])

    const parentLivestreamDiv = useRef()

    return (
        <div ref={parentLivestreamDiv} className="livestream">
            {
                tokenValid
                ? <iframe style={style} type="text/html" src={`https://www.dailymotion.com/embed/video/${videoId}?autoplay=1`} width="100%" height="100%" allowFullScreen title="Dailymotion Video Player" allow="autoplay"> </iframe>
                : <h1>Use a valid token</h1>
            }
        </div>
    )
}



export default Livestream;