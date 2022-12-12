import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as INVESTIGATION from "../../actions/Investigation/Investigation.actions";

const initialState = {
  investigations: null,
  investigationsObj: null,
  loading: false,
  error: null,
};

export const investigationReducer = (state = initialState, action) => {
  switch (action.type) {
    case INVESTIGATION.INVESTIGATION_ADD:
      return {
        ...state,
        loading: true,
      };
    case INVESTIGATION.INVESTIGATION_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case INVESTIGATION.INVESTIGATION_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case INVESTIGATION.GET_ALL_INVESTIGATIONS:
      return {
        ...state,
        loading: true,
      };
    case INVESTIGATION.GET_ALL_INVESTIGATIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        investigations: action.payload.data,
      };
    case INVESTIGATION.GET_ALL_INVESTIGATIONS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case INVESTIGATION.DELETE_INVESTIGATION_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case INVESTIGATION.DELETE_INVESTIGATION_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case INVESTIGATION.DELETE_INVESTIGATION_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case INVESTIGATION.UPDATE_INVESTIGATION_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case INVESTIGATION.UPDATE_INVESTIGATION_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case INVESTIGATION.UPDATE_INVESTIGATION_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case INVESTIGATION.SET_INVESTIGATION_OBJ:
      return {
        ...state,
        loading: true,
      };
    case INVESTIGATION.SET_INVESTIGATION_OBJ_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        investigationsObj: action.payload.data,
        loading: false,
        error: null,
      };
    case INVESTIGATION.SET_INVESTIGATION_OBJ_FAIL:
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
