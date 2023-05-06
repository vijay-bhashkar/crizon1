import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as LEVERHISTORY from "../../actions/LeverHistory/LeverHistory.actions";

const initialState = {
  leverHistories: null,
  leverHistoryobj: null,
  loading: false,
  error: null,
};

export const leverHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEVERHISTORY.LEVERHISTORY_ADD:
      return {
        ...state,
        loading: true,
      };
    case LEVERHISTORY.LEVERHISTORY_ADD_SUCCESS:
      // toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case LEVERHISTORY.LEVERHISTORY_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERHISTORY.GET_ALL_LEVERHISTORYS:
      return {
        ...state,
        loading: true,
      };
    case LEVERHISTORY.GET_ALL_LEVERHISTORYS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        leverHistories : action.payload.data,
      };
    case LEVERHISTORY.GET_ALL_LEVERHISTORYS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERHISTORY.DELETE_LEVERHISTORY_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case LEVERHISTORY.DELETE_LEVERHISTORY_BY_ID_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LEVERHISTORY.DELETE_LEVERHISTORY_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERHISTORY.UPDATE_LEVERHISTORY_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case LEVERHISTORY.UPDATE_LEVERHISTORY_BY_ID_SUCCESS:
      // toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LEVERHISTORY.UPDATE_LEVERHISTORY_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERHISTORY.SET_LEVERHISTORY_OBJ:
      return {
        ...state,
        loading: true,
      };
    case LEVERHISTORY.SET_LEVERHISTORY_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        leverHistoryobj : action.payload.data,
        loading: false,
        error: null,
      };
    case LEVERHISTORY.SET_LEVERHISTORY_OBJ_FAIL:
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
