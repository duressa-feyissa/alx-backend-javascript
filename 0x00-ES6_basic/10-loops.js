export default function appendToEachArrayValue(array, appendString) {
  const result = [];
  for (const val of array) {
    result.push(appendString + val);
  }

  return result;
}
