const Search=(arr,n,value)=>{
    return new Promise((resolve,reject)=>{
        arr.forEach((element,index) => {
            if(element === value){
                return resolve(index);
            }            
        });
        throw new Error("Value Not Matched "+value);
    })
}
const arr=[10,5,3,5,255,62,30];
const val=5;
const n= arr.length;
const Promise1=Search(arr,n,val).then(value=>console.log(value)).catch(err=>console.log(err));