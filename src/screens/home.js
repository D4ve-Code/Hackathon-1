import './Home.css'
import Header from '../components/Header'
import yoda from '../assets/img/yoda.svg'
// import { Keyframe } from 'react-native-reanimated';

const Home = () => {
    return (
        
        <div className='home'>
            <Header />
            <img src={yoda} alt='yoda' className='yoda'/>
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