import {
    USER_LOGIN, userLogin,
    USER_LOGOUT, userLogout,
    USER_EMAIL, setUserEmail,
    USER_PASSWORD, setUserPassword,
    ERROR_MESSAGE, errorMessage
} from '../app/actions/index'

/**
 * Test user login action.
 */
describe('actions', () => {
    it('should create an action for user login', () => {
        const loggedIn = true;
        const expectedAction = {
            type: USER_LOGIN,
            isLoggedIn: loggedIn
        };
        expect(userLogin(loggedIn)).toEqual(expectedAction)
    })
});

/**
 * Test user logout action.
 */
describe('actions', () => {
    it('should create an action for user logout', () => {
        const expectedAction = {
            type: USER_LOGOUT
        };
        expect(userLogout()).toEqual(expectedAction)
    })
});

/**
 * Test set email action.
 */
describe('actions', () => {
    it('should create an action to set email', () => {
        const emailAddress = 'admin@admin.com';
        const expectedAction = {
            type: USER_EMAIL,
            userEmail: emailAddress
        };
        expect(setUserEmail(emailAddress)).toEqual(expectedAction)
    })
});

/**
 * Test set password action.
 */
describe('actions', () => {
    it('should create an action to set password', () => {
        const password = 'admin';
        const expectedAction = {
            type: USER_PASSWORD,
            userPassword: password
        };
        expect(setUserPassword(password)).toEqual(expectedAction)
    })
});

/**
 * Test set error message action.
 */
describe('actions', () => {
    it('should create an action to set error message', () => {
        const expectedAction = {
            type: ERROR_MESSAGE
        };
        expect(errorMessage()).toEqual(expectedAction)
    })
});