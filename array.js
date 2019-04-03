Array.prototype.toPalindrome = function(item,index,array) {
    var temp = this.slice();
    var arr = temp;
    for (let index = temp.length - 2; index >= 0; index--) {
        const element = temp[index];
        arr.push(element);
    }
    return arr;  
};

arr = [1,2,3];
arr2 = arr.toPalindrome(); // return [1, 2, 3, 2, 1]
arr3 = arr2.toPalindrome();
console.log(arr, arr2, arr3);