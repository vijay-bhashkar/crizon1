import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as DEPRESSION from "../../actions/Depression/Depression.actions";

const initialState = {
  depressions: null,
  depressionObj: null,
  loading: false,
  error: null,
};

export const depressionReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEPRESSION.DEPRESSION_ADD:
      return {
        ...state,
        loading: true,
      };
    case DEPRESSION.DEPRESSION_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case DEPRESSION.DEPRESSION_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DEPRESSION.GET_ALL_DEPRESSIONS:
      return {
        ...state,
        loading: true,
      };
    case DEPRESSION.GET_ALL_DEPRESSIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        depressions: action.payload.data,
      };
    case DEPRESSION.GET_ALL_DEPRESSIONS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DEPRESSION.DELETE_DEPRESSION_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case DEPRESSION.DELETE_DEPRESSION_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DEPRESSION.DELETE_DEPRESSION_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DEPRESSION.UPDATE_DEPRESSION_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case DEPRESSION.UPDATE_DEPRESSION_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DEPRESSION.UPDATE_DEPRESSION_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DEPRESSION.SET_DEPRESSION_OBJ:
      return {
        ...state,
        loading: true,
      };
    case DEPRESSION.SET_DEPRESSION_OBJ_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        depressionObj: action.payload.data,
        loading: false,
        error: null,
      };
    case DEPRESSION.SET_DEPRESSION_OBJ_FAIL:
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
