import logo from '../assets/header-logo.png';


export const Header = ()=>{
    return(
        <header className='container-header'>
            <div>
                <img src={logo} alt="" />
            </div>
            <div className='header-menu'>
                <ul>
                    <li><span>Home</span></li>
                    <li>Drinks</li>
                    <li>About</li>
                </ul>
            </div>
            <div className='header-button'>
                <button>Contact Us</button>
            </div>
        </header>
    )
};