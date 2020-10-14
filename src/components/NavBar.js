import React from 'react';
import {Link} from 'react-router-dom';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="nav">
                  <Link to = "/">
          <div className="logo">
           
            <img src = "https://www.flaticon.com/svg/static/icons/svg/321/321834.svg" alt = "logo-img"/>
                     
            <span>SocioFy</span>
          </div>
          </Link>
          <div className="search-container">
            <img className = "search-icon" src = "https://www.flaticon.com/svg/static/icons/svg/1007/1007692.svg" alt = "search-icon"></img>
            <input placeholder = "search"></input>
            <div className = "search-results">
              <ul>
                <li className = "search-results-row">
                  <img src="https://www.flaticon.com/svg/static/icons/svg/1754/1754809.svg" alt = "user-pic"></img>
                  <span>kishan singh</span>
                </li>
                <li className = "search-results-row">
                  <img src="https://www.flaticon.com/svg/static/icons/svg/1754/1754809.svg" alt = "user-pic"></img>
                  <span>kishan singh</span>
                </li>
                <li className = "search-results-row">
                  <img src="https://www.flaticon.com/svg/static/icons/svg/1754/1754809.svg" alt = "user-pic"></img>
                  <span>kishan singh</span>
                </li>
              </ul>

            </div>
          </div>
          <div className = "right-nav">
            <div className="user">
              <img src="https://www.flaticon.com/svg/static/icons/svg/1754/1754809.svg" alt="user-pic" id ="user-dp"></img>
              <span>kishan singh</span>
            </div>
            <div className = "nav-links">
              <ul>
                <Link to="/login"><li>Log In</li></Link> 
                <Link to ="/signup"><li>Register</li></Link>
                <li>Log out</li>

              </ul>
            </div>

            
          </div>
        </nav> 
            </div>
        );
    }
}

export default NavBar;