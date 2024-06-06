Solution 1: 

Test values : considering that the value to be searched in the nested object can be of type: number, string, object, array.

   // Helper function to check if the value is an object
    function isObject(val) {
        return val !== null && typeof val === 'object';
    }

    // Helper function to check if the value is an array
    function isArray(val) {
        return Array.isArray(val);
    }

    // Helper function to compare two arrays deeply
    function deepArrayEqual(arr1, arr2) {
        if (arr1.length !== arr2.length) {
            return false;
        }

        for (let i = 0; i < arr1.length; i++) {
            if (!deepEqual(arr1[i], arr2[i])) {
                return false;
            }
        }

        return true;
    }

    // Helper function to compare two objects deeply
    function deepEqual(obj1, obj2) {
         // comparing values i.e not object and not array
        if (obj1 === obj2) {
            return true;
        }

        if (isArray(obj1) && isArray(obj2)) {
            return deepArrayEqual(obj1, obj2);
        }

        if (!isObject(obj1) || !isObject(obj2)) {
            return false;
        }

        let keys1 = Object.keys(obj1);
        let keys2 = Object.keys(obj2);

        if (keys1.length !== keys2.length) {
            return false;
        }

        for (let key of keys1) {
            if (!keys2.includes(key) || !deepEqual(obj1[key], obj2[key])) {
                return false;
            }
        }

        return true;
    }

function contains(obj, value) {

    // Base case: if the value is anything other than object, directly compare them
    if (!isObject(obj)) {
        return obj === value;
    }

    if (deepEqual(obj, value)) {
        return true;
    }

    // Iterate over the object
    for (let key in obj) {
        if (obj.hasOwnProperty(key)) {
            if (contains(obj[key], value)) {
                return true;
            }
        }
    }

    // return : false for no match found
    return false;
}





Solution 2 :
 function SumSquares(list) {
    let sum = 0; // storing the result
    
    function calculateSumOfSquares(value) {
        if (Array.isArray(value)) {
            for (let item of value) {
                calculateSumOfSquares(item);
            }
        } else {
            sum += value * value;
        }
    }
    
    // As the question suggests, we will have only number inputs in the list.
    calculateSumOfSquares (list);
    
    // Return the result : total sum
    return sum;
}
