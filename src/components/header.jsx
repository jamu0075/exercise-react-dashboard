import React, { Component } from 'react';
import  { Link } from 'react-router-dom';
import { Container, Row, Col, Button } from 'reactstrap';
import '../App.css';

class Header extends Component {
    render() { 
        return (
            <Container fluid={true} className="header">
                <Row>
                    <Col>
                        <h1>Company Logo</h1>
                    </Col>
                    <Col xs='auto' className="loginButton">
                    <Link to="/login"><Button size='sm'>{ this.props.isAuth ? "Sign Out" : "Sign In"}</Button></Link>
                    </Col>
                </Row>
            </Container>
          );
    }
}
 
export default Header;
