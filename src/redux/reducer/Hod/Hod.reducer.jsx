import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as HOD from "../../actions/Hod/Hod.actions";

const initialState = {
  hods: null,
  diseases: null,
  hodObj: null,
  loading: false,
  error: null,
};

export const hodReducer = (state = initialState, action) => {
  switch (action.type) {
    case HOD.HOD_ADD:
      return {
        ...state,
        loading: true,
      };
    case HOD.HOD_ADD_SUCCESS:
      // toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case HOD.HOD_ADD_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case HOD.GET_ALL_HODS:
      return {
        ...state,
        loading: true,
      };
    case HOD.GET_ALL_HODS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        hods: action.payload.data,
      };

   
    case HOD.GET_ALL_HODS_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case HOD.DELETE_HOD_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case HOD.DELETE_HOD_BY_ID_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case HOD.DELETE_HOD_BY_ID_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case HOD.UPDATE_HOD_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case HOD.UPDATE_HOD_BY_ID_SUCCESS:
      // toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case HOD.UPDATE_HOD_BY_ID_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case HOD.SET_HOD_OBJ:
      return {
        ...state,
        loading: true,
      };
    case HOD.SET_HOD_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        hodObj: action.payload.data,
        loading: false,
        error: null,
      };
     
    case HOD.SET_HOD_OBJ_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case HOD.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case HOD.GET_ALL_DISEASES_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        diseases: action.payload.data
      }

    default:
      return state;
  }
};
