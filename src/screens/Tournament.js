import Header from '../components/Header';
import './Tournament.css';
import BodyTournament from '../components/BodyTournament';


const Tournament = ({playerchoice}) => {
    // console.log(playerchoice)
    return (
        <>
        <Header/>,
        <BodyTournament playerchoice={playerchoice} />,
        {/* <Footer/> */}
        </>
    )}


    export default Tournament;