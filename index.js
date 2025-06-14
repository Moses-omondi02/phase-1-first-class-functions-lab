const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
// return first two drivers function
const returnFirstTwoDrivers = function(drivers) {
  return drivers.slice(0, 2);
};

// return last two drivers function
const returnLastTwoDrivers = function(drivers) {
  return drivers.slice(-2);
};

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]; // selecting drivers array

 
function createFareMultiplier(integer) {
  return function(fare) {
    return fare * integer;
  };
}// create fare multiplier higher-order function


const fareDoubler = createFareMultiplier(2);// fare doubler function

// fareTripler function
const fareTripler = createFareMultiplier(3);

// selectDifferentDrivers function
function selectDifferentDrivers(drivers, driverSelector) {
  return driverSelector(drivers);
}

