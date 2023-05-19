import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as PREVIOUSTREATMENT from "../../actions/PreviousTreatment/PreviousTreatment.actions";

const initialState = {
  previousTreatments: null,
  previousTreatmentsObj: null,
  loading: false,
  error: null,
};

export const previousTreatmentReducer = (state = initialState, action) => {
  switch (action.type) {
    case PREVIOUSTREATMENT.PREVIOUSTREATMENT_ADD:
      return {
        ...state,
        loading: true,
      };
    case PREVIOUSTREATMENT.PREVIOUSTREATMENT_ADD_SUCCESS:
      // toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case PREVIOUSTREATMENT.PREVIOUSTREATMENT_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PREVIOUSTREATMENT.GET_ALL_PREVIOUSTREATMENTS:
      return {
        ...state,
        loading: true,
      };
    case PREVIOUSTREATMENT.GET_ALL_PREVIOUSTREATMENTS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        previousTreatments: action.payload.data,
      };
    case PREVIOUSTREATMENT.GET_ALL_PREVIOUSTREATMENTS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PREVIOUSTREATMENT.DELETE_PREVIOUSTREATMENT_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case PREVIOUSTREATMENT.DELETE_PREVIOUSTREATMENT_BY_ID_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case PREVIOUSTREATMENT.DELETE_PREVIOUSTREATMENT_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PREVIOUSTREATMENT.UPDATE_PREVIOUSTREATMENT_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case PREVIOUSTREATMENT.UPDATE_PREVIOUSTREATMENT_BY_ID_SUCCESS:
      // toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case PREVIOUSTREATMENT.UPDATE_PREVIOUSTREATMENT_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case PREVIOUSTREATMENT.SET_PREVIOUSTREATMENT_OBJ:
      return {
        ...state,
        loading: true,
      };
    case PREVIOUSTREATMENT.SET_PREVIOUSTREATMENT_OBJ_SUCCESS:
      // toastSuccess(action.payload.message);
      return {
        ...state,
        previousTreatmentsObj: action.payload.data,
        loading: false,
        error: null,
      };
    case PREVIOUSTREATMENT.SET_PREVIOUSTREATMENT_OBJ_FAIL:
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
