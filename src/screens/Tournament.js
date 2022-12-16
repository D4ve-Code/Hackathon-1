import Header from '../components/Header';
import './Tournament.css';
import BodyTournament from '../components/BodyTournament';
import { useParams } from 'react-router-dom';

const Tournament = ({playerchoice}) => {
    const {result, id} = useParams()
    // console.log(playerchoice)
    return (
        <>
        {console.log(result,id)}
        <Header/>,
        <BodyTournament playerchoice={id} result={result} />,
        {/* <Footer/> */}
        </>
    )}


    export default Tournament;