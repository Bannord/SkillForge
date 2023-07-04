import React from "react";

const CardsPopUp = ({showPopup, selectedUser, closePopUp}) => {
  return (
    <>
      {showPopup && selectedUser && (
        <>
          <div className="backdrop" onClick={closePopUp}></div>
          <div className="wrapper_user_content">
            <div className="img_wrapper_content">
              <img src={selectedUser.avatar_url} alt="selected_avatar" />
            </div>
            <div className="user_infro_wrapper">
              <h3>{selectedUser.login}</h3>
              <a href={selectedUser.html_url}>гитхаб</a>
              <p>Возраст: {selectedUser.id}</p>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default CardsPopUp
