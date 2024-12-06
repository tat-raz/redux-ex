import { addManyCustomersAction } from "../store/customerReducer";

export const fetchCustomers = () => {
    return function(dispatch) {
        fetch("./users.json")
            .then(response => response.json())
            .then(json => dispatch(addManyCustomersAction(json)))
            .catch(error => console.error('Error fetching customers:', error));
    }
};