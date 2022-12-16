import './TourList.css';
import ActuCard from '../components/ActuCard'
import Counter from '../components/Counter'
import PubBanner from  '../components/PubBanner'
import TourCard from '../components/TourCard'


const TourList = () => {
return (
    <div className='mainTour'>
        <Counter
                    deadline={new Date(2022, 11, 20).getTime() + 3600 * 24 * 1000}
                />
        <PubBanner />
        <TourCard/>
        <hr></hr>
        <ActuCard/>
        
    </div>
);
};


export default TourList
