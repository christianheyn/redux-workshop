const { createStore } = require('redux');

const initialState = {
    name: '?',
    email: '?',
    login: false,
};

const UDPATE_USEREMAIL = 'UDPATE_USEREMAIL';
const UPDATE_USERNAME = 'UPDATE_USERNAME'
const LOGIN = 'LOGIN';
const LOGOUT = 'LOGOUT';

const userReducer = (state = initialState, action) => {
    switch (action.type) {
        case UDPATE_USEREMAIL:
            return { ...state, email: action.payload };
        case UPDATE_USERNAME:
            return { ...state, name: action.payload };
        case LOGIN:
            return { ...state, login: true };
        case LOGOUT:
            return { ...state, login: false };
        default:
            return state;
    }
};

const store = createStore(userReducer);

store.subscribe(() => console.log(store.getState()));

store.dispatch({ type: LOGIN });
store.dispatch({ type: UPDATE_USERNAME, payload: 'Billy' });
store.dispatch({ type: 'UNKNOWN', payload: 'HANS' });