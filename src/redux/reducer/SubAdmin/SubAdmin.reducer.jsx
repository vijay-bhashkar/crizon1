import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as SUBADMIN from "../../actions/SubAdmin/SubAdmin.actions";

const initialState = {
  subAdmins: null,
  subAdminsObj: null,
  loading: false,
  error: null,
  total: null,
  totalPages: null,
};

export const subAdminReducer = (state = initialState, action) => {
  switch (action.type) {
    case SUBADMIN.SUBADMIN_ADD:
      return {
        ...state,
        loading: true,
      };
    case SUBADMIN.SUBADMIN_ADD_SUCCESS:
      // toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case SUBADMIN.SUBADMIN_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SUBADMIN.GET_ALL_SUBADMINS:
      return {
        ...state,
        loading: true,
      };
    case SUBADMIN.GET_ALL_SUBADMINS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        subAdmins: action.payload.data,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
      };
    case SUBADMIN.GET_ALL_SUBADMINS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SUBADMIN.DELETE_SUBADMIN_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case SUBADMIN.DELETE_SUBADMIN_BY_ID_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case SUBADMIN.DELETE_SUBADMIN_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SUBADMIN.UPDATE_SUBADMIN_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case SUBADMIN.UPDATE_SUBADMIN_BY_ID_SUCCESS:
      // toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case SUBADMIN.UPDATE_SUBADMIN_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case SUBADMIN.SET_SUBADMIN_OBJ:
      return {
        ...state,
        loading: true,
      };
    case SUBADMIN.SET_SUBADMIN_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        subAdminsObj: action.payload.data,
        loading: false,
        error: null,
      };
    case SUBADMIN.SET_SUBADMIN_OBJ_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    default:
      return state;
  }
};
