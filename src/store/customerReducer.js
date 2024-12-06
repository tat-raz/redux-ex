const ADD_CUSTOMER = "ADD_CUSTOMER";
const ADD_MANY_CUSTOMERS = "ADD_MANY_CUSTOMERS";
const REMOVE_CUSTOMER = "REMOVE_CUSTOMER";

const defaultState = {
  customers: [],
};

export const customerReducer = (state = defaultState, action) => {
  switch (action.type) {
      case ADD_CUSTOMER:
          return {
              ...state,
              customers: [...state.customers, action.payload],
          };

      case REMOVE_CUSTOMER:
          return {
              ...state,
              customers: state.customers.filter(customer => customer.id !== action.payload),
          };

      case ADD_MANY_CUSTOMERS:
          const filteredCustomers = action.payload.filter(
              newCustomer => !state.customers.some(existing => existing.id === newCustomer.id)
          );
          return {
              ...state,
              customers: [...state.customers, ...filteredCustomers],
          };

      default:
          return state;
  }
};

export const addCustomerAction = (payload) => ({type: ADD_CUSTOMER, payload})
export const addManyCustomersAction = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})
export const removeCustomerAction = (payload) => ({type: REMOVE_CUSTOMER, payload})