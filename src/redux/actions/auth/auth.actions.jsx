import { login } from "../../../services/users.service";
import jwtDecode from "jwt-decode";
export const AUTH = "AUTH";
export const AUTH_SUCCESS = "AUTH_SUCCESS";
export const AUTH_FAIL = "AUTH_FAIL";
export const LOGOUT = "LOGOUT";

export const loginUser = (formData) => async (dispatch) => {
  try {
    dispatch({ type: AUTH });
    let { data: response } = await login(formData);
    if (response) {
      console.log(response);
      let decodedToken = await jwtDecode(response.token);
      console.log(decodedToken, "decodedToken");
      localStorage.setItem("token", response.token);
      dispatch({
        type: AUTH_SUCCESS,
        payload: {
          ...response.data,
          token: response.token,
          role: decodedToken.role,
          user: decodedToken.user,
        },
      });
    }
  } catch (err) {
    console.error(err);
    dispatch({ type: AUTH_FAIL, payload: err });
  }
};

export const logoutUser = () => async (dispatch) => {
  dispatch({ type: LOGOUT });
};
