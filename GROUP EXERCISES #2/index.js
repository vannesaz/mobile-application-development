/*
MODULE by Tokyo 
- Kilis, Vannesa
- Pattyranie, Joel
- Lahengke, Gabriela
- Poluan, Gerald
*/

//EXPORT&IMPORT

// export sebuah array
export let months = ['Jan', 'Feb', 'Mar','Apr', 'Aug', 'Sep', 'Oct', 'Nov', 'Dec'];

// export sebuah konstanta
export const MODULES_BECAME_STANDARD_YEAR = 2015;

// export a class
export class User {
  constructor(name) {
    this.name = name;
  }
}


import {sayHi as hi, sayBye as bye} from './say.js';

hi('John'); // Halo, John!
bye('John'); // Selamat Tinggal, John!


function lingkaran(radius){
    return radius*radius*3.14;
}function persegi(sisi){
    return sisi*sisi;
}function persegiPanjang(panjang,lebar){
    return panjang*lebar;
}function segitiga(alas, tinggi){
    return alas*tinggi/2;
}

export function lingkaran(radius){
    return radius*radius*3.14;
}export function persegi(sisi){
    return sisi*sisi;
}export function persegiPanjang(panjang,lebar){
    return panjang*lebar;
}export function segitiga(alas, tinggi){
    return alas*tinggi/2;
}

function lingkaran(radius){
    return radius*radius*3.14;
}function persegi(sisi){
    return sisi*sisi;
}function persegiPanjang(panjang,lebar){
    return panjang*lebar;
}function segitiga(alas, tinggi){
    return alas*tinggi/2;
}export {
    lingkaran,
    persegi,
    persegiPanjang,
    segitiga
}
import {
    lingkaran,
    persegi,
    persegiPanjang,
    segitiga
} from './luas.js';
console.log(lingkaran(7));
console.log(persegi(8));
console.log(persegiPanjang(3,10));
console.log(segitiga(4,10));

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
import {name, student, letsGo} from "./index.js";
console.log(name);
console.log(student);
letsGo(student.name);