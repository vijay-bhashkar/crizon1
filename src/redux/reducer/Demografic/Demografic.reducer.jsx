import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as DEMOGRAFIC from "../../actions/Demografic/Demografic.actions";

const initialState = {
  demografics: null,
  doctors: null,
  demograficObj: null,
  loading: false,
  error: null,
};

export const demograficReducer = (state = initialState, action) => {
  switch (action.type) {
    case DEMOGRAFIC.DEMOGRAFIC_ADD:
      return {
        ...state,
        loading: true,
      };
    case DEMOGRAFIC.DEMOGRAFIC_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case DEMOGRAFIC.DEMOGRAFIC_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DEMOGRAFIC.GET_ALL_DEMOGRAFICS:
      return {
        ...state,
        loading: true,
      };
    case DEMOGRAFIC.GET_ALL_DEMOGRAFICS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        demografics: action.payload.data,
      };
    case DEMOGRAFIC.GET_ALL_DEMOGRAFICS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DEMOGRAFIC.DELETE_DEMOGRAFIC_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case DEMOGRAFIC.DELETE_DEMOGRAFIC_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DEMOGRAFIC.DELETE_DEMOGRAFIC_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DEMOGRAFIC.UPDATE_DEMOGRAFIC_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case DEMOGRAFIC.UPDATE_DEMOGRAFIC_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DEMOGRAFIC.UPDATE_DEMOGRAFIC_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DEMOGRAFIC.SET_DEMOGRAFIC_OBJ:
      return {
        ...state,
        loading: true,
      };
    case DEMOGRAFIC.SET_DEMOGRAFIC_OBJ_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        demograficObj: action.payload.data,
        loading: false,
        error: null,
      };
    case DEMOGRAFIC.SET_DEMOGRAFIC_OBJ_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    case DEMOGRAFIC.GET_ALL_DOCTORS:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }
  
    case DEMOGRAFIC.GET_ALL_DOCTORS_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        doctors: action.payload.data
      }

    default:
      return state;
  }
};
