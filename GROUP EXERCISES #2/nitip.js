//MOdule by Tokyo

//Export and Import

//Export
export let nama = "Vannesa";
export let student = {
    nama: "Vannesa",
    umur: 20,
    alamat: "Tumaluntung",
};

export function sayHi(user) {
    console.log(`Hi, $(user)!`);
}

export let name = "Zevania";

export let person = {
    name: "Zevania",
    age: 21,
    address: "Perum Agape",
};

export function sayHi(someone){
    console.log(`Hi, ${someone}!`);
}

//Import
import {name, student, letsGo} from "./nitip.js";
console.log(name);
console.log(student);
letsGo(student.name);

//Export As
