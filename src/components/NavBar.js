import React from 'react';

class NavBar extends React.Component {
    render() {
        return (
            <div>
                <nav className="nav">
          <div className="left-div">
            <img src = "https://www.flaticon.com/svg/static/icons/svg/321/321834.svg" alt = "logo-img"></img>
          </div>
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
                <li>Log In</li>
                <li>Log out</li>
                <li>Register</li>

              </ul>
            </div>

            
          </div>
        </nav> 
            </div>
        );
    }
}

export default NavBar;