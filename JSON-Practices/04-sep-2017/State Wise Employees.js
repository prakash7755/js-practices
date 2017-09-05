'use strict'
var _ = require('underscore-node');
var employee = {
    "permittedCountries": [
        {
            "employeeId": "1",
            "employeeAddress": {
                "city": "Bangalore",
                "state": "Karnataka"
            }
        },
        {
            "employeeId": "2",
            "employeeAddress": {
                "city": "Chennai",
                "state": "TamilNadu"
            }
        },
        {
            "employeeId": "4",
            "employeeAddress": {
                "city": "Bangalore",
                "state": "Karnataka"
            }
        },
        {
            "employeeId": "5",
            "employeeAddress": {
                "city": "Chennai",
                "state": "TamilNadu"
            }
        }
    ]
};
// Javacript Using State Wise Employees Print In dec_Oreder
let countries = employee.permittedCountries;
// countries.sort((a, b) => ((a.employeeAddress.state === b.employeeAddress.state) ? 0 : ((a.employeeAddress.state < b.employeeAddress.state) ? 1 : -1)));
  countries.sort( function (a,b) {
    var s1 = a.employeeAddress.state;
    var s2 = b.employeeAddress.state;
    if (s1 === s2) {
        return 0
    }
    if (s1 < s2 ){
        return 1
    }
    if (s1 > s2) {
        return -1
    }
  })
console.log(countries)


//UnderScore JS Using State Wise Employees Print In dec_Oreder

let state = _.sortBy(countries, x => x.employeeAddress.state);
state.reverse();
console.log(state)