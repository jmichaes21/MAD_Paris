let john = {
    fullName: " John Doe",
    age: 35,
    address:"Manado" 
};
//string literal

// let kalimat5 = " Hallo nama saya" + john.fullName + ", umur saya " + john.age + " dan saya tinggal di" + john.age;

// let kalimat6 = `Halo nama saya ${john.fullName}, umur saya ${john.age} tahun, dan saya tinggal di ${john.address}`; //recommended string literal
//console.log(kalimat6);

//Arrow Function
//function greetings (){
    //console.log("Hello World")
// };
// greetings();

//cara 1
// const greetings = () => {
    //console.log("Hello World")
// };
// greetings();


//cara 2
//const greetings = (fullName) => {
    //return `Hello${fullName}`;
//};
//let result = greetings(john.fullName);
//console.log(result);

//Implicit return value=kelebihan penggunaan arrow
// const greetings = (fullName) => `Hello${fullName}`; //syarat: hanya ada 1 line dan fungsinya yaitu return. otomatis terbaca untuk return.
// let result = greetings(john.fullName);
//console.log(result);

//mapping menggunakan arrow dan implicit return value
// let numbers = [1,2,3,4,5];
// let result2 = numbers.map((value)=> value)
//console.log(result2);

//Default Parameter
const login = (username, password = 123456  ) =>{ return `Username = ${username}, Password = ${password}`};
console.log(login("johndoe",)); //jika password tidak diisi maka akan terisi dengan nilai default

//Rest Parameter dan Spread Operator
//Rest Parameter
const func = (...params)=>{//sifat params harus ata dibagian terakhir
    params.forEach((value)=>console.log(value));
};

funcArray(1,2,3,4); //rest parameter menggunakan simbol 3 titik ketika kita mempunyai banyak parameter





