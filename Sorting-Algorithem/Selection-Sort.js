function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
const SelectionSort=(arr,n)=>{
    let minid,i,j;
    for(i=0;i<n;i++){
        minid=i;
        for(j=i+1;j<n;j++){
            if(arr[j]<arr[minid]){
                minid=j;
            }
        }
        swap(arr,minid,i);
    }
}

const arr=[10,50,-1,55,2,10,30];
SelectionSort(arr,arr.length);