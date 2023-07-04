import React from "react";

import "./BanksSystem.scss";
import { useDispatch, useSelector } from "react-redux";

const BankSystem = () => {
  const dispatch = useDispatch;
  const cardBanks = useSelector((state) => state.cardBanks.cardBanks);

  // не работает добавление карточки. разберись
  const addCard = (name, price) => {
    const card = {
        name,
        id: Date.now(),
       price
    }
    dispatch({type: 'ADD_CARD', payload: card})
  }
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
        <button className="btn_added_account" onClick={() => addCard(prompt())}>Added account</button>
      </div>
      <div className="cards_wrapper">
        {cardBanks.lenght > 0 ? (
          <>
            {cardBanks.map((card) => (
              <div className="card_item_wrapper">
                <div className="price_wrapper">
                  <p className="price">{card.price}</p>
                  <span className="value">BYN</span>
                </div>
                <div className="type_of_card_wrapper">
                  <p className="type_of_card">Visa Classic</p>
                  <div className="img_refresh_price">
                    <img src="./repeat.svg" alt="repeat" />
                  </div>
                </div>
                <div className="date_card_wrapper">
                  <p className="number_card">1398 1394</p>
                  <p className="date">18.08.2025</p>
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
