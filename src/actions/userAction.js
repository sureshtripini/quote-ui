const LOGIN_PENDING = 'LOGIN_PENDING';
const LOGIN_SUCCESS = 'LOGIN_SUCCESS';
const LOGIN_FAILED = 'LOGIN_FAILED';


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
