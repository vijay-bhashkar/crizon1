import { toastError, toastSuccess } from "../../../components/Utility/ToastUtils";
import * as CUSTOMER from "../../actions/Customer/Customer.actions";

const initialState = {
  customers: null,
  hods: null,
  diseases: null,
  customerObj: null,
  loading: false,
  error: null,
};

export const customerReducer = (state = initialState, action) => {
  switch (action.type) {
    case CUSTOMER.CUSTOMER_ADD:
      return {
        ...state,
        loading: true,
      };
    case CUSTOMER.CUSTOMER_ADD_SUCCESS:
      toastSuccess(action.payload);

      return {
        ...state,
        loading: false,
      };
    case CUSTOMER.CUSTOMER_ADD_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CUSTOMER.GET_ALL_CUSTOMERS:
      return {
        ...state,
        loading: true,
      };
    case CUSTOMER.GET_ALL_CUSTOMERS_SUCCESS:
      return {
        ...state,
        loading: false,
        error: null,
        customers: action.payload.data,
      };
    case CUSTOMER.GET_ALL_CUSTOMERS_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CUSTOMER.DELETE_CUSTOMER_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case CUSTOMER.DELETE_CUSTOMER_BY_ID_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CUSTOMER.DELETE_CUSTOMER_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CUSTOMER.UPDATE_CUSTOMER_BY_ID:
      return {
        ...state,
        loading: true,
      };
    case CUSTOMER.UPDATE_CUSTOMER_BY_ID_SUCCESS:
      toastSuccess(action.payload);
      return {
        ...state,
        loading: false,
        error: null,
      };
    case CUSTOMER.UPDATE_CUSTOMER_BY_ID_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CUSTOMER.SET_CUSTOMER_OBJ:
      return {
        ...state,
        loading: true,
      };
    case CUSTOMER.SET_CUSTOMER_OBJ_SUCCESS:
      toastSuccess(action.payload.message);
      return {
        ...state,
        customerObj: action.payload.data,
        loading: false,
        error: null,
      };
    case CUSTOMER.SET_CUSTOMER_OBJ_FAIL:
      toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      };

    case CUSTOMER.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case CUSTOMER.GET_ALL_DISEASES_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case CUSTOMER.GET_ALL_HODS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case CUSTOMER.GET_ALL_HODS_SUCCESS:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        hods: action.payload.data
      }

      case CUSTOMER.GET_ALL_DISEASES:
      // toastError(action.payload);
      return {
        ...state,
        loading: false,
        error: action.payload,
      }

      case CUSTOMER.GET_ALL_DISEASES_SUCCESS:
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
