function myFilter(array, callback) {
    let result = []
    for (const item of array) {
        if (callback(item)) {
            result.push(item)
        }
    }
    return result;
}
const array = [1, 2, 3, 4, 5, 6, 7];

  const moreThanThree = num => {
    return num > 3;
  };

  const evenNam = num => {
    return num % 3 == 0;
  };

  console.log(myFilter(array, evenNam));
  console.log(myFilter(array, moreThanThree));