const REGISTER_SUCCESS = 'REGISTER_SUCCESS';
const REGISTER_ACTIVATED = 'REGISTER_ACTIVATED';
const REGISTER_USER_FOUND = 'REGISTER_USER_FOUND';
const REGISTER_FAILED = 'REGISTER_FAILED';

const registerreducer = (state = { isRegistered: false, isActivated: false, registerReason: ' ' }, 
                                action) => {
    // write Reducers to handle the actions.
    switch (action.type) {
        case REGISTER_SUCCESS:
            return (
                {
                    isRegistered: true,
                    isActivated: false
                });
        case REGISTER_ACTIVATED:
            return (
                {
                    isRegistered: true,
                    isActivated: true
                });
        case REGISTER_USER_FOUND:
            return (
                {
                    isRegistered: false,
                    isActivated: false,
                    registerReason: 'USER_FOUND'
                });
        case REGISTER_FAILED:
            return (
                {
                    isRegistered: false,
                    isActivated: false
                });              
        default:
            return state;

    }
}

export default registerreducer;