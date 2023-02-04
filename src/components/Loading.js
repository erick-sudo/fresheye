import React from "react";
import loading_giph from "./assets/rotating.gif"

function Loading() {
    return (
        <div className="loading">
            <img src={loading_giph} alt="loading" />
        </div>
    )
}

export default Loading;