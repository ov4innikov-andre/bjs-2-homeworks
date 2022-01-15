// Задание 1
function getArrayParams(arr) {
    let min, max, sum, avg;
    min = Infinity;
    max = -Infinity;
    sum = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i];
        }
        if (arr[i] < min) {
            min = arr[i];
        }
        sum = sum + arr[i];
    }
    avg = +((sum / arr.length).toFixed(2));
    return {
        min: min,
        max: max,
        avg: avg
    };
}
// Задание 2
function worker(arr) {
    let sum;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    return sum;
	
}

function makeWork(arrOfArr, func) {
    let max;
    for (let k = 0; k < arrOfArr.length; k++) {
        func(arrOfArr[k]);
        if (func(arrOfArr[k]) > max) {
            max = func(arrOfArr[k]);
        }
    }
    return max;
}
// Задание 3
function worker2(arr) {
    // Ваш код
}