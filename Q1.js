// Question 1: Clean the room function: given an input of [1,2,4,591,392,391,2,5,10,2,1,1,1,20,20], make a function that organizes these into individual array that is ordered. For example answer(ArrayFromAbove) should return: [[1,1,1,1],[2,2,2], 4,5,10,[20,20], 391, 392,591]. Bonus: Make it so it organizes strings differently from number types. i.e. [1, "2", "3", 2] should return [[1,2], ["2", "3"]]


const arr = [1, 2, 4, 591, 392, 391, 2, 5, 10, 2, 1, 1, 1, 20, 20, 22];

const obj = arr.reduce((accum, val) => {
    accum[val] = accum[val] || [];
    accum[val].push(val);
    return accum;
}, {});


const finalArr = Object.values(obj).map(val => val.length > 1 ? val : val[0]);
console.log(finalArr);

