function fusion(a, b) {
  const res = [];
  let i = j = 0;
  
  while (i < a.length && j < b.length) {
    
    if (a[i] < b[j]) {
      res.push(a[i]);
      i++;
    } else {
      res.push(b[j]);
      j++;
    }
    
  }
  
  if (i < a.length) {
    return [...res, ...a.slice(i)];
  } else {
    return [...res, ...b.slice(j)];
  }
}

function mergeSort(arr) {
  console.log(arr.length);
  if (arr.length === 1) {
    return arr;
  } else if (arr.length === 2) {
    if (arr[0] < arr[1]) {
      return [arr[0], arr[1]];
    } else {
      return [arr[1], arr[0]];
    }
  } else {
    const middle = Math.floor(arr.length / 2);
    return fusion(
     mergeSort(arr.slice(0, middle)),
     mergeSort(arr.slice(middle))
    );
  }
}

let arr = [1, 4, 9, 2, 10, 7, 6];

console.log(mergeSort(arr));
