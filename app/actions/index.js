/*
 * Action types
 */
export const USER_LOGIN = 'USER_LOGIN';
export const USER_LOGOUT = 'USER_LOGOUT';
export const USER_EMAIL = 'USER_EMAIL';
export const USER_PASSWORD = 'USER_PASSWORD';
export const ERROR_MESSAGE = 'ERROR_MESSAGE';

/*
 * Action creators
 */

/**
 * User login action
 *
 * @param isLoggedIn
 * @returns {{type: string, isLoggedIn: boolean}}
 */
export function userLogin(isLoggedIn) {
    return {type: USER_LOGIN, isLoggedIn}
}

/**
 * Set User email action
 *
 * @param userEmail
 * @returns {{type: string, userEmail: string}}
 */
export function setUserEmail(userEmail) {
    return {type: USER_EMAIL, userEmail}
}

/**
 * Set User password action
 *
 * @param userPassword
 * @returns {{type: string, userPassword: string}}
 */
export function setUserPassword(userPassword) {
    return {type: USER_PASSWORD, userPassword}
}

/**
 * Set credentials error message action
 *
 * @returns {{type: string}}
 */
export function errorMessage() {
    return {type: ERROR_MESSAGE}
}

/**
 * User logout action
 *
 * @returns {{type: string}}
 */
export function userLogout() {
    return {type: USER_LOGOUT}
}