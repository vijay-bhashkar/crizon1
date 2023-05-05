import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as DOCTOR from "../../actions/Doctor/Doctor.actions";

const initialState = {
  doctors: null,
  hods: null,
  diseases: null,
  total : null,
  totalPages : null,
  doctorObj: null,
  loading: false,
  error: null,
};

export const doctorReducer = (state = initialState, action) => {
  switch (action.type) {
    case DOCTOR.DOCTOR_ADD:
      return {
        ...state,
        loading: true,
      };
    case DOCTOR.DOCTOR_ADD_SUCCESS:
      // toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case DOCTOR.DOCTOR_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DOCTOR.GET_ALL_DOCTORS:
      return {
        ...state,
        loading: true,
      };
    case DOCTOR.GET_ALL_DOCTORS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        doctors: action.payload.data,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
      };
    case DOCTOR.GET_ALL_DOCTORS_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DOCTOR.DELETE_DOCTOR_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case DOCTOR.DELETE_DOCTOR_BY_ID_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DOCTOR.DELETE_DOCTOR_BY_ID_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DOCTOR.UPDATE_DOCTOR_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case DOCTOR.UPDATE_DOCTOR_BY_ID_SUCCESS:
      // toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case DOCTOR.UPDATE_DOCTOR_BY_ID_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DOCTOR.SET_DOCTOR_OBJ:
      return {
        ...state,
        loading: true,
      };
    case DOCTOR.SET_DOCTOR_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        doctorObj: action.payload.data,
        loading: false,
        error: null,
      };
    case DOCTOR.SET_DOCTOR_OBJ_FAIL:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case DOCTOR.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case DOCTOR.GET_ALL_DISEASES_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case DOCTOR.GET_ALL_HODS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case DOCTOR.GET_ALL_HODS_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        hods: action.payload.data
      }

      case DOCTOR.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case DOCTOR.GET_ALL_DISEASES_SUCCESS:
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
