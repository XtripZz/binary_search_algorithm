// --------------------------------------------------------------------------------------------
// --------------------------------------BINARY SEARCH-----------------------------------------
// --------------------------------------------------------------------------------------------
const arrForSearch = [
  1,
  2,
  3,
  4,
  5,
  6,
  7,
  8,
  9,
  10,
  11,
  12,
  13,
  14,
  15,
  16,
  17,
  18,
  19,
  20,
];

// put page elements in variables
const input = document.querySelector("input");
const out = document.querySelector(".out");

// implementation search in function
function binarySearch(arr, num) {
  let left = -1; // нижняя граница поиска(либо же левая)
  let right = arr.length; // верхняя граница поиска (правая)

  // если разница будет равняться 1, цикл не выполнится, так как промежуточных элементов между ними нет
  while (right - left > 1) {
    // looking for a middle
    const mid = Math.floor((left + right) / 2);

    // check on comformity (проверка на соответствие)
    if (arr[mid] == num) {
      return mid;
    }

    // compare the middle element of the array with the desired number (сравниваем средний элемент массива с искомым числом)
    if (arr[mid] > num) {
      // / Если средний элемент 5, а искомый 3, это будет означать, что после среднего элемента, искомый элемент не встретится, значит убавляем верхний(right) предел поиска до значения середины
      right = mid;
    } else if (arr[mid] < num) {
      // Отзеркалим вышеописанный принцип, и при среднем эелемнте (Не просто mid, а arr[mid]) меньшему, по значению искомого элемента, изменим нижний(left) порог на значение середины
      left = mid;
    }
  }

  // binary search not found element
  return -1;
}

// call the function by pressing the button
document.querySelector("button").onclick = () => {
  out.innerHTML = binarySearch(arrForSearch, +input.value);
};
