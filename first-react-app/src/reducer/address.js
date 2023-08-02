// import {cartProducts} from '../utils/data';
const address=(state=[],action)=>{
    switch(action.type){
        case "ALL_USER_ADDRESS":
        return {
            ...action.payload
        }
        case "SAVE":
        return {
            ...action.payload
        }
        default:
        return state;
    }
};

export default address;