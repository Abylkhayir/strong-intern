import globe from '../assets/icons/Vector';
import vector from '../assets/icons/Vectorr';
import facebook from '../assets/icons/Facebook';
import linkedin from '../assets/icons/Linkedin';
import twitter from '../assets/icons/Twitter';


function Footer() {
    return (
        <div className="footer">
            <div className='links'>
                <div className="languages">
                    <div className="drop-box">
                        <img src={globe} alt="" />
                        <span>English</span>
                        <img src={vector} alt="" />
                    </div>
                </div>
                <div className="links-items">
                    <h5>NAVIGATION</h5>
                    <a href="#">Home</a>
                    <a href="#">FAQ</a>
                    <a href="#">Investor Relations</a>
                    <a href="#">Jobs</a>
                    <a href="#">About Us</a>
                    <a href="#">Help center</a>
                </div>
                <div className="links-items">
                    <h5>LEGAL</h5>
                    <a href="#">Privacy Policy</a>
                    <a href="#">Trems of service</a>
                    <a href="#">Cookie Preferences</a>
                    <a href="#">Corporate information</a>
                </div>
                <div className="links-items">
                    <h5>TALK TO US</h5>
                    <p>support@ercom.com</p>
                    <p>+66 2399 1145</p>
                </div>
                <div className="links-items">
                    <h5>FOLLOW US</h5>
                    <div>
                        <a href="#"><img src={facebook} alt="" /></a>
                        <a href="#"><img src={linkedin} alt="" /></a>
                        <a href="#"><img src={twitter} alt="" /></a>
                    </div>
                </div>
            </div>
            <p>© 2022 Dramatic. All Rights Reserved. </p>
        </div>
    );
}

export default Footer;