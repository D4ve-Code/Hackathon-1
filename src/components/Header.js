import './Header.css'
import MenuButton from './MenuButton'

const Header = () => {
    return (
        <div className='header'>
            <div className='headerTitle'>
            <h1>
                intergalactic tournaments
            </h1>
            </div>
            <div className='headerButton'>
            <MenuButton />
            </div>
        </div>
    )
}
export default Header