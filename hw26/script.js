function myMax(arr) {
    let maxNum = arr[0]
    for (let i = 0; i < arr.length; i++){
        if( maxNum < arr[i]){
            maxNum = arr[i]
        }
    }
    return maxNum
}
console.log( myMax([6,7,75,43,3,32,54]))
console.log( myMax([64,6,-7,8,6,4,3,45]))
console.log(myMax([-3, -41,-1]))
