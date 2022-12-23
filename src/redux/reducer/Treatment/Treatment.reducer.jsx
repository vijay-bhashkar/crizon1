import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as TREATMENT from "../../actions/Treatment/Treatment.actions";

const initialState = {
  treatments: null,
  treatmentsObj: null,
  loading: false,
  error: null,
};

export const treatmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case TREATMENT.TREATMENT_ADD:
      return {
        ...state,
        loading: true,
      };
    case TREATMENT.TREATMENT_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case TREATMENT.TREATMENT_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TREATMENT.GET_ALL_TREATMENTS:
      return {
        ...state,
        loading: true,
      };
    case TREATMENT.GET_ALL_TREATMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        treatments: action.payload.data,
      };
    case TREATMENT.GET_ALL_TREATMENTS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TREATMENT.DELETE_TREATMENT_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case TREATMENT.DELETE_TREATMENT_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case TREATMENT.DELETE_TREATMENT_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TREATMENT.UPDATE_TREATMENT_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case TREATMENT.UPDATE_TREATMENT_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case TREATMENT.UPDATE_TREATMENT_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case TREATMENT.SET_TREATMENT_OBJ:
      return {
        ...state,
        loading: true,
      };
    case TREATMENT.SET_TREATMENT_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        treatmentsObj: action.payload.data,
        loading: false,
        error: null,
      };
    case TREATMENT.SET_TREATMENT_OBJ_FAIL:
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
