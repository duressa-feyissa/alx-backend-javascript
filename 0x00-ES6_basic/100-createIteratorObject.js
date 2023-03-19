export default function createIteratorObject(report) {
  const array = [];
  for (const value of Object.values(report.allEmployees)) {
    array.push(...value);
  }
  return array;
}
