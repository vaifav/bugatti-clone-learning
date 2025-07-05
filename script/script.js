const arr = [10, 10, 20, 10, 30, 40, 20, 70, 30, 20, 40, 60, 20];
const freq = {};

arr.forEach((item) => {
    if (freq[item]) {
        freq[item]++;
    } else {
        freq[item] = 1;
    }
});

for (const key in freq) {
    console.log(`${key} => ${freq[key]}`);
}

const num = ['1i', '2j', '3k', '4x', '5y'];
const numArr = num.map((e) => parseInt(e));


console.log(num);
console.log(numArr);


const oddEven = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const odd = oddEven.filter((item) => item % 2 !== 0);
const even = oddEven.filter((item) => item % 2 === 0);

console.log(odd);
console.log(even);

const people = [
    { name: "Ivan", age: 18, country: "USA" },
    { name: "Jane", age: 17, country: "Africa" },
    { name: "Ram", age: 8, country: "India" },
    { name: "Farhan", age: 28, country: "UAE" },
];


const adults = people.filter((person) => person.age >= 18);
console.log(people);
console.log(adults);


const unqDup = [1, 10, 5, 2, 20, 3, 4, 1, -9, 5, 6, 8, 7, 8, 9, 10, 100];
const unq = unqDup.filter((val, index, arr) => arr.indexOf(val) === index);
console.log(unq);

const peopleSort = people.toSorted((a, b) => a.name.localeCompare(b.name));
console.log(people);
console.log(peopleSort);




const largestNum = unqDup.reduce((acc, crnt) => {
    return (acc > crnt ? acc : crnt);
}, -Infinity);

console.log(largestNum);


const fact = [1, 2, 3, 4, 5];
const fact5 = fact.reduce((accumulator, value) => accumulator * value, 1)

console.log(fact5);


const nums = [1, 2, 3, 4];
const sum = nums.reduce((acc, val, index) => {
    if (nums.length % (index + 1) === 0) {
        return acc + (val ** 2);
    }
    return acc;
}, 0)


console.log(sum);

const newNums = [10, 20, 30, 40, 50];

for (const key of newNums) {
    console.log(key);
}

const fruit1 = "Apple";
const fruit2 = "Orange";
const fruit3 = "Mango";
const fruit4 = "Kiwi";
const fruit5 = "Grapes";

function fruits(...frt) {
    console.log(frt);
}

fruits(fruit1, fruit2, fruit3, fruit4, fruit5);