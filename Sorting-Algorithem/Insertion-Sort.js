const InsertionSort=(arr,n)=>{
    let i,j,temp;
    for(i=1;i<n;i++){
        temp=arr[i];
        j=i-1;
        for(;j>=0&& arr[j]>temp;j--){
            arr[j+1]=arr[j];
        }
        arr[j+1]=temp;
    }
}

const arr=[10,20,5,6,12,-2];
InsertionSort(arr,arr.length);
console.log(arr);