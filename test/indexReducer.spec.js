import reducer from '../app/reducers/index'
import {USER_EMAIL, USER_PASSWORD, ERROR_MESSAGE, USER_LOGIN, USER_LOGOUT} from '../app/actions/index'

/**
 * Test reducer.
 */
describe('index reducer', () => {
    it('should return the initial state', () => {
        expect(
            reducer(undefined, {})
        ).toEqual(
            {
                isUserLoggedIn: false,
                email: '',
                password: '',
                errorMessage: ''
            }
        )
    });

    it('should handle USER_EMAIL', () => {
        expect(
            reducer([], {
                type: USER_EMAIL,
                userEmail: 'admin@admin.com'
            })
        ).toEqual(
            {email: 'admin@admin.com'}
        );
    });

    it('should handle USER_LOGIN', () => {
        expect(
            reducer([], {
                type: USER_LOGIN,
                isLoggedIn: true
            })
        ).toEqual(
            {isUserLoggedIn: true}
        );
    });

    it('should handle USER_PASSWORD', () => {
        expect(
            reducer([], {
                type: USER_PASSWORD,
                userPassword: 'admin'
            })
        ).toEqual(
            {password: 'admin'}
        );
    });

    it('should handle USER_LOGOUT', () => {
        expect(
            reducer([], {
                type: USER_LOGOUT
            })
        ).toEqual(
            {
                isUserLoggedIn: false,
                errorMessage: '',
                email: '',
                password: ''
            }
        );
    });

    it('should handle ERROR_MESSAGE', () => {
        expect(
            reducer([], {
                type: ERROR_MESSAGE
            })
        ).toEqual(
            {errorMessage: 'Wrong Credentials.'}
        );
    })
});