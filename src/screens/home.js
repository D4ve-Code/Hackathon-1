import './Home.css'
import Header from '../components/Header'
import background_home from '../assets/img/background_home.jpg'


const Home = () => {
    return (
        
        <div>
            <Header />
            <div>
                <img src={background_home} alt='etoile'></img>
            </div>
        </div>
        
    )
}

export default Home