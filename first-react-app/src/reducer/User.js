const User=(state=[],action)=>{
    switch(action.type){
        case 'set-user':
        return {
            ...state,
            user:JSON.parse(localStorage.getItem('user'))
        }
        case 'get-user':
            return {
                ...state
            }
            case "sign-out":
                localStorage.clear();
                return {
                    user:'undefined'
                };
            default:
                return state;
    }
}

export default User;