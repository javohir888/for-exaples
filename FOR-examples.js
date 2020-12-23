// console.log("hello world")
// function names(nomer) {
//     var i = 1;
//     while (i < nomer) {
//         console.log(i);
//         i++;
//     }
// }

// names(3);

// function five(nomer) {
//     var i = 1; 
//     while (i < nomer) {
//         if (i % 5 === 0) {
//             console.log("Aka besh ming sum berib turing")
//         } else if (i % 3 === 0) {
//             console.log("Uch minga nma beradi hozir aka")
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }
// five(50);



// var person = 13;

// if (person >= 13) {
//     console.log("Sizga mumkin")
// } else {
//     console.log("yuq mumkin emas")
// }



// for (let i = 0; i <= 5; i++) {
//     if (i % 2 !==0)
//     console.log(i)
// }



// function toTen(number) {
//     let i = 1;
//     while (i <= number) {
//         if (i % 2 === 0) {
//             i++;
//             continue;
//         } else {
//             console.log(i);
//         }
//         i++;
//     }
// }
// toTen(30);

// function oddNumber(number) {
//     if (number % 2 === 0) {
//         console.log("Aka bu tub son emasakan")
//     } else if (number <= 1) {
//         console.log("Tre yuqoley")
//     } else {
//         console.log("Mana bu endi tub son!")
//     }
// }

// oddNumber(36);


// var names = "a";
// var lastName = "b";

// var names = ["a", "b", "c"]

// // index      0    1    2  ...
// names[1] = "e"
// console.log(names[1]);

// 
// console.log(numbers[0]);

// console.log(numbers.length);

// console.log(numbers[numbers.length - 1]);



// var numbers = [100, 12, 162, 45, 309, 45];
// var i = 0;
// while (i < numbers.length) {
//     if (numbers[i] >= 100) {
//         console.log(`${i} indexdai son 100 dan katta`);
//     } else {
//         console.log("100 dan kichgina bu");
//     }
//     i++;
// }

// var numbers = [100, 12, 162, 45, 309, 45];
// numbers.push(1000);
// console.log(numbers[numbers.length - 1]);

// numbers.unshift(22);
// console.log(numbers);

// var uzbekNames = [
//     "Alisher",
//     "Bekzod",
//     "Alyona",
//     "Kamola",
//     "Alimardon"
// ];

// function startWith(array) {
//     var otherNames = [];
//     var i = 0;
//     while (i < array.length) {
//         if (array[i].substr(0, 2) === "Al") {
//              otherNames.push(array[i])
//         }
//         i++;
//     }
//     return otherNames;
// }

// console.log(startWith(uzbekNames));


// var numbers = [100, 12, 58, 212, 56, 59, 55, 300];

// function newNumbers(x) {
//     var othernumbers = [];
//     var i = 0;
//     while (i < x.length) {
//         if (x[i] > 50 && x[i] < 60) {
//             othernumbers.push(x[i]);
//         }
//         i++;
//     }
//     return othernumbers;
// }

// console.log(newNumbers(numbers));


// var fruit = ["apple", "mango", "banana"];
// fruit.splice(1, 0,  "lemon", "kiwi");
// console.log(fruit);

// var vegetables = ["onion", "tomato", "potato"];
// var fruit = ["apple", "mango", "banana"];
// var newArr = fruit.concat(vegetables);
// console.log(newArr);

// console.log(vegetables.slice(1, 2))

// function find(x, y) {
//     return y.slice(2).concat(x.slice(2))
// }

// console.log(find(vegetables, fruit));




// function odd(x, y) {
//     var newOdd = [];
//     var i = x;
//     while (i < y) {
//         if (i % 2 !== 0) {
//             newOdd.push(i)
//         }
//         i++;
//     }
//     return newOdd;
// }
// console.log(odd(10, 40));


// function twentyToTen(min, max) {
//     var nextTwentyToTen = [];
//     var i = max;
//     while (i > min) {
//         nextTwentyToTen.push(i);
//         i--;
//     }
//     return nextTwentyToTen;
// }

// console.log(twentyToTen(10, 20));


var extraNumbers = [20, 50, 68, 209, 57, 96, 475, 7645, 29, 4593];

function halfExtra(k) {
    var newExtra = [];
    var i = 0;
    while (i < k.length / 2) {
        newExtra.push(k[i]);
        i++;
    }
    return newExtra;
}

console.log(halfExtra(extraNumbers));




var extraNumbers = [20, 50, 68, 209, 57, 96, 475, 7645, 29, 4593];

function halfExtra(k) {
    var newExtra = [];
    var i = k.length / 2;
    while (i < k.length) {
        newExtra.push(k[i]);
        i++;
    }
    return newExtra;
}

console.log(halfExtra(extraNumbers));


function qandaydir(x) {
    var yanaBitta = [];
    var i = 2;
    while (i < x) {
        if (x % i === 0) {
            yanaBitta.push(i);
        }
        i++;
    }
    return yanaBitta;
}
console.log(qandaydir(100));




















