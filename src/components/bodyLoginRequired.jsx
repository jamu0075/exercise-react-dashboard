import React, { Component } from 'react';

class LoginRequired extends Component {
    render() { 
        return (
            <div className="body">
                <h3>Sign-in required to view content.</h3>
            </div>
          );
    }
}
 
export default LoginRequired;