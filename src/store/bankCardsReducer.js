const defaultState = {
    cardBanks: [],
    
}

const ADD_MANY_CUSTOMERS = 'ADD_MANY_CUSTOMERS'

export const bankCardsReducer = (state = defaultState, action) => {
    switch (action.type) {

        case 'ADD_CARD': 
            return {...state, cardBanks: [...state.cardBanks, action.payload]}

        default:
            return state
    }
}

export const addManyCustomers = (payload) => ({type: ADD_MANY_CUSTOMERS, payload})