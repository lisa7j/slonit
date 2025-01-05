// Метод arr.slice 

function mySlice(arr, start, end) {
    if (start<0) start = arr.lenght + start;
    if (end<0) end = arr.lenght + end;
    
    start = Math.max(0, start);
    end = Math.min(arr.length, end);

    let result = [];
    arr.forEach((item, index) => {
        if (index >= start && index < end) {
            result.push(item)
        }
    });
    return result;
}
const arr = [2, 4, 5, 10, 43, 60];
console.log(mySlice(arr, 2, 5));



// Метод arr.indexOf
function myIndexOf(array, item, from) {
    return array.findIndex((element, index) => index >= from && element === item);

}
const array = [2, 4, 5, 10, 43, 60];
console.log(myIndexOf(array, 5, 1));

// Метод arr.includes

function myIncludes(ar, item, from) {
    return ar.findIndex((element, index) => index >= from && element === item) !== -1;
    }
const ar = [2, 4, 5, 10, 43, 60];
console.log(myIncludes(ar, 5, 2));