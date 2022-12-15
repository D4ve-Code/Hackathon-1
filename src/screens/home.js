import './Home.css'
import Header from '../components/Header'
import yoda from '../assets/img/yoda.svg'

const Home = () => {
    return (
        
        <div className='home'>
            <Header />
            <img src={yoda} alt='yoda' className='yoda'/>
             <div className='yodaBill' onClick={() => <Home/>}>
                <div id="y-body">
                    <div id="y-head">
                        <div id="left-eye"></div>
                        <div id="right-eye"></div>
                        <div id="mouth"></div>
                        <div id="left-ear"></div>
                        <div id="right-ear"></div>
                    </div>
                    <div id="cup">
                        <div id="steam">~</div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Home