// Task  1
// Задан массив: let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// 	Выведите в косноль только нечетные элементы 


// let array = [5,3,2,6,7,8,7,10,40,32,1,45]

// for(let elem of array){
// if(elem % 2===1){
//   console.log(elem);
// }
// }


// Task 2
// Задан массив: let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// 	Выведите в косноль элементы, кратные 10

// let array = [5,3,2,6,7,8,7,10,40,32,1,45]

// for(let elem of array){
//   if(elem % 10===0){
//     console.log(elem);
//   }
// }


// Task 3
// Задан массив: let array = [5,3,2,6,7,8,7,10,40,32,1,45]
// 	Выведите в косноль элементы с двухзначным значением

// let array = [5,3,2,6,7,8,7,10,40,32,1,45]

// for(let elem of array){
// if(elem > 10 ){
//   console.log(elem);
// }
// }


// Task 4

// Создайте два новых массива phones1 и phones2, в первом из которых поместите только те элементы, которые начинаются на +7, а другие в массив phones2. Выведите в консоль содержимое двух массивов

// let phones = [
//   '+7912345549',
//   '+7912346579',
//   '891234547489',
//   '+79123451234',
//   '89123451238',
//   '+73123456789',
//   '+73123456569',
//   '81123451238'
//   ]


// for(let elem in phones){
// let phones1 = [];
// let phones2 = [];
// if(phones[elem].startsWith('+7')){
// phones1.push(phones[elem])
// console.log(phones1);
// }
// if(phones[elem].startsWith('89') || phones[elem].startsWith('81')){
//   phones2.push(phones[elem])
//   console.log(phones2);
// }
// }


// Task 5
// Измените исходный массив таким образом, чтобы у элементов, где встречается значение NULL, отсутствовало последнее слово. 

// let names = [ 
//   'Steven', 
//   'Alex NULL',
//   'Glandell NULL', 
//   'Neena', 
//   'John', 
//   'Peter NULL'
//   ];

// for(let elem in names){
// if(names[elem].endsWith('NULL')){
//  names[elem] = names[elem].replace('NULL','')
// }
// console.log(names[elem]);
// }

// Task 6

// Создайте два массива phones и emails и поместите туда только те значения, которые соответствуют значениями элементам массива contacts. 
// Примечание: если в элемента встречается и почта и номер - их необходимо будет разделить и также поместить в соответствующие массивы. Выведите в консоль содержимое двух массивов

// Solution 1

// let contacts = [ 
//   'example@mail.com 89012345675', 
//   'test@mail.ru', 
//   'example@google.pop', 
//   '89011235678', 
//   'stevem@mail.net', 
//   'neena@amazon.ru 81232345676', 
//   'peter@great.ru 89012341238' 
//   ]

//   let phones= [];
//   let emails = [];

// for(let i in contacts){
//   let elements = contacts[i].split(' ')
//   for(let j in elements){
//     if(elements[j].includes('@')){
//       emails.push(elements[j])
//     }
// if(elements[j].includes('8')){
//   phones.push(elements[j])
// }
//   }
// }
// console.log(emails);
// console.log(phones);

// Solution 2

// for(let elem in contacts){
// let result =  contacts[elem].split(' ')
// if(result.length === 2){
//   phones.push(result[1])
// if(result.length === 2){
//   emails.push(result[0])
// }
// }

// if(result.length === 1){
//   if(result.includes('89011235678'))
//   phones.unshift(result)
//   if(result.includes('stevem@mail.net') || result.includes('test@mail.ru') || result.includes('example@google.pop')){
//     emails.push(result)
//   }
// }
// }
// console.log(phones,emails);