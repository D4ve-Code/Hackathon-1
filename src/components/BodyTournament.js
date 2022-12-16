import './BodyTournament.css';
import Participants from './Participants';
const BodyTournament = () => {
    return (
        <>
            <div className='Tournament-description'>
                <h1>Pod racing tournament</h1>
                <h2>Informations:</h2>
                <p>Tournament start in : 00:08:16</p>
                <p>Location: Tatooin</p>
                <p>Lfniunfiezn einf vdnviudnv vdivjdv vnvidjnvid vdnvidnv vdivjndinv vdinvidnv <br /> Feinfieznfiezn vcezinvezinvezin vnz,ivnezivnezv</p>
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
                                            <li> <span><Participants/></span></li></ul></li>
                                </ul></li>
                        </ul>
                    </li>
                </ul>
                </div>
            </div>
        </> 
    )}


    export default BodyTournament;