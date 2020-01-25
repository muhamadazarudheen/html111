function mySplice(arr,pos,dC,...iArr)
{
    var tempArr=[],count=0;;
        for(i=0;i<pos;i++)
        {
            tempArr[i]=arr[i];
        }
    
        count=pos;
        if(iArr.length>0)
        {
            for(var k=0;k<iArr.length;k++)
            {
                tempArr[count]=iArr[k];
                count++;
            }
            
        }
        for(var k=pos+dC;k<arr.length;k++)
        {
            tempArr[count]=arr[k];
            count++;
        }
    
    return tempArr;
}

var fruits=["Apple","Pineapple","Guava","bananas","mangoes"];

fruits=mySplice(fruits,3,1);
console.log(fruits);
fruits=mySplice(fruits,0,0,"Strawberry","Grapes");
console.log(fruits);
fruits=mySplice(fruits,1,2,"Peach");
console.log(fruits);