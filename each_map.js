// var greeting = function (name) {
//     return 'Hello' + name}('Iris') // 立即呼叫，回傳一字串
//   console.log(greeting) // Hello Iris 回傳的字串

// for(var i = 0; i < 10 ; i++){
//   (function(i){ 
//     setTimeout(function () {   
//     },10);
//   })
//   console.log('執行第' + i + '次');
// }

// let circleArea = function(r) {
//     return r * r * 3.14;
// }
// circleArea(10)


// let circleArea = r => r * r * 3.14;

// circleArea(10)

// let cosco = (n1 , n2 ) => n1 * n2

// cosco(10 ,12)

// let popo = () =>  20
// popo()

// let foo = () => ({x: 10, y: 20});
// console.log(foo())


// function Timer() {
//     this.s1 = 0;
//     this.s2 = 0;

//     // 箭頭函數，會綁定外層定義的 this
//     setInterval(() => this.s1++, 100);

//     // 一般函數，指向正在運作自己的函數
//     setInterval(function () {
//         this.s2++;
//     }, 100);
// }

// const timer = new Timer();

// // 過 0.3 秒後觀察 timer.s1 與 timer.s2 的變化
// setTimeout(() => console.log('s1: ', timer.s1), 350);
// setTimeout(() => console.log('s2: ', timer.s2), 350);
// // s1: 3
// // s2: 0


// for( var i = 0 ; i < 10 ; i++ ){
//   (function(i){
//     setTimeout(function(){
//       console.log('這是第'+ i + '次')
//     }, 10);
//   })(i);
// }


// function moremoney(){
//   let arg = [...arguments]
//   // newMoney = money.forEach(x => x * 2);
//   let newArg = arg.map(x => x * 2)
//   console.log(newArg)
// }
// moremoney(500 , 300 , 1000, 445, 666)


// // 建構式
// function Person(){
//   this.name = '小明';

//   setTimeout(() => { // 採用同層的 this
//     console.log(this.name)
//   }, 10);
// }

// var p = new Person();

// let auntie = {
//   name: '漂亮阿姨',
//   callName(){
//     let vm = this
//     setTimeout(() => {
//       console.log(vm , vm.name)
//     }, 10)
//   }
// }
// auntie.callName

// const obj = { a:1 }

// function func() {

//   setTimeout(() => {
//     // 這裡`this`會以詞法上的func中為預設
//     console.log(this)
//   }, 2000)
// }

// func.call(obj)


// const obj = {
//     name: 'Jerry',
//     greet: function() {
//         console.log(this.name)
//     }
// }
// obj.greet()  //第一种调用方法
// obj.greet.call(obj) //第二种调用方法

const obj = {
    name: 'Jerry',
    greet: function() {
        console.log(this.name)
    }
}
obj.greet.call({name: 'Spike'}) 

