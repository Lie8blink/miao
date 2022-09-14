var chunk = function (array, size=1) {
    const ans=[]
    const left=[]
    const right=[]
    for(let i=0;i<array.length;i++){
        if(i<=size-1){
            left.push(array[i])
        }else{
            right.push(array[i])
        }
    }
    return ans.push(left).push(right)
}
