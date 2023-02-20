/* let john = ["john", "doe", 35, true, (80, 90, 100)]
john[2] = 40
console.log(john) */


//note : pop, push, shift, unshift, splice, slice.
//pelajari array&object java script di w3schools.com


let students = [
    {
        fullName: "John",
        age: 25,
        address: "Manado",
    },
    {
        fullName: "Bob",
        age: 24,
        address: "Minut",
    },
    {
        fullName: "Jane",
        age: 23,
        address: "Minahasa",
    },
];

students.forEach(function(value){
    console.log(value.fullName);
});

let filteredStudent = students.filter(function(value){
    return value.age >= 24;
});
console.log(filteredStudent);