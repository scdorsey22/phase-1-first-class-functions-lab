const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo']

function returnFirstTwoDrivers() {
    return drivers.slice(0,2)
}

function returnLastTwoDrivers() {
    return drivers.slice(-2)
}

const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers]

const createFareMultiplier = function (num1) {
    return function (num2) {
    return num1 * num2
    }
}

// function fareDoubler(num1) {
// return num1 * 2
// }

const fareDoubler = createFareMultiplier(2)

const fareTripler = createFareMultiplier(3) 

function selectDifferentDrivers (names, last){
     return last(names)
}
