// Remember, we're gonna use strict mode in all scripts now!
"use strict";

// const x = "23";
// if (x === 23);

// const calAge = birthYear => 2037 - birthYear;

// console.log(calAge(1991));

// Problem 1:
/* We work for a company building a smart home thermometer. Our most
recent task is this: "Given an array of temperatures of one day, calculate the temperature amplitude.
Keep in mind that sometimes there might be a sensor error." */

const temperatures = [3, -2, -6, -1, "error", 9, 13, 17, 15, 14, 9, 5];

// 1. Understanding the problem
// - What is temp amplitude? Answer: difference between highest and lowest temp
// - How to compute max and min temperatures?
// - What's a sensor error? And what to do?

// 2. Breaking up into sub-problems
// - How to ignore errors?
// - Find max value in temp array
// - Find min value in temp array
// - Subtract min from max (amplitude) and return it

const calcTempAmplitude = function (temps) {
    // create max/min variable and defining the first element of the array as max/min temp
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temperatures.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== "number") continue;
        /* test if the current value is greater than the max value in the array
         and if it is the new max an becomes the new current value in the array */
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitude = calcTempAmplitude(temperatures);
console.log(amplitude);

// Problem 2:
// Function should now receive 2 arrays of temps

// 1. Understanding the problem
// - With 2 arrays, should we implement functionality twice? No! Just merge the two arrays

// 2. Breaking up into sub-problems
// - Merge 2 arrays

const calcTempAmplitudeNew = function (temp1, temp2) {
    // merge two arrays and return a new array
    const temps = temp1.concat(temp2);
    console.log(temps);
    // create max variable
    let max = temps[0];
    let min = temps[0];

    for (let i = 0; i < temperatures.length; i++) {
        const curTemp = temps[i];

        if (typeof curTemp !== "number") continue;
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};
const amplitudeNew = calcTempAmplitudeNew([3, 5, 1], [9, 0, 5]);

console.log(amplitudeNew);

// Debugging
const measureKelvin = function () {
    const measurement = {
        type: "temp",
        unit: "celsius",
        // The problem is with the prompt as it always returns a string
        // C. Fix
        // value: Number(prompt("Degrees celsius: ")),
        value: 10,
    };

    // B. Find
    // console.log(measurement);
    console.table(measurement);

    // console.log(measurement.value);
    // console.warn(measurement.value);
    // console.error(measurement.value);

    const kelvin = measurement.value + 273;
    return kelvin;
};

// A. Identify the bug
console.log(measureKelvin());

// Using a debugger
const calcTempAmplitudeBug = function (temp1, temp2) {
    const temps = temp1.concat(temp2);
    console.log(temps);

    // C. Fix because min is equal to zero the min value will always be zero even if the min
    // value in the array is 1 which should be the min value printed to the console.
    let max = 0;
    let min = 0;

    for (let i = 0; i < temps.length; i++) {
        const curTemp = temps[i];
        if (typeof curTemp !== "number") continue;

        // B. Find
        if (curTemp > max) max = curTemp;
        if (curTemp < min) min = curTemp;
    }
    console.log(max, min);
    return max - min;
};

const amplitudeBug = calcTempAmplitudeBug([3, 5, 1], [9, 4, 5]);
// A. Identify
console.log(amplitudeBug);
