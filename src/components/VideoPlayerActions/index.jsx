import imglike from "../../assets/imgs/like.svg"
import imgcomment from "../../assets/imgs/comments.svg"
import imgshare from "../../assets/imgs/share.svg"


export default function videoPlayerActions({likes, coments, shares, hearted = false}) {

    const handleLike = () => {
        alert('like')   
    }
    const handleComments = () => {
        alert('comments')   
    }
    const handleShare = () => {
        alert('Share')   
    }

    return (<>

            <div className="contain_video_alcance">
                
                <button onClick={handleLike}>
                    <img src={imglike} alt="" />
                    <span>{likes}</span>
                </button>
                <button onClick={handleComments}>
                    <img src={imgcomment} alt="" />
                    <span>{coments}</span>
                </button>
                <button onClick={handleShare}>
                    <img src={imgshare} alt="" />
                    <span>{shares}</span>
                </button>
                
            </div>

    </>)
}