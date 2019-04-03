function findPromiseNumber(arr){
    var temp = [];
    for(var i = 0; i < arr.length -1 ; i++){
        if (arr[i] > 2) {
            // check element is promise number
            result = getNumber(arr[i]);
            if (result){
                temp.push(arr[i]);
            }           
        }else if(arr[i] == 2){
            temp.push(arr[i]);
        }
    }
    return temp;
}

function getNumber(element){
    var i = 2;
    do {
        var num = element % i;
        if (num == 0){
            return false;
        }else{
            i++;
        }
    } while (i < element);
    return true;
}

const arr = [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,99,97,100,101];
const arr2 = findPromiseNumber(arr);
console.log(arr2);

