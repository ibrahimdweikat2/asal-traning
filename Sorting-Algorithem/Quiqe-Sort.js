function swap(arr,xp, yp)
{
    var temp = arr[xp];
    arr[xp] = arr[yp];
    arr[yp] = temp;
}
const partition=(arr,low,high)=>{
    const pivot=arr[high];
    let i=(low-1);

    for(let j=low;j<high;j++){
        if(arr[j] <pivot){
            i++;
            swap(arr,i,j);
        }
    }
    swap(arr,i+1,high);
    return (i+1);
}

const QuiqeSort=(arr,low,high)=>{
    if(low < high){
        let pindex=partition(arr,low,high);

    QuiqeSort(arr,low,pindex-1);
    QuiqeSort(arr,pindex+1,high);
    }
}

const arr=[10,20,-1,5,6,22,55,41,10,30];
QuiqeSort(arr,0,arr.length-1);