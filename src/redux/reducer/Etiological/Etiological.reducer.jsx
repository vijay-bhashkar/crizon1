import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as ETIOLOGICAL from "../../actions/Etiological/Etiological.actions";

const initialState = {
  etiologicals: null,
  etiologicalobj: null,
  loading: false,
  error: null,
};

export const etiologicalReducer = (state = initialState, action) => {
  switch (action.type) {
    case ETIOLOGICAL.ETIOLOGICAL_ADD:
      return {
        ...state,
        loading: true,
      };
    case ETIOLOGICAL.ETIOLOGICAL_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case ETIOLOGICAL.ETIOLOGICAL_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ETIOLOGICAL.GET_ALL_ETIOLOGICALS:
      return {
        ...state,
        loading: true,
      };
    case ETIOLOGICAL.GET_ALL_ETIOLOGICALS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        etiologicals : action.payload.data,
      };
    case ETIOLOGICAL.GET_ALL_ETIOLOGICALS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ETIOLOGICAL.DELETE_ETIOLOGICAL_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case ETIOLOGICAL.DELETE_ETIOLOGICAL_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ETIOLOGICAL.DELETE_ETIOLOGICAL_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ETIOLOGICAL.UPDATE_ETIOLOGICAL_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case ETIOLOGICAL.UPDATE_ETIOLOGICAL_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case ETIOLOGICAL.UPDATE_ETIOLOGICAL_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case ETIOLOGICAL.SET_ETIOLOGICAL_OBJ:
      return {
        ...state,
        loading: true,
      };
    case ETIOLOGICAL.SET_ETIOLOGICAL_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        etiologicalobj : action.payload.data,
        loading: false,
        error: null,
      };
    case ETIOLOGICAL.SET_ETIOLOGICAL_OBJ_FAIL:
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
