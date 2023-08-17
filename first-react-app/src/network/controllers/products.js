import Product from "../Model/products";
import axios from "axios";

export const getProduct=async ()=>{
    let product=await axios.get("https://groca-b67f6-default-rtdb.europe-west1.firebasedatabase.app/products.json");
    const productArray=[];
    for(let key in product.data){
        productArray.unshift({
            ...product.data[key],
            id:key
        });
    }
    return productArray.map(item=> new Product(item.name,item.price,item.imageUrl,item.categories));
};