//print the square for all the array numbers

let arr = [1,2,3,4,5]

let newArr = []

for(let i = 0 ; i < arr.length; i++){
   console.log(arr[i] * arr[i]) 
   newArr.push(arr[i] * arr[i])
}

console.log(newArr)