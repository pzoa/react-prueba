import { useRef, useState } from "react";
//import ReactPlayer from "react-player";
import VideoPlayerDescription from "../VideoPlayerDescription";
import VideoPlayerActions from "../VideoPlayerActions";

export default function VideoPlayer({VideoUrl, author, description, shares, likes, comments, songTitle}) {

    const [playing, setPlaying] = useState(false)
    const video = useRef(null)

    const handlePlay = () => {
        if (playing) {
            video.current.pause();
        } else {
            video.current.play();
        }

        setPlaying(!playing);

    }



    //const [count, setCount] = useState(0);


    

    return (<>
        <div id="contain_video" className={`contain_video ${playing ? 'contain_video_play':''}`} onClick={handlePlay}>
            <video ref={video}>
                <source src={VideoUrl} type="video/mp4"></source>
            </video>
            <button className="player"></button>
            <VideoPlayerDescription name={author} description={description} songTitle={songTitle} />
            <VideoPlayerActions shares={shares} likes={likes} coments={comments} />
        </div>
    </>)
}