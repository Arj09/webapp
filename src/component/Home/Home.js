import React, { useEffect, useState } from "react";
import { useReactMediaRecorder } from "react-media-recorder";
import { useNavigate } from "react-router-dom";
import "./Home.css"

export const Home = ()=>{
    const { status, startRecording, stopRecording, mediaBlobUrl } =
    useReactMediaRecorder({ video: true });
    const [hide, setHide] = useState(true)
    const navigate = useNavigate()
    

    const handlelogout = ()=>{
        localStorage.removeItem("Token")
        navigate("/")
       

    }
 
   
    
    


    return(
        <>
        <div className="btn-container">
            <button className="logoutbtn"  onClick={handlelogout}>Logout</button>
        </div>
        <div className="container">
            <p className="status">{status}</p>
            
            <video className= "video" src={mediaBlobUrl}  controls autoPlay loop />
            <div className="action">
            <button onClick={startRecording}>Start Recording</button>
            <button onClick={stopRecording}>Stop Recording</button>
            </div>
        </div>
        
        
        </>
    )
}