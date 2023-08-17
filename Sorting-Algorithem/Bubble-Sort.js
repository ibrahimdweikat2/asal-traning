const BubblerSort=(arr,n)=>{
    for(let i=0;i< n-1;i++){
        for(let j=0;j< n-1;j++){
            if(arr[j] > arr[j+1]){
                let temp=arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
    }
    }
    return arr;
}

const arr=[5,10,2,20,1,88,-1];
const sortedArray=BubblerSort(arr,arr.length);

console.log(sortedArray);