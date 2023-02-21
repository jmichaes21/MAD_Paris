/////////KELOMPOK PARIS////////
//Anggota : 1. Birahy, Brian Gustaf
//          2. Salainti, Juan Michael
//          3. Usem, Chanlie
//          4. Tirza Gracia
//          5. Manaha, Cheisya Framita Lady 


//////ARRAY EXERCISES//////
////Nomor 1////
// let people = ["Greg", "Mary", "Devon", "James"];
// for(let i=0; i<people.length; i++){
//     console.log(people[i]);
// }  

////Nomor 2////
// people.forEach(function(Value){
//     console.log(Value);
// });

// ////Nomor 3////
// people.splice(0,1);
// console.log(people);

// ////Nomor 4////
// people.pop();
// console.log(people);

// ////Nomor 5////
// people.unshift("Matt");
// console.log(people);

// ////Nomor 6////
// people.push("Gustaf");
// console.log(people);

// ////Nomor 7////
// for(let name = 0; name< people.length; name++) {
//     console.log(people[name]);
//     if(people[name]== 'Mary') {
//         break;
//     }
// }

// ////Nomor 8////

// let peopleName = people.slice(2);
// console.log(peopleName);

////Nomor 9////
// people.splice(2,1,"Elizabeth", "Artie");
// console.log(people);

////Nomor 10////
// let withBob = people.concat("Bob");
// console.log(withBob);


//////OBJECT EXERCISES//////
let programming = {
    languages: ["JavaScript", "Python", "Ruby"],
    isChallenging: true,
    isRewarding: true,
    difficulty: 8,
    jokes: "http://stackoverflow.com/questions/234075/what-is-your-best-programmer-joke"
};


////Nomor 1/////
programming.languages.push("Go")
console.log(programming);

////Nomor 2////
programming['difficulty']= 7;
console.log(programming);

////Nomor 3////
delete programming.jokes;
console.log(programming);

////Nomor 4////
programming.isFun = true;
console.log(programming);

////Nomor 5////
programming.languages.map(function(value, index){
    console.log(index + '-' + value) ;
})