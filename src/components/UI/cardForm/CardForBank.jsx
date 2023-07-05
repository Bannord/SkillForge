import './CardFormBank.scss'

import React from "react";

const CardForBank = ({addCard, toggleCardForm, errors}) => {

    
    return (
        <form onSubmit={addCard} className="card-form">
        <input type="number" name="cardPrice" placeholder="Enter card price" className="input-field" />
        <input type="text" name="cardValue" placeholder="Enter card value" className="input-field" />
        <input type="text" name="cardType" placeholder="Enter card type" className="input-field" />
        <input type="text" name="numCard" placeholder="Enter card number" className="input-field" />
        <input
          type="text"
          name="dateCard"
          placeholder="Enter card expiry date"
          className="input-field"
        />
        {errors.message && <div className="error">{errors.message}</div>}
        <button type="submit" className="submit-btn">Add Card</button>
        <button className="cancel-btn" onClick={toggleCardForm}>Cancel</button>
      </form>
      
    )
}

export default CardForBank