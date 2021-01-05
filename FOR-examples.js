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


// var extraNumbers = [20, 50, 68, 209, 57, 96, 475, 7645, 29, 4593];

// function halfExtra(k) {
//     var newExtra = [];
//     var i = 0;
//     while (i < k.length / 2) {
//         newExtra.push(k[i]);
//         i++;
//     }
//     return newExtra;
// }

// console.log(halfExtra(extraNumbers));




// var extraNumbers = [20, 50, 68, 209, 57, 96, 475, 7645, 29, 4593];

// function halfExtra(k) {
//     var newExtra = [];
//     var i = k.length / 2;
//     while (i < k.length) {
//         newExtra.push(k[i]);
//         i++;
//     }
//     return newExtra;
// }

// console.log(halfExtra(extraNumbers));


// function qandaydir(x) {
//     var yanaBitta = [];
//     var i = 2;
//     while (i < x) {
//         if (x % i === 0) {
//             yanaBitta.push(i);
//         }
//         i++;
//     }
//     return yanaBitta;
// }
// console.log(qandaydir(100));

// var nextArray = [945, 563462, 45, 66, 8, 12, 4, 6,];

// console.log(nextArray.slice(0, 2));


// function evenNumbers(x) {
//     var onlyEven = [];
//     var i = 0;
//     while (i < x) {
//         if (i % 2 === 0) {
//             onlyEven.push(i);
//         }
//         i++;
//     }
//     return onlyEven;
// }

// console.log(evenNumbers(10));

// var jocopo = ["some", "apple", "new", "green"];
// first = "something"
// console.log(jocopo);

// var myArray = ["bmw", "toyota", "mers",];
// var myString = myArray.toString();
// console.log(myArray);
// console.log(myString);

// console.log(Math.PI);
// console.log(Math.random() * 100);
// console.log(Math.round(4,5));
// console.log(Math.pow(8, 2));
// console.log(Math.sqrt(49));
// console.log(Math.abs(-2, 3));
// console.log(Math.ceil(4.2));
// console.log(Math.ceil(4.9));
// console.log(Math.floor(4.1));
// console.log(Math.floor(Math.random() * 100));


// var myPets = ["Bobik", "Ksyuhsa", "Hamelton", "Raken", "Jeko"];

// console.log(myPets[Math.floor(Math.random() * myPets.length)]);

// var longWords = "we love playing basketball";
// var nextArray = longWords.split(" ");
// console.log(nextArray);

// var newCar = ["nexia", "matiz", "tiko", "damas", "lada",]
// console.log(newCar[Math.floor(Math.random() * newCar.length)]);
// console.log(Math.floor(Math.random() * 5));

// var words = "She a working girl she work the pole She break it down she take it low She fine as hell she about the dough"
// var arrayWords = words.split(" ")
// console.log(arrayWords);
// function toArray(x) {
//     var newArray = [];
//     var i = 0;
//     while (i < x.length) {
//         if (x[i].length < 4) {
//             newArray.push(x[i]);
//         }
//         i++;
//     }
//     return newArray;
// }
// toArray(arrayWords);

// var newCar = ["nexia", "matiz", "tiko", "damas", "lada",]
// var i = 0;
// var addedArrey = [];
// while (i < newCar.length) {
//     console.log(addedArrey.push(newCar[i] + "s"));
//     i++;
// }

// console.log(addedArrey);

// var i = 0;
// var addedArray = [];
// while (i < nextArray.length) {
//     if (nextArray[i].length < 5) {
//         addedArray.push(nextArray[i] + "s")
//     }
//     i++;
// }
// console.log(addedArray);
// var addedArrayString = addedArray.join(" ");
// console.log(addedArrayString);


// var overFour = ["smile", "apple", "new", "good", "position", "go"];

// var onlyFour = [];
// var i = 0;
// while (i < overFour.lenth); {
//     if (overFour[i].length < 4) {
//         onlyFour.push(overFour[i]);
//     }
//     i++;
// }    
// console.log(onlyFour);


// var firtstArray = ["Man", "ko'rishga", "yo'q"];
// var secondArray = ["sani", "ko'zim", "Tushundingmi!"];


// function concatTo(x, y) {
//     var newArray = [];
//     var i = 0;
//     while (i < x.length) {
//         var j = 0;
//         while (j < y.length) {
//             if (i === j && x[i] === "yo'q") {
//                 newArray.push(`${x[i]}. ${y[j]}`)
//             } else if (i === j) {
//                 newArray.push(`${x[i]} ${y[j]}`)
//             }
//             j++;
//         }
//         i++;
//     }
//     return newArray.join(" ");
// }

// console.log(concatTo(firtstArray, secondArray));


// function testFunction() {
//     var i = 0;
//     while (i < 5) {
//         var j = 0;
//         while (j < 5) {
//             console.log(`${i} ---- ${j}`);
//             j++;
//         }
//         i++;
//     }
// }

// testFunction();


// function numbersOfEs(word) {
//     var counter = 0;
//     var newArry = word.split("");
//     var i = 0;
//     while (i < newArry.length) {
//         if (newArry[i] === "e") {
//             counter++;
//         }
//         i++;
//     }
//     return counter;
// }

// console.log(numbersOfEs("elemtatey"));





// function numbersOfEs(word) {
//     var counter = 0;
//     var newArry = word.split("");
//     var i = 0;
//     while (i < newArry.length) {
//         if (newArry[i] === "e" || newArry[i] === "E") {
//             counter++;
//         }
//         i++;
//     }
//     return counter;
// }

// console.log(numbersOfEs("elemtatEy"));


// function numbersOfEs(word) {
//     var vowel = ["a", "e", "i", "u", "o"]
//     var counter = 0;
//     var newArry = word.split("");
//     var i = 0;
//     while (i < newArry.length) {
//         var j = 0;
//         while (j < vowel.length) {
//         if (newArry[i] === vowel[j]) {
//             counter++;
//         }
//         j++;
//         }
//         i++;   
//     }
//     return counter;
// }

// console.log(numbersOfEs("elemetatey"));

// var first = [1, 2, 3, 4, 5,];
// var counter = 0;
// var second = [6, 7, 8, 4, 5,];
// var i = 0;
// while (i < first.length) {
//     var j = 0;
//     while (j < second.length) {
//     if (first[i] === second[j]) {
//         counter++;
//     } 
//     j++;
// }
// i++;
// }
// console.log(counter);


// function primeNumbers()

// var first = [1, 2, 3, 4, 5];
// var second = [2, 1, 3, 5, 5];
// function addOrsub(x, y) {
//     var newArray = [];
//     var i = 0;
//     while (i < x.length) {
//         var j = 0;
//         while (j < y.length) {
//             if (x[i] === y[i] && i === j) {
//                 newArray.push(x[i] + y[i])
//             }
//             if (x[i] !== y[j] && i === j) {
//                 newArray.push(x[i] - y[j])
//             }
//             j++;
//         }
//         i++;
//     }
//     return newArray;
// }

// console.log(addOrsub(first, second));



function gradingStudents(grades) {
    var roundedGrades = [];
    var i = 0;
    while (i < grades.length) {
        if (grades[i] <= 38) {
            roundedGrades.push(grades[i]);
        } else if (5 - grades[i] % 5 < 3) {
            roundedGrades.push(grades[i] + (5 - (grades[i] % 5)));
        }  else {
            roundedGrades.push(grades[i]);
        }
        i++;
    }
    return roundedGrades;
}

console.log(gradingStudents([88]));























