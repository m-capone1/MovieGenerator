import Logo from '../../assets/logo/logo.png';
import './Header.scss';

export default function GeneratorPage() {
    return (
        <header>
            <img className='header__logo' src={Logo} alt='logo'></img>
        </header>

    );
}