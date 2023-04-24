
import './App.css';

//import {useRef} from 'react'


// import video1 from './assets/videos/video1.mp4';

import FeedVideos from './components/FeedVideos';
import './components/botonpueba/boton.css';





function App({name}) {
  return (
    <div className='container'>
      <FeedVideos></FeedVideos>
    </div>
  );
}

export default App;
