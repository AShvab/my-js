// console.log((0.15*100 + 0.26*100) / 100);

// for (let i = 10; i >= 0; i -= 3 ){
//     console.log(i);
// }
// console.log('stop');

//  const friends = ['Kate', 'Sveta', 'Lesia', 'Lena', 'Tanya'];

//  console.table(friends);

// const  array1 = [ 1, 20, 30, 43, 51];
// const array2 =[2, 9, 15, 58];
// const array3 =[21, 29, 15, 58, 7];
// let total = 0;

// const numbers = array1.concat(array2, array3);

// for (const number of numbers) {
//     total += number;
// }

// console.log(numbers);

//  console.log(total);

// const fruits = ["🍎", "🍇", "🍑", "🍌", "🍋"];


// const add = function (a, b) {
//     console.log(a);
//     console.log(b);

//    console.log('Выполняется функция add');
//    return a + b;
// }

// const res1 = add(10, 5);
// console.log('Записали результат функции:', res1);
// const res2 = add(2, 12);
// const res3 = add(20, 112);
// const res4 = add(7, 48);


// const totalPrice = function (items){
//     let total = 0;
//     for (const item of items) {
//         total +=item;
//     }
//     return total;
// }

// const array1 = [1, 2, 3, 4, 5];
// const array2 = [10, 20, 30, 40, 50];
// console.log(totalPrice(array1));
// console.log(totalPrice(array2));

// console.log(totalPrice([20, 40, 30, 100]));

// const findSmallestNumber = function (numbers) {
//     let smallestNumber = Infinity;
  
//     for (const number of numbers) {
//       if (number < smallestNumber) {
//         smallestNumber = number;
//       }
//     }
  
//     return smallestNumber;
//   };
  
//   console.log(findSmallestNumber([3, 8, 12, -2, 15])); // -2
//   console.log(findSmallestNumber([100, 54, 8, 12, 47])); // 8
//   console.log(findSmallestNumber([7, 21, 84, 15, 4])); // 4

// const add = function (...args){
//   console.log(args);
//   let total = 0;

//   for (const arg of args) {
//     total +=arg;
//   }

// return total;
// }
// console.log(add(100, 2, 3, 40, 5));
// console.log(add(10, 20, 3, 4, 5));
// console.log(add(10, 2, 30, 40, 5));

/*
 * Работем с коллекцией товаров в корзине:
 * - getItems()
 * - add(product)
 * - remove(productName)
 * - clear()
 * - countTotalPrice()
 * - increaseQuantity(productName)
 * - decreaseQuantity(productName)
 *
 * { name: '🍎', price: 50 }
 * { name: '🍇', price: 70 }
 * { name: '🍋', price: 60 }
 * { name: '🍓', price: 110 }
 */

const cart = {
    items: [],
    getItems() {},
    add(product) {},
    remove(productName) {},
    clear() {},
    countTotalPrice() {},
    increaseQuantity(productName) {},
    decreaseQuantity(productName) {},
  };
  
  // console.table(cart.getItems());
  
  cart.add({ name: '🍎', price: 50 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍋', price: 60 });
  cart.add({ name: '🍓', price: 110 });
  
  // console.table(cart.getItems());
  
  cart.remove('🍎');
  // console.table(cart.getItems());
  
  // cart.clear();
  // console.table(cart.getItems());
  
  // cart.increaseQuantity('🍎');
  // console.table(cart.getItems());
  
  // cart.decreaseQuantity('🍋');
  // cart.decreaseQuantity('🍋');
  // console.table(cart.getItems());
  
  // console.log('Total: ', cart.countTotalPrice());

  
// --------------------------------------------------------

// const temps = [18, 14, 12, 21, 17, 29, 24];
// // console.log(Math.min(...temps));
// // console.log(Math.max(...temps));

// const playlist = {
//   list: 'The best',
//   rating: 5,
//   trackCount: 3,
//   tracks: ['track-1', 'track-2', 'track-3'],
   
// };

// const {list, rating, trackCount, tracks} = playlist;
// console.log(list, rating, trackCount);

// function getMinNumber ( args ) {
//   console.log(args);
//   return console.log(Math.min(...args));
// };

// getMinNumber([18, 14, 12, 21, 17, 29, 24]);

// const array1 = ['Anna', 'Kostia', 'Mark', 'Katja', 'Sveta'];

// const  [a, , c, ...args] = array1;
// console.log(a);
// console.log(c);
// console.log([...args]);
// console.log(a);

// const array3 = [array2, ...args];
// console.log(array3);

const salaries = {
    John: 100,
    Pete: 300,
    Mary: 250,
  };
  
  function topSalary(salaries) {
    const entries = Object.entries(salaries);
  
    // console.log(entries);
  
    if (entries.length === 0) {
      return null;
    }
  
    let topPaidEmployee = '';
    let topSalary = 0;
  
    // Normal case
    // for (let entry of entries) {
    //   if (topSalary < entry[1]) {
    //     topSalary = entry[1];
    //     topPaidEmployee = entry[0];
    //   }
    // }
  
    for (let [name, salary] of entries) {
      if (topSalary < salary) {
        topSalary = salary;
        topPaidEmployee = name;
      }
    }
  
    return topPaidEmployee;
  }
  
  // console.log(topSalary(salaries));

  function sjdj(array1){
for (let i= 1; i < array1.length; i+=1) {
  const element = array1[i];
  console.log(`${i} element: ${array1[i]}`);
}
  }
  const array1 = [1, 2, 3, 4, 5];
  sjdj(array1);
  