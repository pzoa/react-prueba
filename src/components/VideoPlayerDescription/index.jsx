import AlbumDisk from "../AlbumDisk"
import SongTicker from "../SongTicker"

export default function VideoPlayerDescription({ name, description, albumCover, songTitle }) {
    
    return (<>
    
    <div className="contain_video_info">
            <div>
                <h1>@{name}</h1>
                <p>{description}</p>
                <SongTicker songTitle={songTitle} />
            </div>
            <AlbumDisk albumCover={albumCover} />
        </div>
    
    </>)
}