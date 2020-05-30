const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';
const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_ACTIVATED = 'REGISTER_ACTIVATED';
const REGISTER_USER_FOUND = 'REGISTER_USER_FOUND';
const REGISTER_FAILED = 'REGISTER_FAILED';


export const loginPending = logininfo => ({
    type: LOGIN_PENDING,
    payload: logininfo
})

export const loginSuccess = logininfo => ({
    type: LOGIN_SUCCESS,
    payload: logininfo
})

export const loginFailed = error => ({
    type: LOGIN_FAILED,
    payload: error
})

export const registerSuccess = registerinfo => ({
    type: REGISTER_SUCCESS,
    payload: registerinfo
})

export const registerActivated = registerinfo => ({
    type: REGISTER_ACTIVATED,
    payload: registerinfo
})

export const registerUserFound = registerinfo => ({
    type: REGISTER_USER_FOUND,
    payload: registerinfo
})

export const registerFailed = error => ({
    type: REGISTER_FAILED,
    payload: error
})