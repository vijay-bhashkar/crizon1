import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as LEVERPERDETAIL from "../../actions/LeverPerDetail/LeverPerDetail.actions";

const initialState = {
  leverPerDetails: null,
  leverPerDetailObj: null,
  loading: false,
  error: null,
  paginatedData:null,
  total: null
};

export const leverPerDetailReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEVERPERDETAIL.LEVERPERDETAIL_ADD:
      return {
        ...state,
        loading: true,
      };
    case LEVERPERDETAIL.LEVERPERDETAIL_ADD_SUCCESS:
     // toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case LEVERPERDETAIL.LEVERPERDETAIL_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERPERDETAIL.GET_ALL_LEVERPERDETAILS:
      return {
        ...state,
        loading: true,
      };
    case LEVERPERDETAIL.GET_ALL_LEVERPERDETAILS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        leverPerDetails: action.payload.data,
        paginatedData:action?.paginatedObj,
        total: action.payload.total,
      };
    case LEVERPERDETAIL.GET_ALL_LEVERPERDETAILS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERPERDETAIL.DELETE_LEVERPERDETAIL_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case LEVERPERDETAIL.DELETE_LEVERPERDETAIL_BY_ID_SUCCESS:
      //toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LEVERPERDETAIL.DELETE_LEVERPERDETAIL_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERPERDETAIL.UPDATE_LEVERPERDETAIL_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case LEVERPERDETAIL.UPDATE_LEVERPERDETAIL_BY_ID_SUCCESS:
     // toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LEVERPERDETAIL.UPDATE_LEVERPERDETAIL_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERPERDETAIL.SET_LEVERPERDETAIL_OBJ:
      return {
        ...state,
        loading: true,
      };
    case LEVERPERDETAIL.SET_LEVERPERDETAIL_OBJ_SUCCESS:
      return {
        ...state,
        leverPerDetailObj : action.payload.data ,
        loading: false,
        error: null,
      };
    case LEVERPERDETAIL.SET_LEVERPERDETAIL_OBJ_FAIL:
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
