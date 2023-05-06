import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as FOLLOWUP from "../../actions/FollowUp/FollowUp.actions";

const initialState = {
  followups: null,
  hods: null,
  diseases: null,
  followupObj: null,
  loading: false,
  error: null,
  paginatedData: null,
  total: null
};

export const followupReducer = (state = initialState, action) => {
  switch (action.type) {
    case FOLLOWUP.FOLLOWUP_ADD:
      return {
        ...state,
        loading: true,
      };
    case FOLLOWUP.FOLLOWUP_ADD_SUCCESS:
      // toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case FOLLOWUP.FOLLOWUP_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FOLLOWUP.GET_ALL_FOLLOWUPS:
      return {
        ...state,
        loading: true,
      };
    case FOLLOWUP.GET_ALL_FOLLOWUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        followups: action.payload.data,
        total: action.payload.total,
        paginatedData: action?.paginatedObj
      };
    case FOLLOWUP.GET_ALL_FOLLOWUPS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FOLLOWUP.DELETE_FOLLOWUP_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case FOLLOWUP.DELETE_FOLLOWUP_BY_ID_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FOLLOWUP.DELETE_FOLLOWUP_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FOLLOWUP.UPDATE_FOLLOWUP_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case FOLLOWUP.UPDATE_FOLLOWUP_BY_ID_SUCCESS:
      // toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case FOLLOWUP.UPDATE_FOLLOWUP_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FOLLOWUP.SET_FOLLOWUP_OBJ:
      return {
        ...state,
        loading: true,
      };
    case FOLLOWUP.SET_FOLLOWUP_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        followupObj: action.payload.data,
        loading: false,
        error: null,
      };
    case FOLLOWUP.SET_FOLLOWUP_OBJ_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case FOLLOWUP.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case FOLLOWUP.GET_ALL_DISEASES_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case FOLLOWUP.GET_ALL_HODS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case FOLLOWUP.GET_ALL_HODS_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        hods: action.payload.data
      }

      case FOLLOWUP.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case FOLLOWUP.GET_ALL_DISEASES_SUCCESS:
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
