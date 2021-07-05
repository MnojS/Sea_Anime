import React from 'react'
import VideoPlayer from 'react-video-js-player';
import Marvel from '../../../../assets/Video/Marvel.mp4';
import Donate from '../../Donate/Donate';
import AnimeDescription from '../AnimeDescription/AnimeDescription';
import EpisodeBox from '../episodeBox/episodeBox';
import './VideoPlayer.css'

const videoPlayer = () => {

  const videoSrc = Marvel;
  const poster = "https://i.pinimg.com/474x/ec/e6/0a/ece60aefc794ee34bcc098d258a4cc2b.jpg";

  return (
    <div className="">
      <div className="animeContainer"> 
        <div className="videoPlayer">
          <p className="currentTitle"> Anime name | episode no</p>
          <VideoPlayer 
              src={videoSrc} 
              poster={poster} 
              width="720"
              height="480" 
              playbackRates={[0.5,1,3.85,16]} />
          </div>
          <div>
            <EpisodeBox />
          </div>
      </div>
      <div>
        {/* <AnimeDescription /> */}
      </div>
      <Donate />
    </div>
  )
}

export default videoPlayer
