import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import logo from './components/assets/logo.png';
import riot from './components/assets/riot.png';
import alia from './components/assets/alia.png';
import petrol from './components/assets/petrol.png';
import election from './components/assets/election.png';
import foreign from './components/assets/foreign affair.jpg';
import trump from './components/assets/trump.jpg';
import { FaInstagram } from "react-icons/fa";
import { FaFacebookSquare } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";



const App = () => {
  return (
    <div>
      <header className="header">
        <div className="logo">
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
          />
          <span>Popular News</span>
          <span className="tagline">Read Everything</span>
        </div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item">Home</li>
            <li className="nav-item">Blog</li>
            <li className="nav-item">City</li>
            <li className="nav-item">Community</li>
            <li className="nav-item">Contact</li>
          </ul>
        </nav>
      </header>
      <marquee style={{backgroundColor:"pink"}}><h4>Trending News!!!</h4></marquee>

      <div className="main-content">
        <div className="featured-container">
          <div className="large-featured">
            <img
              src={riot}
              alt="Featured News 1"
              className="featured-image"
            />
            <div className="featured-text">
              <p className="date-text">Aug 13, 2024</p>
              <h2>Riot Arises in Gaza over Israel-Palestenian War</h2>
            </div>
          </div>
          <div className="large-featured">
            <img
              src={trump}
              alt="Featured News 2"
              className="featured-image"
            />
            <div className="featured-text">
              <p className="date-text">Aug 13,2024</p>
              <h2>Donald Trump confident on winning this Election.</h2>
            </div>
          </div>
        </div>
        <div className="small-news-container">
          <div className="small-news-item">
            <img
              src={petrol}
              alt="News"
              className="small-news-image"
            />
            <div className="small-news-text">
              <p className="date-text">Aug 13,2024</p>
              <h3>Petrol, Diesel Fresh Prices Announced: Check Rates In Your City On August 13</h3>
            </div>
          </div>
          <div className="small-news-item">
            <img
              src={election}
              alt="News"
              className="small-news-image"
            />
            <div className="small-news-text">
              <p className="date-text">Aug 13 2024</p>
              <h3>Re-Election scheduled in November in Wayanad</h3>
            </div>
          </div>
          <div className="small-news-item">
            <img
              src={alia}
              alt="News"
              className="small-news-image"
            />
            <div className="small-news-text">
              <p className="date-text">Aug 13,2024</p>
              <h3>Actress Alia Bhatt about to receive national award for her movie-Gangubhai</h3>
            </div>
          </div>
          <div className="small-news-item">
            <img
              src={foreign}
              alt="News"
              className="small-news-image"
            />
            <div className="small-news-text">
              <p className="date-text">Aug 13, 2024</p>
              <h3>All eyes on possible Jaishankar and Chinese foreign minister Wang meet in Astana</h3>
            </div>
          </div>
        </div>
      </div>
      <footer className="footer">
      <div className="logo">
          <img
            src={logo}
            alt="Logo"
            className="logo-image"
          />
          <span>Popular News</span>
          <span className="tagline">Read Everything</span>
        </div>     <div className="footer-container">
        <div className="footer-column">
          <h4>Popular News</h4>
          <ul>
            <li>About Us</li>
            <li>Contact Us</li>
            <li>Code of Editorial Values</li>
            <li>News Archive</li>
            <li>Sitemap</li>
            <li>Print Subscription</li>
            <li>Digital Subscription</li>
            <li>Subscribe to Newsletters</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Other Products</h4>
          <ul>
            <li>RoofandFloor</li>
            <li>STEP</li>
            <li>Images</li>
            <li>Classifieds - Print</li>
            <li>Bookstore & Special Publications</li>
          </ul>
        </div>
        <div className="footer-column">
          <h4>Business</h4>
          <ul>
            <li>Agri-Business</li>
            <li>Industry</li>
            <li>Economy</li>
            <li>Markets</li>
            <li>Budget</li>
          </ul>
          <h4>Sport</h4>
          <ul>
            <li>Cricket</li>
            <li>Football</li>
            <li>Tennis</li>
            <li>Olympics</li>
            <li>Chess</li>
            <li>Kabaddi</li>

          </ul>
        </div>
        <div className="footer-column">
          <h4>States</h4>
          <ul>
            <li>Andhra Pradesh</li>
            <li>Karnataka</li>
            <li>Kerala</li>
            <li>Tamil Nadu</li>
            <li>Telangana</li>
          </ul>
          <h4>Cities</h4>
          <ul>
            <li>Bengaluru</li>
            <li>Chennai</li>
            <li>Trivandrum</li>
            <li>Mumbai</li>
            <li>Pune</li>
            <li>Hyderabad</li>



          </ul>
        </div>
        <div className="footer-column">
          <h4>Trending!!</h4>
          <ul>
            <li>India News</li>
            <li>Vinesh Phogat disqualification CAS verdict LIVE</li>
            <li>Made by Google LIVE updates 2024</li>
            <li>Musk Trump interview DDOS attack</li>
            <li>Kolkata rape and murder case</li>
          </ul>
          <h4>Trending on Group Sites</h4>
          <ul>
            <li>Stock Market Live Updates</li>
            <li>Stocks to buy today</li>
            <li>IND vs SL, 1st ODI</li>
            <li>Olympics</li>
            <li>Gold Rate Today</li>
          </ul>
        </div>
        <p style={{textAlign:"center", marginLeft:"450px", marginRight:"450px"}}> &copy; Popular News Summit @2024 India Corporation </p>
        <h5 style={{textAlign:"center", marginLeft:"480px", marginRight:"480px"}}>
          <a href="#">facebook <FaFacebookSquare />  </a>
        <a href="#">   Instagram <FaInstagram/>  </a>
        <a href="#">   Youtube <FaYoutube/>   </a></h5>
        

      </div>
    </footer>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
