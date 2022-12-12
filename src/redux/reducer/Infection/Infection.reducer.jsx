import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as INFECTION from "../../actions/Infection/Infection.actions";

const initialState = {
  infections: null,
  infectionsObj: null,
  loading: false,
  error: null,
};

export const infectionReducer = (state = initialState, action) => {
  switch (action.type) {
    case INFECTION.INFECTION_ADD:
      return {
        ...state,
        loading: true,
      };
    case INFECTION.INFECTION_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case INFECTION.INFECTION_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case INFECTION.GET_ALL_INFECTIONS:
      return {
        ...state,
        loading: true,
      };
    case INFECTION.GET_ALL_INFECTIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        infections: action.payload.data,
      };
    case INFECTION.GET_ALL_INFECTIONS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case INFECTION.DELETE_INFECTION_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case INFECTION.DELETE_INFECTION_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case INFECTION.DELETE_INFECTION_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case INFECTION.UPDATE_INFECTION_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case INFECTION.UPDATE_INFECTION_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case INFECTION.UPDATE_INFECTION_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case INFECTION.SET_INFECTION_OBJ:
      return {
        ...state,
        loading: true,
      };
    case INFECTION.SET_INFECTION_OBJ_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        infectionsObj: action.payload.data,
        loading: false,
        error: null,
      };
    case INFECTION.SET_INFECTION_OBJ_FAIL:
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
