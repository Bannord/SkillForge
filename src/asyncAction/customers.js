import { addManyCustomers } from "../store/CustomerReducer"

export const fetchCustomers = () => {
    return function(dispatch) {
        fetch('https://api.github.com/users')
        .then(response => response.json())
        .then(json => dispatch(addManyCustomers(json)))
    }
}