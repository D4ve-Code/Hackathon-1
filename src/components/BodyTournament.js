import './BodyTournament.css';
import Participants from './Participants';
import Player from './Player';

const BodyTournament = ({playerchoice,result}) => {
    console.log(result)
    return (
        <>
            <div className='Tournament-description'>
                <h1>Spaceship tournament</h1>
                <h2>Informations:</h2>
                <p>Cash prize : 1.000.000ᖬ</p>
                <p>Location: Tatooin</p>
                <p>Rules: Chocolate tiramisu halvah brownie bear. <br/>Dessert jelly pie apple pie cheesecake. <br/>Gummies cake muffin apple pie chocolate cake. </p>
            </div>
            <div className='container'>
                <div className='tree'>
                <ul>
                    <li> <span>Winner</span>
                        <ul>
                            <li> <span>Final</span>
                                <ul>
                                    <li> <span>{result === "true" ?<Participants/>:"Semi-final"}</span>
                                        <ul>
                                            <li> <span><Participants/></span></li>
                                            <li> <span><Participants/></span></li></ul></li>
                                    <li> <span>{result === "true" ?<Participants/>:"Semi-final"}</span>
                                        <ul>
                                            <li> <span><Participants/></span></li>
                                            <li> <span><Participants/></span></li></ul></li>
                                </ul></li>
                            <li> <span>Final</span>
                                <ul>
                                    <li> <span> {result === "true" ?<Participants/>:"Semi-final"}</span>
                                        <ul>
                                            <li> <span><Participants/></span></li>
                                            <li> <span><Participants/></span></li></ul></li>
                                    <li> <span id = "semifinal">{result === "true" ?<Player playerchoice={playerchoice} />:"Semi-final"} </span>
                                        <ul>
                                            <li> <span><Participants/></span></li>
                                            <li> 
                                                <span>
                                                    <Player playerchoice={playerchoice} />
                                                </span>
                                            </li>
                                        </ul>
                                    </li>
                                </ul>
                                </li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
            <div className= "button-container">
                <button className='game-button'>begin next round</button> <button className='refresh-button'></button>
            </div>
        </> 
    )}


    export default BodyTournament;