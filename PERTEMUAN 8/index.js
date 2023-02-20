//Asynchronous JS
// harus dijadikan comment utk code sblmnya agar yg lain bisa run

//kode akan dijalankan perbaris, mslhnya tidak tahu durasi run proses jika terurut
//async runnya jika stuck di 1 akan skip dulu ke lain.

//caranya : Pararel dan Concurent
//setTimeout (function, milliseconds) ---- Pararel : jalan sama2 di waktu yg sama
//kekurangannya adalah akan terjadi balapan meskipun tidak berurutan
console.log("Proses 1");
setTimeout(()=>{
    console.log("Proses 2");
},5000);

console.log("Proses 3");

// //Concurent saling menyambung, didlm timeout ada timeout
// //Jika terlalu banyak timeout ddlm timeout maka akan menjadi callback hell.
setTimeout(()=>{
    console.log("Proses 1");
    setTimeout(()=>{
        console.log("Proses 2");
    }, 3000);
}, 3000);

//Promise ada utk membuat concurent tapi tidak terlalu banyak timeout.
// let condition = true
// let newPromise = new Promise((resolve, reject)=>{
//     if(condition){
//         resolve("Berhasil");
//     }else {
//         reject("Gagal");
//     }
// });

//Cara menggunakan Promise
//1.then-catch
newPromise.then((result)=> console.log(result));
newPromise.catch((error)=> console.log(error));
newPromise.finally(()=> console.log("Tetap akan dijalankan meskipun error"));

//2.async-await --- muncul di ES7
//harus dalam bentuk function

const getData = async()=>{
    let result = await newPromise;
    console.log(result);
};

getData();

//pakai axios

// fetch("https://jsonplaceholder.typcode.com/users")
// .then((response)=>response.json())
// .then((json)=>console.log());

const cobaAsyncAwaittoJsonPlaceholder = async()=>{
    let response = await fetch("https://jsonplaceholder.typcode.com/users")
    let json = await response.json();
    console.log(json);
}


cbaAsyncAwaittoJsonPlaceholder()