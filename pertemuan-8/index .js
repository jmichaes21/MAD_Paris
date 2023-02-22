// Asynchronus JS

// console.log('baris 1');
// console.log('baris 2');
// console.log('baris 3');


//1. Parallel
// setTimeout(()=>{
//     console.log('proses 1');
// }, 3000);
// setTimeout(() => {
//     console.log('proses 2');
// }, 5000);
// console.log('proses 3');



//2. Concurent
// setTimeout(() => {
//     console.log('Proses 1');
//     setTimeout(() => {
//         console.log('Proses 2');
//         setTimeout(() => {
//             console.log('Proses 3');
//         }, 5000);
//     }, 5000);
// }, 3000);


// Promise
// let condition = true;
// let newPromise = new Promise ((resolve, reject)=> {
//     if(condition) {
//         resolve('Berhasil');
//     } else {
//         reject('Gagal');
//     }
// });

//cara 1 : then-catch
// newPromise
//     .then(result => `${result}!!!`)
//     .then((result2) => console.log(result2))
//     .catch((error) => (console.log(error)))
//     .finally(() => console.log('akan dijalankan di akhir'))


// cara 2 : async-await
// const getData = async () => {
//     let output = await newPromise;
//     console.log(output);
// }

// getData()


// fetch("https://jsonplaceholder.typicode.com/users");
// const getJSONPlaceholder = async () => {
//     const response = await fetch("https://jsonplaceholder.typicode.com/users");
//     console.log(response);
// }

// getJSONPlaceholder();


// sir code
const getJSONPlaceholder = async () => {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const json = await response.json();
    console.log(json);
  };
  
  getJSONPlaceholder();