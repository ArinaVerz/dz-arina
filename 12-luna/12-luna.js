function luhnCheck(str) {
  const nCheck = str.replace(/\D/g, "");
  if (nCheck.length != 16) {
    return false;
  }
  const arrayWithEvenNumberX2 = nCheck
    .split("")
    .reverse()
    .map((item, i) => {
      if (i % 2 !== 0) {
        const numX2 = item * 2;
        if (numX2 > 9) {
          return numX2 - 9;
        }
        return numX2;
      }
      return item;
    });
  const sum = arrayWithEvenNumberX2.reduce((acc, item) => {
    return (acc += Number(item));
  }, 0);
  if (sum) {
    return sum % 10 === 0 ? true : false;
  }
}

console.log(luhnCheck("4539-1488-0343-6467"));
console.log(luhnCheck("4539SDADA-1SDAD488-ASD03WQEQ43-ASD6QXC467"));
console.log(luhnCheck("4561-1213-4367-2612-1231"));
