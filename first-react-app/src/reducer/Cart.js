// import {cartProducts} from '../utils/data';
const Cart=(state=[],action)=>{
    switch(action.type){
    case "ADD":
        return [
            ...state,
            {...action.payload}
        ];
    case "ALL_CART":
        return [
            ...state,
            ...action?.payload
        ];
    case "DELETE":
        return [];
    case "DELETE_ITEM":
        return [
            ...state.filter(item=>item?.id !== action.payload)
        ];
    case "UPDATE_ITEM_INC":
        return [
            {
                ...action.payload,
                quantity: action.payload.quantity+1
            },
            ...state.filter(item=>item?.id !== action.payload.id),
        ];
    case "UPDATE_ITEM_DEC":
        return [
            {
                ...action.payload,
                quantity: action.payload.quantity-1
            },
            ...state.filter(item=>item?.id !== action.payload.id),
        ];
    default:
        return state;
    }
};

export default Cart;