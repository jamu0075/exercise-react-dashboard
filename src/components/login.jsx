import React, { Component } from 'react';
import { Button } from 'reactstrap';

class LoginPage extends Component {
    render() { 
        return (
            <div className="body">
                <h1> Login Page</h1>
                <Button onClick={this.props.onAuthenticate}>{this.props.isAuth ? "Sign Out" : "Sign In"}</Button>
            </div>
        );
    }
}
 
export default LoginPage;