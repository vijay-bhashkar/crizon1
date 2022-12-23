import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as CLINICALHISTORY from "../../actions/ClinicalHistory/ClinicalHistory.actions";

const initialState = {
  clinicalHistories: null,
  clinicalHistoriesObj: null,
  loading: false,
  error: null,
};

export const clinicalHistoryReducer = (state = initialState, action) => {
  switch (action.type) {
    case CLINICALHISTORY.CLINICALHISTORY_ADD:
      return {
        ...state,
        loading: true,
      };
    case CLINICALHISTORY.CLINICALHISTORY_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case CLINICALHISTORY.CLINICALHISTORY_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLINICALHISTORY.GET_ALL_CLINICALHISTORYS:
      return {
        ...state,
        loading: true,
      };
    case CLINICALHISTORY.GET_ALL_CLINICALHISTORYS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        clinicalHistories: action.payload.data,
      };
    case CLINICALHISTORY.GET_ALL_CLINICALHISTORYS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLINICALHISTORY.DELETE_CLINICALHISTORY_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case CLINICALHISTORY.DELETE_CLINICALHISTORY_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CLINICALHISTORY.DELETE_CLINICALHISTORY_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLINICALHISTORY.UPDATE_CLINICALHISTORY_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case CLINICALHISTORY.UPDATE_CLINICALHISTORY_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CLINICALHISTORY.UPDATE_CLINICALHISTORY_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CLINICALHISTORY.SET_CLINICALHISTORY_OBJ:
      return {
        ...state,
        loading: true,
      };
    case CLINICALHISTORY.SET_CLINICALHISTORY_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        clinicalHistoriesObj: action.payload.data,
        loading: false,
        error: null,
      };
    case CLINICALHISTORY.SET_CLINICALHISTORY_OBJ_FAIL:
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
