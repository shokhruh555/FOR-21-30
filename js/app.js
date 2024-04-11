// FOR 21

// let n= 2 , count= 1;

// for(let i = 1; i <= n; i++){
//     let fac =1
//     for (let j = 1; j <= i; j++) {
//        fac *= j
        
//     }
//     count += 1 / fac  
// }

// console.log(count);


// FOR 22

let n= 2 ,  count= 1;

for(let i = 1; i <= n; i++){
    let x = 2
    for (let j = 1; j <= i; j++) {
       x *= j
        
    }
    count += 1 / x 
}

console.log(count);

// FOR-23



// let n = 5 , count = 0 , sum = 0;

// for (let i = 1; i <= n; i+=2) {
//    let x = 2;
//    x **= i;
//    sum = 1;
//    for (let j = 1 ; j <= i; j++) {
//       sum*=j
//    }
//    count += x/sum
//    x *=-1
//    console.log(x);
// }
// console.log(count);


// FOR-24




// let n = 5 , count = 0 , sum = 0;

// for (let i = 0; i <= n; i+=2) {
//    let x = 2;
//    x **= i;
//    sum = 1;
//    for (let j = 1 ; j <= i; j++) {
//       sum*=j
//    }
//    count += x/sum
//    x *=-1
// }
// console.log(count);


// FOR-25


// let n = 5 , count = 0 , sum = 0;

// for (let i = 1; i <= n; i++) {
//    let x = 2;
//    x **= i;
//    sum = 1;
//    count += x/i
//    x *=-1
//    console.log(x);
// }
// console.log(count);



// FOR-26



// let n = 5 , count = 0 , sum = 0;

// for (let i = 1; i <= n; i+=2) {
//    let x = 2;
//    x **= i;
//    sum = 1;
//    count += x/i
//    x *=-1
//    console.log(i);
// }
// console.log(count);



// FOR-29

    // let n = 5 , a = 0, b = 15 ;
    // let diff = (b - a) / n
    // for (let i = 0; i < diff; i++) {
    //     if (i == 0) {
    //         console.log(`[${a};${a+n}]`);            
    //     } else{
    //         a += n ;
    //         console.log(`[${a};${a+n}]`);             
    //     }
    // }

// FOR-30

    // let n = 5 , a = 0 , b = 20 ;
    // let diff = (b - a) / n
    // for (let i = 0; i < diff ; i++) {
    //     a += diff ;
    //     let x = 1 - Math.sin(Math.PI/a)
    //     console.log(x);
        
    // }