import VideoPlayer from '../VideoPlayer/index';
import video1 from '../../assets/videos/video1.mp4'
import video2 from '../../assets/videos/video2.mp4'
//import { getVideos } from '../../services/index'
import { useEffect } from 'react';



const VIDEOS = [
    {
        id: 1,
        author: 'paolozitaa',
        description: 'Esta es una descripcion de prueba aprendiendo react',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'cancion de prueba',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/2042378620ba49cf9042afee14502b30~c5_200x200.jpeg',
        VideoUrl: video1,
    },
    {
        id: 2,
        author: 'paolozitaa',
        description: 'Esta es una descripcion de prueba aprendiendo react',
        likes: 123,
        shares: 234,
        comments: 333,
        songTitle: 'cancion de prueba',
        albumCover: 'https://p16-amd-va.tiktokcdn.com/img/tos-useast2a-v-2774/2042378620ba49cf9042afee14502b30~c5_200x200.jpeg',
        VideoUrl: video2,
    }
] 


export default function FeedVideos() {
    /*useEffect(() => {
        getVideos().then(videos => {
            console.log(videos)
        })
    })*/

    useEffect(() => {
        const videos = document.querySelectorAll('.contain_video ')
        const config = {
            rootMargin: "0px 0px -50% 0px",
            threshold: 0,
        }
        const observer = new IntersectionObserver(entries => {

            entries.forEach(entry => {
                const video = entry.target.querySelector('video')
                const promise = video.play();
               if(entry.isIntersecting) {
                if(promise !== undefined){
                    promise.then(() => {
                        // Autoplay started
                    }).catch(error => {
                        // Autoplay was prevented.
                        video.muted = false;
                        video.play();
                    });
                }
               } else {
                    if(promise !== undefined){
                    promise.then(() => {
                        // Autoplay started
                    }).catch(error => {
                        // Autoplay was prevented.
                        video.muted = true;
                        video.pause();
                    });
                }
               }
            });

            
        }, config);

        
        
        
        videos.forEach(video => {
            observer.observe(video)

         });



    }, []);
    return (
    
        VIDEOS.map((video, i) => {
            return <VideoPlayer key={video.id} { ...video }/>
        })
    
    )
}