import { loginPending, loginSuccess, loginFailed } from '../actions/userAction'
import axios from 'axios';

function loginValidator(logincredentials) {
    const { email, password } = logincredentials;
    console.log("Email Is:" + email)
    console.log("Password Is:" + password)
    return dispath => {
        dispath(loginPending());
        setTimeout(()=>{dispath(loginSuccess())}, 3000)
        //dispath(loginSuccess());
    }
}

export default loginValidator;