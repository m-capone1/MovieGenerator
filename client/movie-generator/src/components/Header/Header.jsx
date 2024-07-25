import Logo from '../../assets/logo/Whatsthevibe.png';
import './Header.scss';
import Popcorn from '../../assets/images/popcorn.png';


export default function GeneratorPage() {
    return (
        <header className='header'>
            <img className='header__logo' src={Logo} alt='logo'></img>
            <div className='header__user user'>
                <h3>Bringin' the vibe since</h3>
                <p>98'</p>
            </div>
        </header>

    );
}