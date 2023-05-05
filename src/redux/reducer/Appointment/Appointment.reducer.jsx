import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as APPOINTMENT from "../../actions/Appointment/Appointment.actions";

const initialState = {
  appointments: null,
  appointmentObj: null,
  loading: false,
  error: null,
  total: null,
  totalPages: null,
};

export const appointmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case APPOINTMENT.APPOINTMENT_ADD:
      return {
        ...state,
        loading: true,
      };
    case APPOINTMENT.APPOINTMENT_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case APPOINTMENT.APPOINTMENT_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case APPOINTMENT.GET_ALL_APPOINTMENTS:
      return {
        ...state,
        loading: true,
      };
    case APPOINTMENT.GET_ALL_APPOINTMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        appointments: action.payload.data,
        total: action.payload.total,
        totalPages: action.payload.totalPages,
      };
    case APPOINTMENT.GET_ALL_APPOINTMENTS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case APPOINTMENT.DELETE_APPOINTMENT_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case APPOINTMENT.DELETE_APPOINTMENT_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case APPOINTMENT.DELETE_APPOINTMENT_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case APPOINTMENT.UPDATE_APPOINTMENT_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case APPOINTMENT.UPDATE_APPOINTMENT_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case APPOINTMENT.UPDATE_APPOINTMENT_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case APPOINTMENT.SET_APPOINTMENT_OBJ:
      return {
        ...state,
        loading: true,
      };
    case APPOINTMENT.SET_APPOINTMENT_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        appointmentObj: action.payload.data,
        loading: false,
        error: null,
      };
    case APPOINTMENT.SET_APPOINTMENT_OBJ_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case APPOINTMENT.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case APPOINTMENT.GET_ALL_DISEASES_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case APPOINTMENT.GET_ALL_HODS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case APPOINTMENT.GET_ALL_HODS_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        hods: action.payload.data
      }

      case APPOINTMENT.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case APPOINTMENT.GET_ALL_DISEASES_SUCCESS:
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
