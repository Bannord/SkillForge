import { addManyCustomers } from "../store/CustomerReducer"

export const fetchCustomers = () => {
    return function(dispatch) {
      const baseUrl = 'https://api.github.com/users';
      const pageCount = 5; // Number of pages to fetch (adjust as needed)
      const usersPerPage = 30; // Number of users per page
  
      for (let page = 1; page <= pageCount; page++) {
        const url = `${baseUrl}?since=${(page - 1) * usersPerPage}`;
  
        fetch(url)
          .then(response => response.json())
          .then(json => dispatch(addManyCustomers(json)));
      }
    };
  };
  