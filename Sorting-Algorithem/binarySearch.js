const BinarySearch=(arr,left,right,value)=>{
    let mid;
    while(right >= left){
        mid=left +Math.floor((right - left) /2);
        console.log(mid);

        if(arr[mid]===value){
            return mid;
        }

        if(arr[mid] < value){
            left=mid+1;  
        }else{
            right=mid-1;
        }
    }
    return -1;
}


const arr=[2,3,4,10,40];
const value=10;
const right=arr.length-1;
const resule=BinarySearch(arr,0,right,value);

console.log(resule);