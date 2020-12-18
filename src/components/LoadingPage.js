import React from 'react';
import ReactAudioPlayer from 'react-audio-player'; 
import BellsMusic from '../images/bells.mp3'

const LoadingPage = () => (
    <div>
        <span className="santa"></span>
        <span className="cloudOne"></span>
        <span className="cloudTwo"></span>
        <span className="cloudThree"></span>
        <span className="cloudFour"></span>
        <span className="cloudFive"></span>
        <span className="orangeClouds"></span>
        <span className="orangeCloudsTwo"></span>
        <span className="stars"></span>

        <ReactAudioPlayer
            src={BellsMusic}
            autoPlay={true}
            controls
        />
    </div>
);
 
export default LoadingPage;
