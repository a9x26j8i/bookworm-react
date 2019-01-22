import { USER_LOGGED_IN } from "../types";
import api from "../api";

//normal redux action{ userLoggedin } connect
const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));

// export const login = credentials => {
//   let p = api.user.login(credentials);
//   return dispatch => p.then(user => dispatch(userLoggedIn(user)));
// };

//mapDispatch-thunk
export const mapDispatchToProps = dispatch => {
  return {
    login: credentials => {
      return api.user
        .login(credentials)
        .then(user => dispatch(userLoggedIn(user)));
    }
  };
};
