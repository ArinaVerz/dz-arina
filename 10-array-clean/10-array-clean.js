function filter(arr, remove) {
    const filterArray = [];
     for (let i = 0; i < arr.length; i++) {
        if (!remove(arr[i])) {
            filterArray.push(arr[i]);
    }
  }
    return filterArray;
}

function shouldRemove(num) {
    return num < 0;
}

const array = [2, -6, 7, -39, 45];
const filterNums = filter(array, shouldRemove);

console.log(filterNums);