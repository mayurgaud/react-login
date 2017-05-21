import React from 'react';
import {userCredentials} from '../credentials';
import {connect} from 'react-redux';
import {userLogin, setUserEmail, setUserPassword, errorMessage} from '../actions';
import {Button, FormControl, Form, FormGroup} from 'react-bootstrap';
import {Redirect} from 'react-router-dom';

/**
 * Login form component.
 */
class LoginForm extends React.Component {
    constructor(props) {
        super(props);

        this.handleEmailOnChange = this.handleEmailOnChange.bind(this);
        this.handlePasswordOnChange = this.handlePasswordOnChange.bind(this);
        this.login = this.login.bind(this);
        this.getValidationState = this.getValidationState.bind(this);
    }

    /**
     * Get validation state of email address field.
     *
     * @returns {string}
     */
    getValidationState() {
        let emailAddress = this.props.email;

        if (emailAddress) {
            let atPosition = emailAddress.indexOf("@");
            let dotPosition = emailAddress.lastIndexOf(".");

            if (atPosition < 1 || dotPosition < atPosition + 2 || dotPosition + 2 >= emailAddress.length) {
                return 'warning';
            }
        }
    }

    /**
     * Set the email state on change.
     *
     * @param e
     */
    handleEmailOnChange(e) {
        this.props.dispatch(setUserEmail(e.target.value));
    }

    /**
     * Set the password state on change.
     *
     * @param e
     */
    handlePasswordOnChange(e) {
        this.props.dispatch(setUserPassword(e.target.value));
    }

    /**
     * Check if email and password matches with the credentials
     * and dispatches the userLogin respectively.
     *
     * @param e
     */
    login(e) {
        e.preventDefault();
        const {email, password} = this.props;
        let checkLogin = (userCredentials.emailAddress == email && userCredentials.password == password);

        if (checkLogin) {
            this.props.dispatch(userLogin(checkLogin));
        } else {
            this.props.dispatch(errorMessage());
        }

    }

    render() {
        const {email, password, errorMessage} = this.props;

        if (this.props.isUserLoggedIn) {
            return (
                <Redirect to="/home"/>
            );
        }

        return (
            <div className="container">
                <Form onSubmit={this.login} className="loginForm">
                    <h2>Please sign in</h2>
                    <FormGroup controlId="formBasicText" validationState={this.getValidationState()}>
                        <FormControl
                            type="email"
                            name="emailAddress"
                            value={email}
                            onChange={this.handleEmailOnChange}
                            placeholder="Enter email"
                        />
                        <FormControl.Feedback />
                    </FormGroup>
                    <FormGroup controlId="formBasicText">
                        <FormControl
                            type="password"
                            name="userPassword"
                            value={password}
                            onChange={this.handlePasswordOnChange}
                            placeholder="Enter password"
                        />
                    </FormGroup>
                    {errorMessage ? <h3>{errorMessage}</h3> : ""}
                    <Button
                        type="submit"
                        bsStyle="success"
                        bsSize="large"
                        disabled={!email || !password}
                        block
                    >
                        Submit
                    </Button>
                </Form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return state
};

LoginForm = connect(mapStateToProps)(LoginForm);

export default LoginForm;