import React from 'react';
import './Home.css'
import { Link } from 'react-router-dom';
import AppsIcon from "@material-ui/icons/Apps";
import AccountCircleIcon from '@material-ui/icons/AccountCircle';

const Home = () => {
    return ( 
            <div className="home">
                        
                {/* Header bar including nav */}
                <div className="homepage_Header">
                    <nav className="homepage_nav">
                            <Link to="gmail">Gmail</Link>
                            <Link to="images">Images</Link>
                            <AppsIcon />
                            <AccountCircleIcon />
                    </nav>
                </div>

                {/* content */}
                <div className="homepage_body">
                    <div className="logo">
                        <img src="https://www.google.com/images/branding/googlelogo/1x/googlelogo_color_272x92dp.png" alt="google tag"/>
                    </div>
                </div>

                {/* Footer */}
                <div className="homepage_Footer">
                    <nav className='footer_nav'>

                        <div className="nav_left">
                            <Link to="About">About</Link>
                            <Link to="Advertising">Advertising</Link>
                            <Link to="Business">Business</Link>
                            <Link to="How_Search_Works">How Search Works</Link>
                        </div>

                        <div className="nav_right">
                            <Link to="privacy">Privacy</Link>
                            <Link to="terms">Terms</Link>
                            <Link to="settings">Settings</Link>
                        </div>
                    </nav>
                </div>
            </div>
     );
}
 
export default Home;