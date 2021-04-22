//1 - Get 1 to 255 - Write a function that returns an array with all the numbers from 1 to 255.
function array_all_nums(){
    arr = [];
    for(i = 0; i <=255; i++){
        arr.push(i);
    }
    return arr;
}
console.log(array_all_nums());

//2 - Get even 1000 - Write a function that would get the sum of all the even numbers from 1 to 1000.  You may use a modulus operator for this exercise.
function array_all_even(){
    arr = [];
    for(i = 1; i <= 1000; i++){
        if(i%2 == 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(array_all_even());

//3 - Sum odd 5000 - Write a function that returns the sum of all the odd numbers from 1 to 5000. (e.g. 1+3+5+...+4997+4999).
function sum_odd_5000(){
    var sum = 0;
    for(i = 1; i < 5000; i++){
        if(i%2 != 0){
            sum = sum + i;
        }
    }
    return sum;
}
console.log(sum_odd_5000());

//4 - Iterate an array - Write a function that returns the sum of all the values within an array. (e.g. [1,2,5] returns 8. [-5,2,5,12] returns 14).
function sum_of_arr(){
    sum = 0;
    for(i = 0; i < arr.length; i++){
        sum = sum + arr[i];
    }
    return sum;
}

arr = [1,2,5]
console.log(sum_of_arr()); //returns 8

arr = [-5,2,5,12]
console.log(sum_of_arr()); //returns 14


//5 Find max - Given an array with multiple values, write a function that returns the maximum number in the array. (e.g. for [-3,3,5,7] max is 7)
function return_arr_max(){
    var max = 0
    for(i = 0; i < arr.length; i++){
        if(arr[i] > max){
            max = arr[i]
        } 
    }
    return max;
}

arr = [-3,3,5,7]
console.log(return_arr_max());//max is 7

arr = [0,300,5,-700]
console.log(return_arr_max());//max is 300

//6 Find average - Given an array with multiple values, write a function that returns the average of the values in the array. (e.g. for [1,3,5,7,20] average is 7.2)
function arr_avg(){
    sum = 0;
    for(i = 0; i < arr.length; i++){
        sum = sum + arr[i]; 
    }
    var avg = sum/arr.length;
    return avg;
}

arr = [1,3,5,7,20] //average is 7.2
console.log(arr_avg(arr));

//7 - Array odd - Write a function that would return an array of all the odd numbers between 1 to 50. (ex. [1,3,5, .... , 47,49]). Hint: Use 'push' method.
function arr_odd(){
    var arr = [];
    for(i = 1; i < 50; i++){
        if(i%2 != 0){
            arr.push(i);
        }
    }
    return arr;
}
console.log(arr_odd());

//8 - Greater than Y - Given value of Y, write a function that takes an array and returns the number of values that are greater than Y. For example if arr = [1, 3, 5, 7] and Y = 3, your function will return 2. (There are two values in the array greater than 3, which are 5, 7).
function greater_than_count(arr,y){
    var count = 0;
    for(i = 0; i < arr.length; i++){
        if(arr[i] > y){
            count++;
        }
    }
    return count;
}
    console.log(greater_than_count([1, 3, 5, 7], 3)); // expected 2
    console.log(greater_than_count([-1, 0, 500, 5], 5)); // expected 1

//9 - Squares - Given an array with multiple values, write a function that replaces each value in the array with the value squared by itself. (e.g. [1,5,10,-2] will become [1,25,100,4])
function arr_val_squares(arr){
    for(iter = 0; iter < arr.length; iter++){
        arr[iter] = arr[iter]**2;
    }
    return arr;
}

console.log (arr_val_squares([1,5,10,-2])); //will become [1,25,100,4]
console.log (arr_val_squares([-1,NaN,1000,0])); //will become [1,NaN,1000000,0]

//10 - Negatives - Given an array with multiple values, write a function that replaces any negative numbers within the array with the value of 0. When the program is done the array should contain no negative values. (e.g. [1,5,10,-2] will become [1,5,10,0])
function neg_to_zero(arr){
    for(i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 0;
        }
    }
    return arr;
}

console.log(neg_to_zero([1,5,10,-2]));//will become [1,5,10,0]
console.log(neg_to_zero([-10,0,1,2]));//will become [0,0,1,2]

//11 - Max/Min/Avg - Given an array with multiple values, write a function that returns a new array that only contains the maximum, minimum, and average values of the original array. (e.g. [1,5,10,-2] will return [10,-2,3.5])
function max_min_avg(arr){
        var max = arr[0];
        var min = arr[0];
        var sum = 0;
        for (var i = 0; i < arr.length; i++){
            sum = sum + arr[i];
            if(arr[i] > max){
                max = arr[i];
        }
        else if (arr[i] < min){
            min = arr[i];
        }
    }
    var newArr = [];
    newArr.push(max);
    newArr.push(min);
    var avg = sum/arr.length
    newArr.push(avg);

    return newArr;
}
console.log(max_min_avg([1,5,10,-2])); // expected [10,-2,3.5]
console.log(max_min_avg([-2,-1,1,2])); // expected [2,-2,0]

//12 - Swap Values - Write a function that will swap the first and last values of any given array. The default minimum length of the array is 2. (e.g. [1,5,10,-2] will become [-2,5,10,1]).
function swapVal(arr){
        var temp = arr[0];
        arr[0] = arr[arr.length - 1];
        arr[arr.length - 1] = temp;
        return arr;
    }

console.log(swapVal([1,5,10,-2])); //will become [-2,5,10,1]
console.log(swapVal([1000,899,999,799])); //will become [799,899,999,1000]

// 13 - Number to String - Write a function that takes an array of numbers and replaces any negative values within the array with the string 'Dojo'. For example if array = [-1,-3,2], your function will return ['Dojo','Dojo',2].
function numToString(arr){
    for(var i = 0; i < arr.length; i++){
        if(arr[i] < 0){
            arr[i] = 'Dojo';
        }
    }
    return arr;
}

console.log(numToString([-1,-3,2])); //will return ['Dojo','Dojo',2]
console.log(numToString([-10,0,2,-1])); //will return ['Dojo','Dojo',2]
