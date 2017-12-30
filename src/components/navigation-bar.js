import React from 'react';

const NavigationBar = () => {
    return (
        <nav className="navbar navbar-inverse">
            <div className="container-fluid">
                <div className="navbar-header">
                    <p className="navbar-brand">CoinStater</p>
                </div>
                <div className="collapse navbar-collapse" id="myNavbar">
                    <ul className="nav navbar-nav">
                        <li><a href="#">Home</a></li>
                        <li><a href="#">Contact</a></li>
                    </ul>
                    <ul className="nav navbar-nav navbar-right">
                        <li><a href="#">Login</a></li>
                    </ul>
                </div>
            </div>
        </nav>
    );
};

export default NavigationBar;


