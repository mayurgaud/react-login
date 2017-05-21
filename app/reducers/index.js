export default (state = {
    isUserLoggedIn: false,
    email: '',
    password: '',
    errorMessage: ''
}, action) => {
    switch (action.type) {
        case 'USER_LOGIN':
            return {...state, isUserLoggedIn: action.isLoggedIn};
        case 'USER_EMAIL':
            return {...state, email: action.userEmail};
        case 'USER_PASSWORD':
            return {...state, password: action.userPassword};
        case 'USER_LOGOUT':
            return {
                ...state,
                isUserLoggedIn: false,
                errorMessage: '',
                email: '',
                password: ''
            };
        case 'ERROR_MESSAGE':
            return {...state, errorMessage: 'Wrong Credentials.'};
        default:
            return state
    }
}