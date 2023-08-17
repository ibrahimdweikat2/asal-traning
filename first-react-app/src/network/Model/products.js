export default class Product{
    name="";
    price=0;
    imageUrl="";
    categories=[];

    constructor(name, price, imageUrl,categories){
        this.name=name;
        this.price=price;
        this.imageUrl=imageUrl;
        this.categories=categories;
    }
}