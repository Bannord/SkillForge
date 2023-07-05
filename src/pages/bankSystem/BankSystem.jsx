import React, { useState } from "react";

import "./BanksSystem.scss";
import { useDispatch, useSelector } from "react-redux";
import CardForBank from "../../components/UI/cardForm/CardForBank";


const BankSystem = () => {
  
  const dispatch = useDispatch();
  const [errors, setErrors] = useState({});

  const cardBanks = useSelector((state) => state.cardBanks.cardBanks);
  const [isCardFormVisible, setIsCardFormVisible] = useState(false);

  const addCard = (e) => {
    e.preventDefault();
    if (
      e.target.cardPrice.value.trim() === "" ||
      e.target.cardValue.value.trim() === "" ||
      e.target.cardType.value.trim() === "" ||
      e.target.numCard.value.trim() === "" ||
      e.target.dateCard.value.trim() === ""
    ) {
      setErrors({ message: "Please fill in all fields" });
      return;
    }
    const card = {
      cardPrice: e.target.cardPrice.value,
      cardValue: e.target.cardValue.value,
      cardType: e.target.cardType.value,
      numCard: e.target.numCard.value,
      dateCard: e.target.dateCard.value,
      id: Date.now(),
    };
    dispatch({ type: "ADD_CARD", payload: card });
    setIsCardFormVisible(false)
  };

  const toggleCardForm = () => {
    setIsCardFormVisible(!isCardFormVisible);
  };
  return (
    <div className="Bank_container_wrapper">
      <div className="options_lists_wrapper">
        <ul className="table_options">
          <li className="option_link active">Счета</li>
          <li className="option_link">Депозиты</li>
          <li className="option_link">Кредиты</li>
          <li className="option_link">Копилка</li>
        </ul>
      </div>
      <div className="Added_bank_account_wrapper">
        <button className="btn_added_account" onClick={toggleCardForm}>
          Added account
        </button>
      </div>
      
      {isCardFormVisible && (
        <div className="popup_overlay">
          <div className="popup_content">
            <CardForBank 
            errors={errors}
            addCard={addCard}
            toggleCardForm={toggleCardForm} />
            
          </div>
        </div>
      )}
      <div className="cards_wrapper">
        {cardBanks.length > 0 ? (
          <>
            {cardBanks.map((card) => (
              <div className="card_item_wrapper">
                <div className="price_wrapper">
                  <p className="price">{card.cardPrice}</p>
                  <span className="value">{card.cardValue}</span>
                </div>
                <div className="type_of_card_wrapper">
                  <p className="type_of_card">{card.cardType}</p>
                  <div className="img_refresh_price">
                    <img src="./repeat.svg" alt="repeat" />
                  </div>
                </div>
                <div className="date_card_wrapper">
                  <p className="number_card">{card.numCard}</p>
                  <p className="date">{card.dateCard}</p>
                </div>
              </div>
            ))}
          </>
        ) : (
          <div>Нет карт</div>
        )}
      </div>
    </div>
  );
};

export default BankSystem;
