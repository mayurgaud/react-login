import React from 'react';
import {connect} from 'react-redux';
import {
    BrowserRouter as Router,
    Route,
    Redirect
} from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
import LoginForm from './Login';
import Header from './Header';
require('./App.css');

const PrivateRoute = ({component: Component, ...rest, loggedIn}) => (
    <Route {...rest} render={props => (
        loggedIn ? (
            <Component {...props}/>
        ) : (
            <Redirect to={{
                pathname: '/',
                state: {from: props.location}
            }}/>
        )
    )}/>
);

/**
 * App component.
 */
class App extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        const {isUserLoggedIn} = this.props;

        return (
            <div className="container">
                <Router>
                    <div>
                        {isUserLoggedIn ? <Header /> : ""}
                        <Route path="/" component={LoginForm}/>
                        <PrivateRoute path="/home" component={Home} loggedIn={isUserLoggedIn}/>
                        <PrivateRoute path="/aboutus" component={AboutUs} loggedIn={isUserLoggedIn}/>
                    </div>
                </Router>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
};

App = connect(mapStateToProps)(App);
export default App;