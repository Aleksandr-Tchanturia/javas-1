//დავალება #1

//let  user = {
//  firstname: 'giorg',
//  lastname: 'smith',
//  age: 25,
// studentstatus: 'active'
//};
  
//console.log(user.studentstatus);
//console.log(user['studentstatus']);



//დავალება #2

//let numbers = [10, 20, 30, 40, 50, 60, 70];
//for(let i = 0; i < numbers.length; i++) {
//     console.log(numbers[i]);
//}

//for(let i of numbers) {
//    console.log(i);
//}

//let i = 0;
//while (i <numbers.length) {
//    console.log(numbers[i]);
//    i++;
//}



//დავალება #3

//let numbers = [5, 6, 10, 25, 3, 7, 4, 100, 28, 36, 89];

// for(let i of numbers) {
//    if (i > 5) {
//       console.log(i);
//   }   
//}

//დავალება #4

let user = {
    name: 'giorgi',
    age: 20,
   studentstatus: 'Active'
}
if (user.age < 18 && user.studentstatus == 'active') {
    console.log('hello');
} else if (user.name =='giorgi') {
   console.log('hello giorgi')
} else if (user.studentstatus == active || user.age < 25) {
   console.log('hello world')
}
else {
   console.log('error');
}

//დავალება #5

let array = [ 'watermelon', 'pear', 10, 45, 50, 'apple', 'ananas'];
for (let i of array) {
    if (typeof i == 'string') {
    console.log(i);    
    }   
}

