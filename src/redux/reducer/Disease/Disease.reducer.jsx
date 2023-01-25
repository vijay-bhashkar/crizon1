import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as DISEASE from "../../actions/Disease/Disease.actions";

const initialState = {
  hods: null,
  diseases: null,
  diseaseObj: null,
  loading: false,
  error: null,
};

export const diseaseReducer = (state = initialState, action) => {
  switch (action.type) {
    case DISEASE.DISEASE_ADD:
      return {
        ...state,
        loading: true,
      };
    case DISEASE.DISEASE_ADD_SUCCESS:
      // toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case DISEASE.DISEASE_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DISEASE.GET_ALL_DISEASES:
      return {
        ...state,
        loading: true,
      };
    case DISEASE.GET_ALL_DISEASES_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        diseases: action.payload.data,
      };
    case DISEASE.GET_ALL_DISEASES_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DISEASE.DELETE_DISEASE_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case DISEASE.DELETE_DISEASE_BY_ID_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DISEASE.DELETE_DISEASE_BY_ID_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DISEASE.UPDATE_DISEASE_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case DISEASE.UPDATE_DISEASE_BY_ID_SUCCESS:
      // toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DISEASE.UPDATE_DISEASE_BY_ID_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DISEASE.SET_DISEASE_OBJ:
      return {
        ...state,
        loading: true,
      };
    case DISEASE.SET_DISEASE_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        diseaseObj: action.payload.data,
        loading: false,
        error: null,
      };
    case DISEASE.SET_DISEASE_OBJ_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DISEASE.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case DISEASE.GET_ALL_DISEASES_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case DISEASE.GET_ALL_HODS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      // case DISEASE.GET_ALL_HODS_SUCCESS:
      // // toastError(action.payload);
      // return {
      //   ...state,
      //   loading: false,
      //   hods: action.payload.data
      // }

      case DISEASE.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case DISEASE.GET_ALL_DISEASES_SUCCESS:
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
