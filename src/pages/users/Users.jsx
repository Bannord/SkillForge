import React, { useEffect } from "react";

import { useDispatch, useSelector } from "react-redux";
import { fetchCustomers } from "../../asyncAction/customers";
import { useState } from "react";
import Input from "../../components/UI/input/Input";
import FilterPopUp from "../../components/UI/filterPopup/FilterPopup";
import Pagination from "../../components/UI/pagination/Pagination";
import CardsPopUp from "../../components/CardsPopUp/CardsPopUp";

const Users = () => {
  const [open, setOpen] = useState(false);

  

  const [showPopup, setShowPopup] = useState(false);

  const [searchQuery, setSearchQuery] = useState("");

  const [selectedUser, setSelectedUser] = useState(null);

  const customers = useSelector((state) => state.customers.customers);

  const dispatch = useDispatch();

  const [currentPage, setCurrentPage] = useState(1);
  const [usersPage] = useState(30);

  const closePopUp = () => {
    setShowPopup(false);
  };

  const handleUserClick = (userId) => {
    const user = customers.find((user) => user.id === userId);
    setSelectedUser(user);

    setShowPopup(true);
  };

  const handleSearchInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  useEffect(() => {
    dispatch(fetchCustomers());
  }, [dispatch, currentPage]);

  const indexOfLastUser = currentPage * usersPage;
  const indexOfFirstUser = indexOfLastUser - usersPage;
  const currentUsers = customers.slice(indexOfFirstUser, indexOfLastUser);

  const handleNextPage = () => {
    setCurrentPage((prevPage) => prevPage + 1);
  };

  const handlePreviousPage = () => {
    setCurrentPage((prevPage) => prevPage - 1);
  };
  return (
    <>
      <div className="search_bar_wrapper">
        
        <Input
         value={searchQuery}
         onChange={handleSearchInputChange}
         placeholder="find user"

        />

        <FilterPopUp 
        setOpen={setOpen}
        open={open}
        />
      </div>
     
      <div className="content_wrapper">
        {currentUsers
          .filter((el) =>
            el.login.toLowerCase().includes(searchQuery.toLowerCase())
          )
          .map((el) => (
            <div
              className="block_user"
              key={el.id}
              onClick={() => handleUserClick(el.id)}
            >
              <div className="img_wrapper">
                <img src={el.avatar_url} alt="img_user" className="img_user" />
              </div>
              <div className="name_user">{el.login}</div>
            </div>
          ))}
      </div>
     <Pagination 
     handleNextPage={handleNextPage}
     handlePreviousPage={handlePreviousPage}
     currentPage={currentPage}
     indexOfLastUser={indexOfLastUser}
     customers={customers}
     />
     <CardsPopUp
     showPopup={showPopup}
     selectedUser={selectedUser}
     closePopUp={closePopUp}
     />
    </>
  );
};

export default Users;
