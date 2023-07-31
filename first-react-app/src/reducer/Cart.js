import {cartProducts} from '../utils/data';
const Cart=(state=cartProducts,action)=>{
    switch(action.type){
        case 'ss':
        return state;
        default:
        return state;
    }
};

export default Cart;