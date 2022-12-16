import './BodyTournament.css';
import Participants from './Participants';
import Player from './Player';
const BodyTournament = () => {
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
                                    <li> <span>Semi-Final</span>
                                        <ul>
                                            <li> <span><Participants/></span></li>
                                            <li> <span><Participants/></span></li></ul></li>
                                    <li> <span>Semi-Final</span>
                                        <ul>
                                            <li> <span><Participants/></span></li>
                                            <li> <span><Participants/></span></li></ul></li>
                                </ul></li>
                            <li> <span>Final</span>
                                <ul>
                                    <li> <span>Semi-Final</span>
                                        <ul>
                                            <li> <span><Participants/></span></li>
                                            <li> <span><Participants/></span></li></ul></li>
                                    <li> <span>Semi-Final</span>
                                        <ul>
                                            <li> <span><Participants/></span></li>
                                            <li> <span><Player
                                            // playerchoice={props.button}
                                            /></span></li></ul></li>
                                </ul></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </> 
    )}


    export default BodyTournament;