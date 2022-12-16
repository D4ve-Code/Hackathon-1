import './Home.css'
import Header from '../components/Header'
// import yoda from '../assets/img/yoda.svg'
// import ReactAudioPlayer from 'react-audio-player';
import {useState} from 'react';
import AudioPlayer from 'react-h5-audio-player';

const Home = () => {

const musicTracks=[{
    name:"starwars",
    src:"https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3"
},
    {
    name: "Memories",
    src: "https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3"
  },
  {
    name: "Creative Minds",
    src: "https://www.cjoint.com/doc/21_05/KEhhYBEVF5L_Star-Wars-Theme-Song-.mp3"
  },
];

const [trackIndex, setTrackIndex] = useState(0);

const handleClickPrevious = () => {
  setTrackIndex((currentTrack) =>
    currentTrack === 0 ? musicTracks.length - 1 : currentTrack - 1
  );
};

const handleClickNext = () => {
  setTrackIndex((currentTrack) =>
    currentTrack < musicTracks.length - 1 ? currentTrack + 1 : 0
  );
};

    return (
        
        <div className='home'>
                <div className='homeSound'>
                <AudioPlayer
                // style={{ width: "300px" }}
                style={{ borderRadius: "1rem" }}
                autoPlay
                onLoadStart={0}
                // layout="horizontal"
                src={musicTracks[trackIndex].src}
                onPlay={(e) => console.log("onPlay")}
                showSkipControls={true}
                showJumpControls={false}
                onClickPrevious={handleClickPrevious}
                onClickNext={handleClickNext}
                onEnded={handleClickNext}
                // other props here
                />
                </div>
            <Header />
            <p>
                <div class="a-long-time-ago">
                A long time ago, in a galaxy far,<br /> far away..
                </div>

                <div class="crawl">
                    <div>
                        <p>
                            It is a period of civil war.
                            Rebel spaceships, striking
                            from a hidden base, have won
                            their first victory against
                            the evil Galactic Empire.
                        </p>
                        <p>
                            During the battle, Rebel
                            spies managed to steal secret
                            plans to the Empire's
                            ultimate weapon, the DEATH
                            STAR, an armored space
                            station with enough power to
                            destroy an entire planet.
                        </p>
                        <p>
                            Pursued by the Empire's
                            sinister agents, Princess
                            Leia races home aboard her
                            starship, custodian of the
                            stolen plan that can save
                            her people and restore
                            freedom to the galaxy....
                            </p>            
                        </div>
                        </div>
            </p>
        </div>
    )
}

export default Home