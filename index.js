// Code your solution in this file!

//  return a new array containing the first two drivers from the passed-in array

const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];

const returnFirstTwoDrivers = function(array) {
    return drivers.slice(0, 2);
  };
console.log(returnFirstTwoDrivers(drivers)) ;

const returnLastTwoDrivers = function (array){
   return array.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];

function createFareMultiplier(number) {
  return function multiply(fare) {
    return fare * number;
  };
}

console.log (createFareMultiplier(1)(4));

const fareDoubler = createFareMultiplier(2);
console.log(fareDoubler(10));

const fareTripler = createFareMultiplier(3);
console.log(fareTripler(10));

function selectDifferentDrivers(x, y){
  return y(x);
}

   console.log(selectDifferentDrivers(drivers, returnFirstTwoDrivers));
