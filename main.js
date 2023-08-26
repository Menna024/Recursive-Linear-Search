let linearSearch = (arr, size, key)=> 
{
    if(size==0)
    {
        return -1;
    }
    else if(arr[size-1]==key)
    {
        return size-1; //index of the key
    }
 
    return linearSearch(arr, size-1, key); 
};

let main = () =>
{
    let arr=[3,5,2,1,4,8,0,6];
    let key=4;
    let indexFound=linearSearch(arr,8,key);

    if(indexFound==-1)
        console.log(`The key ${key} is not found in arr.`);
    else
        console.log(`The key ${key} is found in arr at index ${indexFound}.`);
    return 0;
};

main();