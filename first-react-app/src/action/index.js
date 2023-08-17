import axios from "axios";
export const addToCart=(product,userId)=>async dispatch=>{
    try {
        await axios.post("https://groca-b67f6-default-rtdb.europe-west1.firebasedatabase.app/cart.json",{
            ...product,
            ContainerType:"Pouch",
            Flavour:"Vegtable",
            RichIn:"Vitamin B12",
            quantity:1,
            userId
        }).then(res=>{
            dispatch({type:"ADD",payload:{
                ...product,
                ContainerType:"Pouch",
                Flavour:"Vegtable",
                RichIn:"Vitamin B12",
                quantity:1,
                userId,
                id:res.data.name,
            }});
        });
    } catch (error) {
        console.log(error.message);
    }
};


export const getAllUserCart=userId=>async dispatch=>{
    try {
        const res=await axios.get("https://groca-b67f6-default-rtdb.europe-west1.firebasedatabase.app/cart.json");
        const cartArray=[];
        for(let key in res.data){
            cartArray.unshift({
                ...res.data[key],
                id:key
            });
        }
        const userCart=cartArray.filter(cart=>cart.userId===userId);
        dispatch({type:"ALL_CART",payload:userCart});
    } catch (error) {
        console.log(error.message);
    }
};

export const deleteCartItem=id=>async dispatch=>{
    try {
        await axios.delete(`https://groca-b67f6-default-rtdb.europe-west1.firebasedatabase.app/cart/${id}.json`);
        dispatch({type:"DELETE_ITEM",payload:id});
    } catch (error) {
        console.log(error.message);
    }
};

export const updateIncementCartItem=(item)=>async dispatch=>{
    try {
        const newItem={
            ContainerType:item.ContainerType,
            Flavour:item.Flavour,
            RichIn:item.RichIn,
            imageUrl:item.imageUrl,
            name:item.name,
            price:item.price,
            userId:item.userId,
            quantity:item.quantity+1
        };
        await axios.put(`https://groca-b67f6-default-rtdb.europe-west1.firebasedatabase.app/cart/${item?.id}.json`,newItem);
        dispatch({type:"UPDATE_ITEM_INC",payload:item});
    } catch (error) {
        console.log(error.message);
    }
};
export const updateDecrementCartItem=(item)=>async dispatch=>{
    try {
        const newItem={
            ContainerType:item.ContainerType,
            Flavour:item.Flavour,
            RichIn:item.RichIn,
            imageUrl:item.imageUrl,
            name:item.name,
            price:item.price,
            userId:item.userId,
            quantity:item.quantity-1
        };
        await axios.put(`https://groca-b67f6-default-rtdb.europe-west1.firebasedatabase.app/cart/${item?.id}.json`,newItem);
        dispatch({type:"UPDATE_ITEM_DEC",payload:item});
    } catch (error) {
        console.log(error.message);
    }
};

// method Address

export const getAllAddress=userId=>async dispatch=>{
    try {
        const res=await axios.get("https://groca-b67f6-default-rtdb.europe-west1.firebasedatabase.app/address.json");
        const addressArray=[];
        for(let key in res.data){
            addressArray.unshift({
                ...res.data[key],
                id:key
            });
        }
        const userAddress=addressArray.filter(item=>item?.userId===userId);
        dispatch({type:"ALL_USER_ADDRESS",payload:userAddress[0]});
    } catch (error) {
        console.log(error);
    }
};