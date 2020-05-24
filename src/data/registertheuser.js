import { registerSuccess, registerUserFound, registerActivated, registerFailed} from '../actions/userAction'
import axios from 'axios';

function registerTheUser(userinfo) {
    const { username, email, password, address, addresses } = userinfo;
    console.log("User Name Is:" + username)
    console.log("Address Is:" + addresses[address])
    console.log("Email Is:" + email)
    console.log("Password Is:" + password)
    return dispatch => {
        dispatch(registerSuccess());
        setTimeout(()=>{dispatch(registerActivated())}, 5000);
        //dispatch(registerActivated());
    }
}

export default registerTheUser;