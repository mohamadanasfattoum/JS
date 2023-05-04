// let ismarried = confirm('are you married ? ')

// console.log(ismarried)


// alert('hello mystro')

// let age = prompt('Enter Your Age : ',20)

// console.log(Age)


// alert(1==2); /f

// alert(1<2); /t
// alert(1>2); /f

// let x = (5<4)

// console.log(x)


// let y = (5>4)##

// console.log(y)


// let year = prompt ('how old you ?' ,'21')

// if (year=2015) alert ('you are right!');
// alert ('you are smart!');
// alert ('that is correct');


// let age = prompt ('Enter your Age:','20')
// if (age == 20)
// {console.log('you are 20 years old')}
// else{console.log('you are too small')}
// if (age < 20){console.log('you are small')}

// if (age < 20)
// {console.log('you < 20')}
// else if (age < 55)
// {console.log('you < 55')}

// if (age > 20){console.log('you are big ')}

// -----ternary operator
// let alloaccess = (age > 18) ? true : false ;
// console.log (alloaccess)


// ------- multiple operator
// if (age < 10) {
//     message = ('age < 10')
// }
//  else if (age < 20) {
//      message = ('age < 20')
// }

// else {
//      message = (age)
// }
//  console.log(message)


// let age = prompt ('Enter your Age :',);

// let message = (age > 10) ? 'age > 10' : (age > 20) ? 'age > 20' : 'age' ;

// console.log(message);


// -----logical operter 

// let username = 'admin'
// let password = 12345
// if (username == 'admin' || password == 123456){
//     console.log('welcome')
// }

// let username = 'admin'
// let password = 12345
// if (username == 'admin' && password == 12345){
//     console.log('welcome')
// }

'----While Loop'

// let i=0

// while (i<10) {
//     console.log(i)
//     i = i +2
// }

// -----DO while Loop

// do{
//     console.log(i)
//     i = i +2
// }
// while (i<10) 


// --------- For Loop


// for ( let i=0 ; i<=10 ; i++) {
//     console.log(i)
// }

// for ( let i=10 ; i>=0 ; i--) {
//     console.log(i)
// }

// -------Break For Loop

// for (let i = 0; i < 10; i++) {

//     console.log(i)
//     if (i == 6) break

// }

// -------Continue For Loop

// for ( let i=0 ; i<10 ; i++) {

//     if (i==6) continue 
//     console.log(i)
//     }


// ---------Nested Loop

// for ( let i=1 ; i<=10 ; i++) {
 
//     console.log(i)
//     }

// for ( let i=1 ; i<=10 ; i++) {
 
//     console.log('1'+'*'+i+'='+i*1)
//     }


// for ( let y=1 ; y<=5 ; y++){
    
//     for ( let i=1 ; i<=10 ; i++) {
 
//         console.log(y+'*'+i+'='+i*y)
//         }
// }


// for ( let y=1 ; y<=5 ; y++){
    
//     for ( let i=1 ; i<=10 ; i++) {
 
//         console.log(y+'*'+i+'='+i*y)
//         }
//         console.log('--------------')

// }



let start = prompt('Enter Start : ')
let end = prompt('Enter End : ')

for ( let y=start ; y<=end ; y++){
    
    for ( let i=1 ; i<=10 ; i++) {
 
        console.log(y+'*'+i+'='+i*y)
        }
        console.log('--------------')

}
