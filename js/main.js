//1-masala
let prompt = prompt("Enter number")
function sumInput() {
    let arr = []
    let result;
    prompt.split('').forEach(el => {
        if (isNaN(el) || el === ' ') {
            return false;
        } else {
            arr.push(Number(el))
            result = arr.reduce((a, b) => a + b)
        }
    })
    console.log(result)
}
sumInput()


//2-masala
let array = ["Jazz", "Blues"]
console.log(array);
array.push("Rock-n-roll")
console.log(array);
array[Math.floor(array.length / 2)] = "Classics"
console.log(array);
array.shift()
console.log(array);
array.unshift("Reggae")
array.unshift("Rap")
console.log(array);


// 3-masala
let salaries = {
    "Akmal": 1200,
    "Salim": 5200,
    "Karima": 1800,
}
function sumSalaries(salaries) {
    let money = Object.values(salaries)
    console.log(money);
    let result = 0
    for (let i of money) {
        result += i
    }
    return result
}
console.log(salaries);
console.log(sumSalaries(salaries));


// 4-MASALA
const arr = [1, 3, 3, 3, 5, 6, 2, 8, 9, 0, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20]
function calcSum(arr) {
    const toqArr = []
    const juftArr = []
    for (let i of arr) {
        if (arr[i] % 2 === 0) {
            juftArr.push(arr[i])
            console.log(arr[i]);
        } else {
            toqArr.push(arr[i])
        }
    }
    return `Juft array ${juftArr} Toq array${toqArr}`
}
console.log(calcSum(arr));



//5-masala
let arrr = [-3, -2, 1, 9];
let notFoundNums = [];

for(let i = arrr[0]; i<= arrr[arrr.length - 1] ; i++){
  notFoundNums.push(i)
}
console.log(notFoundNums);
///Ergash Ziyodullayev