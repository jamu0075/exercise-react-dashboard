import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import '../App.css';

class NavColumn extends Component {
    render() {
        return(
            <div className='navbar-left'>
                <nav>
                    <ul className="navList">
                        <Link to="/"><li>Home</li></Link>
                        <Link to="/contracts"><li>Contracts</li></Link>
                    </ul>
                </nav>
            </div>
        );
    }
}

export default NavColumn;