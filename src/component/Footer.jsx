import logo from '../assets/footer-logo.png'


export const Footer =()=>{
    return(
        <footer className="footer">
            <div className="footer-container-about">
            <h2>About</h2>
            <p> purelite is owned and operated by Purelite Inc., a liquor company that offers the best pure beer in the market today!</p>
            <p>Any questions? Our email address is ask@purelite.com</p>
            <p>Drink Responsibly</p>    
            <p>Credits to pureliteTM</p>   
           
            </div>
            <div className="footer-container-info">
                <h2>Info</h2>
                <a href="#">Search</a>
                <a href="#">About Us</a>
                <a href="#">Frequently Asked Questions</a>
                <a href="#">Careers</a>
                <a href="#">Terms and Conditions</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Returns and Refunds Policy</a>
                <a href="#">Shop Our Instagram</a>
            </div>
            <div className="footer-logo">
                <img src={logo} alt="" />
            </div>
        </footer>
    )
}