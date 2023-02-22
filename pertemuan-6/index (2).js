// pertemuan keenam

// Sread operator
// let numbers = [1, 2, 3, 4, 5];

// console.log(numbers);

// console.log(...numbers);

//1. duplikasi array
// let numbers2 = [...numbers];
// numbers.push(6);
// console.log(numbers2);


//2. Menggabungkan array

// let numbers1 = [1, 2, 3];
// let numbers2 = [5, 6, 7];
// let numbers3 = [8, 9, 10];

// let combineNumbers5 = numbers1.concat(4, numbers2, numbers3);
// let combineNumbers6 = [...numbers1, 4, ...numbers2, ...numbers3];
// console.log(combineNumbers6);


// let john = {
//     fullName: 'John Doe',
//     age: 35,
//     address: 'Manado',
// };

// john2 = {...john, job: "teacher"};
// console.log(john2);


// Destructuring : berdasarkan urutan/ kosongkan jika tidak ingin di save ke dalam variable baru.

// let numbers = [1, 2, 3, 4, 5];

// let [a, b, c, d, e] = numbers;
// console.log(a);

let john = {
    fullName: 'John Doe',
    age: 35,
    address: 'Manado',
};
// Nama variable harus sesuai dengan nama properti, bisa diganti menggunakan titik dua. ex = age : umur.
let {fullName, age, address} = john;
console.log(fullName);

// Halo Nama saya John Doe, umur saya 35 tahun dan saya tinggal di Manado
const ucapkanSalam = ({fullName, age, address}) => {
    let kalimat = `Halo nama saya ${fullName}, umur saya ${age} tahun dan saya tinggal di ${address}`;
    console.log(kalimat);
};

ucapkanSalam(john);

