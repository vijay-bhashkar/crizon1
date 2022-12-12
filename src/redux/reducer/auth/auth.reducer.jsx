import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import { AUTH, AUTH_FAIL, AUTH_SUCCESS, LOGOUT } from "../../actions/auth/auth.actions";

const initialState = {
  isAuthorized: false,
  user: null,
  role: null,
  token: null,
  loading: false,
  error: null,
};

export const authReducer = (state = initialState, action) => {
  switch (action.type) {
    case AUTH:
      return {
        ...state,
        isAuthorized: false,
        user: null,
        role: null,
        loading: true,
        token: null,
        error: null,
      };
    case AUTH_SUCCESS:
      return {
        ...state,
        isAuthorized: true,
        user: action.payload.user,
        role: action.payload.role,
        loading: false,
        token: action.payload.token,
        error: null,
      };
    case AUTH_FAIL:
      toastError(action.payload);
      return {
        ...state,
        isAuthorized: false,
        user: null,
        role: null,
        token: null,
        loading: false,
        error: action.payload,
      };
    case LOGOUT:
      toastSuccess("Logged Out");
      return { ...initialState };
    default:
      return state;
  }
};
