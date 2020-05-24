import { loginPending, loginSuccess, loginFailed } from '../actions/userAction'
import axios from 'axios';

function loginValidator(logincredentials) {
    const { email, password } = logincredentials;
    console.log("Email Is:" + email)
    console.log("Password Is:" + password)
    return dispatch => {
        dispatch(loginPending());
        setTimeout(()=>{dispatch(loginSuccess())}, 1000);
        //dispath(loginSuccess());
    }
}

export default loginValidator;