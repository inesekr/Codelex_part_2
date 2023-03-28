/**
 * Second Largest
 *
 * Array of numbers are passed in the function, your task is to find the second largest number.
 */

function secondLargest(array: number[]) :number{
return array.sort(function(a,b){
    return b-a})[1]
}


export { secondLargest };
