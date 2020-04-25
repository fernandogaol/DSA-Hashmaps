const HashMap = require('./hashMap');

// {"Hobbit": "Bilbo"}, {"Hobbit": "Frodo"},
// {"Wizard": "Gandalf"}, {"Human": "Aragorn"}, {"Elf": "Legolas"}, {"Maiar": "The Necromancer"},
// {"Maiar": "Sauron"}, {"RingBearer": "Gollum"}, {"LadyOfLight": "Galadriel"}, {"HalfElven": "Arwen"},
// {"Ent": "Treebeard"}

// function Main() {
//   let lotr = new HashMap();
//   lotr.set('Hobbit', 'Frodo');
//   lotr.set('Hobbit', 'Bilbo');
//   lotr.set('Wizard', 'Gandolf');
//   lotr.set('Human', 'Aragorn');
//   lotr.set('Elf', 'Legolas');
//   lotr.set('Maiar', 'The Necromancer');
//   lotr.set('Maiar', 'Sauron');
//   lotr.set('RingBearer', 'Gollum');
//   lotr.set('LadyOfLight', 'Galadriel');
//   lotr.set('HalfElven', 'Arwen');
//   lotr.set('Ent', 'Treebeard');
//   console.log(lotr.get('Hobbit'));
//   console.log(lotr.get('Maiar'));
//   console.log(lotr);
// }
// console.log('test');
// Main();

// // What are the values of Maiar and Hobbit that you have? Is there a discrepancy? Explain your answer.
// //Bilbo and Sauron

// // What is the capacity of your hash table after you have hashed all the above items? Explain your answer.
// //24

// //2. WhatDoesThisDo
// //   console.log(map1.get(str1)); >> 20
// // console.log(map2.get(str3)); >> 10

// const WhatDoesThisDo = function () {
//   let str1 = 'Hello World.';
//   let str2 = 'Hello World.';
//   let map1 = new HashMap();
//   map1.set(str1, 10);
//   map1.set(str2, 20);
//   let map2 = new HashMap();
//   let str3 = str1;
//   let str4 = str2;
//   map2.set(str3, 20);
//   map2.set(str4, 10);

//   console.log(map1.get(str1));
//   console.log(map2.get(str3));
// };

// WhatDoesThisDo();

//3. Demonstrate understanding of Hash maps

//keys = 0, 22, 31, 4, 15, 28, 17, 88, 59
// [22,88, open, open, 4, 15, 28, 17,59,31,10]

// let wordsList = ['hheellloo', 'hhooww', 'aaaarrrreee', 'yyyyyoooouuuuu'];

// wordsList = wordsList.map((word) => word.replace(/(.)\1+/g, '$1'));

// console.log(wordsList);

// function removeDup(str) {
//   let results = '';
//   let map = new HashMap();
//   for (let i = 0; i < str.length; i++) {
//     map.set(str[i], str[i]);
//   }
//   for (let i = 0; i < str.length; i++) {
//     try {
//       results += map.get(str[i]);
//       map.delete(str[i]);
//     } catch (key) {}
//   }
//   return results;
// }

// console.log(removeDup('google all that you think can think of'));

// const palindrome = (string) => {
//   const obj = {};
//   let odd = 0;
//   for (let i = 0; i < string.length; i++) {
//     let word = string[i];
//     if (obj[word] === undefined) {
//       obj[word] = 1;
//     } else {
//       obj[word]++;
//     }
//   }
//   for (let key in obj) {
//     if (obj[key] % 2 !== 0) {
//       odd++;
//     }
//     if (odd > 1) {
//       return false;
//     }
//   }
//   return true;
// };
// console.log(palindrome('north'));

// const palindrome = (string) => {
//   const palindromeMap = new Map();
//   let odd = 0;
//   for (let i = 0; i < string.length; i++) {
//     if (palindromeMap.get(string[i]) === undefined) {
//       palindromeMap.set(string[i], 1);
//     } else {
//       let char = palindromeMap.get(string[i]);
//       palindromeMap.set(string[i], (char += 1));
//     }
//   }
//   for (let i = 0; i < palindromeMap.size; i++) {
//     if (palindromeMap.get(string[i]) % 2 !== 0) {
//       odd++;
//       console.log('odd', odd);
//     }
//     if (odd > 1) {
//       return false;
//     }
//   }
//   return true;
// };

// console.log(palindrome('acecarr'));



// const groupAnagrams = (strArr) => {
//   const anagramMap = new Map()
//   strArr.forEach((word) => {
//     let sorted = alphabetize(word)
//     if(anagramMap.has(sorted)) {
//       anagramMap.get(sorted).push(word)
//     }
//     else {
//       anagramMap.set(sorted, [word])
//     }
//   }) 
//   return [...anagramMap.values()]
// }

// const alphabetize = word => {
//   let alphebtized = word.split('').sort().join('')
//   return alphebtized
// }

// console.log(groupAnagrams(['east', 'cars', 'acre', 'arcs', 'teas', 'eats', 'race']))

// function separateChains (key, value) {
//     const object = {"name": ["Carlo", "Megan"]}; 
//     const temp = []; 
//     for (var oldKey in object) {
//       if (object[key] !== undefined && !Array.isArray(object[key])) {
//         temp.push(object[oldKey]); 
//         temp.push(value); 
//         object[oldKey] = temp; 
//         return object; 
//       }
//       else if (Array.isArray(object[key])) {
//         object[key].push(value); 
//         return object; 
//       }
//     }
    
//    object[key] = value; 
//    return object; 
//   }
// console.log(separateChains("name", "Chris"));


