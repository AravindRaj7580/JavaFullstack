//create an object, use curly braces

// let person = {
//     name: 'Adam',
//     age : 26,
//     OwnsACar : false
// }

// let person1 = {
//     name: 'Adam',
//     age : 26,
//     OwnsACar : false,
//     PhNo : 9751066096
// }

// console.log(person)

// console.log(person1)

let captainAmerica = {
    name : 'Steve Roger',
    age : 102,
    friends : ['Tony Stark', 'Bucky barnes', 'Bruce Banner'],
    address : {
        country : 'USA',
        City : {
           name : 'Brookly',
           pincode : 609801
        }
    },
    isAvenger : true
}

console.log(captainAmerica)

//Access key / value of an abject

captainAmerica.age = 90
//dot notaiton
console.log(captainAmerica.age)

//bracket notation
console.log(captainAmerica['name'])

console.log(captainAmerica.address.City.name)

captainAmerica.movies = ['EndGame', 'Infinity wars', 'Winter Soldier']

console.log(captainAmerica)

delete captainAmerica.age

console.log(captainAmerica)

console.log(captainAmerica.friends[1])

captainAmerica.isAvenger = false

console.log(captainAmerica)