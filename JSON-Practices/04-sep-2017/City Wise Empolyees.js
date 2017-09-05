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
// Javacript Using city Wise Employees Print In dec_Oreder
let countries = employee.permittedCountries;
countries.sort((a, b) => ((a.employeeAddress.city === b.employeeAddress.city) ? 0 : ((a.employeeAddress.state < b.employeeAddress.state) ? 1 : -1)));
console.log(countries)
// UnderScore JS Using city Wise Employees Print In dec_Oreder
let state = _.sortBy(countries, x => x.employeeAddress.city);
state.reverse();
console.log(state)