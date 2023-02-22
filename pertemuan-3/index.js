// let john = ['john', 'doe', 35, true, [80, 90, 100]];

// console.log(john.length);
// john[2] = 40;
// console.log(john[john.length-1]);

// let array = [1, 2, 3, "halo", false, true];

// console.log(array.toString());
// console.log(array.join(" "));
// array.pop()
// console.log(array);
// array.push("selamat pagi");
// console.log(array);
// array.shift();
// console.log(array);


// const numbers = [1, 2, 3, 4, 5];

// numbers.push(6);
// console.log(numbers);

// object
// let john = {
//     firstName: "John",
//     lastName: "Doe",
//     age: 35,
//     isMarried: true,
//     grade: [80, 90, 100],
//     greetings: function(){
//         console.log("Hello my name is " + this.firstName);
//     },
// };

// console.log(john.age);
// console.log(john["grade"]);

// john.job = 'teacher';
// console.log(john);
// console.log(john.greetings());


// build it method

// let numbers = [1, 2, 3, 4, 5]

// for(let i=0; i<numbers.length; i++){
//     console.log(numbers[i]);
// }

// numbers.forEach(function(value, index){
//     console.log(value + " index: " + index);

// });

// let students = [
//     {
//         fullName: 'John',
//         age: 25,
//         address: 'Manado'
//     },
//     {
//         fullName: 'Bob',
//         age: 24,
//         address: 'Minut'
//     },
//     {
//         fullName: 'Jane',
//         age: 23,
//         address: 'Minahasa'
//     },
// ]

// students.forEach(function(value){
//     console.log(value.fullName);
// });

// let studentName = students.map(function(value){
//     return value.fullName;
// });

// let studentAge = students.map(function(value){
//     return value.age;
// })

// console.log(studentName);
// console.log(studentAge);

// let Age = students.filter(function(value){
//     return value.age >= 24;
// });

// console.log(Age);



// Map Practice

// let harga = [1000, 2000, 3000, 4000];

// let hargaDiskon = harga.map(function(value){
//     return value - ( value * (20/100));
// })

// console.log(harga);
// console.log(hargaDiskon);


// Map + object practice

let Price = [
    {
        nama : 'aqua',
        price: 2000,

    },
    {
        nama: 'ake',
        price: 3500,
    },
    {
        nama: 'indomaret',
        price: 4500,
    }
];

let discountPrice = Price.map(function(value){
    return value.nama, value.price - (value.price * (20/100));
});

console.log(discountPrice[0]);