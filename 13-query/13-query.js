function queryParams(obj) {
  const objEntriesArray = Object.entries(obj);
  let res = "";

  objEntriesArray.forEach(([key, value], i) => {
    res += `${key}=${value}${i + 1 !== objEntriesArray.length ? "&" : ""}`;
  });
  return res;
}
const obj = {
  search: "Вася",
  take: 10,
};

const queryString = queryParams(obj);
console.log(queryString);
