import React from 'react';
import {Link} from 'react-router-dom';
import {connect} from 'react-redux';
import {userLogout} from '../actions';
import {Button} from 'react-bootstrap';

/**
 * Navigation component.
 */
class Header extends React.Component {
    constructor(props) {
        super(props);

        this.logout = this.logout.bind(this);
    }

    /**
     * Logout the user.
     */
    logout() {
        this.props.dispatch(userLogout());
    }

    render() {
        return (
            <nav className="navbar navbar-default">
                <div className="container">
                    <div className="navbar-collapse collapse">
                        <ul className="nav navbar-nav">
                            <li key={1}><Link to="/home">Home</Link></li>
                            <li key={2}><Link to="/aboutus">About Us</Link></li>
                            <li key={3}><Link to="/aboutus/profile">Profile</Link></li>
                            <li key={4}><Link to="/aboutus/team">Team</Link></li>
                            <li key={5}><Link to="/aboutus/contact">Contact</Link></li>
                            <li key={6} className="logoutButton">
                                <Button bsStyle="danger" onClick={this.logout}>Logout</Button>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}
const mapStateToProps = state => {
    return state
};

Header = connect(mapStateToProps)(Header);
export default Header;