const _ = {
    clamp(num, low, up) {
      if (num < low){
        return low
      }
      if (num > up){
        return up
      }
      if (num > low && num < up){
        return num
      }
    },
    inRange(num, start, end) {
      if (start < end){
        if (end === undefined){
          if (num < 0 || num >= start){
            return false
          } else {return true}
        }
        if (end !== undefined){
          if (num < start || num >= end){
            return false
          } else {return true}
        }
      } else {return true}
    },
    words(str) {
      const newArr = str.split(' ');
      return newArr;
    },
    pad(str, length){
      if (str.length >= length){return str}
      else{
        const startPaddingLength = Math.floor((length - str.length)/2);
        const endPaddingLength = length - str.length - startPaddingLength;
        const paddedStr = ' '.repeat(startPaddingLength) + str +' '.repeat(endPaddingLength);
        return paddedStr;
      }
    },
    has(obj, key){
      const hasValue = obj[key];
      if (hasValue !== undefined) {
        return true
      } else {
        return false
      }
    },
    invert(obj){
      let newObj = {};
      for(let key in obj){
        const originalValue = obj[key];
        newObj[originalValue] =  key;  
      }
      return newObj
    },
    findKey(obj, predicate){
      for (let key in obj){
        let value = obj[key];
        let returnVal = predicate(value)
        if (returnVal){
          return key
        }
      }
      return undefined
    },
    drop (arr, num){
      let newArr = [];
      if (num === undefined){
        num = 1;
      }
      for (var i = 1; i < arr.length - num + 1; i++){
        newArr.push(arr[arr.length - i])
      }
      return newArr;
    },
    dropWhile(arr, predicate){
      const pred = (element, index) => {
        return !predicate(element, index, arr)
      }
      let dropNumber = arr.findIndex(pred);
      let dropArray = this.drop(arr, dropNumber);
      return dropArray;
    },
    chunk(arr, size){
      if (size === undefined){
        size = 1;
      }
      let newArr = [];
      for (var i = 0; i < arr.length; i += size){
        newArr.push(arr.slice(i, i + size))
      }
      return newArr
    }
  };