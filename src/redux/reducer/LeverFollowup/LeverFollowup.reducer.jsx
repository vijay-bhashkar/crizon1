import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as LEVERFOLLOWUP from "../../actions/LeverFollowup/LeverFollowup.actions";

const initialState = {
  leverfollowups: null,
  hods: null,
  diseases: null,
  leverfollowupObj: null,
  loading: false,
  error: null,
};

export const leverFollowupReducer = (state = initialState, action) => {
  switch (action.type) {
    case LEVERFOLLOWUP.LEVERFOLLOWUP_ADD:
      return {
        ...state,
        loading: true,
      };
    case LEVERFOLLOWUP.LEVERFOLLOWUP_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case LEVERFOLLOWUP.LEVERFOLLOWUP_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERFOLLOWUP.GET_ALL_LEVERFOLLOWUPS:
      return {
        ...state,
        loading: true,
      };
    case LEVERFOLLOWUP.GET_ALL_LEVERFOLLOWUPS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        leverfollowups: action.payload.data,
      };
    case LEVERFOLLOWUP.GET_ALL_LEVERFOLLOWUPS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERFOLLOWUP.DELETE_LEVERFOLLOWUP_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case LEVERFOLLOWUP.DELETE_LEVERFOLLOWUP_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LEVERFOLLOWUP.DELETE_LEVERFOLLOWUP_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERFOLLOWUP.UPDATE_LEVERFOLLOWUP_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case LEVERFOLLOWUP.UPDATE_LEVERFOLLOWUP_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case LEVERFOLLOWUP.UPDATE_LEVERFOLLOWUP_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERFOLLOWUP.SET_LEVERFOLLOWUP_OBJ:
      return {
        ...state,
        loading: true,
      };
    case LEVERFOLLOWUP.SET_LEVERFOLLOWUP_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        leverfollowupObj: action.payload.data,
        loading: false,
        error: null,
      };
    case LEVERFOLLOWUP.SET_LEVERFOLLOWUP_OBJ_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case LEVERFOLLOWUP.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case LEVERFOLLOWUP.GET_ALL_DISEASES_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case LEVERFOLLOWUP.GET_ALL_HODS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case LEVERFOLLOWUP.GET_ALL_HODS_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        hods: action.payload.data
      }

      case LEVERFOLLOWUP.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case LEVERFOLLOWUP.GET_ALL_DISEASES_SUCCESS:
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
