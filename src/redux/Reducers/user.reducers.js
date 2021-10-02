import { REGISTER, LOGIN, GET_ERROR } from "../Actions/user.actions";

const token = localStorage.getItem("token");

const initialState = token
    ? {
          isLogged: true,
          data: [],
          error: null,
      }
    : {
          isLogged: false,
          data: [],
          error: null,
      };

const User = (state = initialState, action) => {
    switch (action.type) {
        case REGISTER:
            return {
                registerData: action.payload,
            };
        case LOGIN:
            return {
                ...state,
                isLogged: true,
            };
        case GET_ERROR:
            return {
                ...state,
                error: action.payload,
            };
        default:
            return state;
    }
};

export default User;
