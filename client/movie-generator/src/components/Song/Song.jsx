
export default function Song() {
    return (
        <header className='header'>
            <Link to ='/'><img className='header__logo' src={Logo} alt='logo'></img></Link>
            <div className='header__user user'>
                <h3>Bringin' the vibe since</h3>
                <p>98'</p>
            </div>
        </header>
    );
}