import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as NUTRITION from "../../actions/Nutrition/Nutrition.actions";

const initialState = {
  nutritions: null,
  nutritionsObj: null,
  loading: false,
  error: null,
};

export const nutritionReducer = (state = initialState, action) => {
  switch (action.type) {
    case NUTRITION.NUTRITION_ADD:
      return {
        ...state,
        loading: true,
      };
    case NUTRITION.NUTRITION_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case NUTRITION.NUTRITION_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case NUTRITION.GET_ALL_NUTRITIONS:
      return {
        ...state,
        loading: true,
      };
    case NUTRITION.GET_ALL_NUTRITIONS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        nutritions: action.payload.data,
      };
    case NUTRITION.GET_ALL_NUTRITIONS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case NUTRITION.DELETE_NUTRITION_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case NUTRITION.DELETE_NUTRITION_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case NUTRITION.DELETE_NUTRITION_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case NUTRITION.UPDATE_NUTRITION_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case NUTRITION.UPDATE_NUTRITION_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case NUTRITION.UPDATE_NUTRITION_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case NUTRITION.SET_NUTRITION_OBJ:
      return {
        ...state,
        loading: true,
      };
    case NUTRITION.SET_NUTRITION_OBJ_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        nutritionsObj: action.payload.data,
        loading: false,
        error: null,
      };
    case NUTRITION.SET_NUTRITION_OBJ_FAIL:
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
