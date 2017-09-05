  'use strict'
  var _ = require('underscore-node')
    var country = {
        "countries": [
            "US",
            "India",
            "China",
            "Japan"
        ]
    }


    var perCountries = {
        "permittedCountries": [
            "US",
            "India"
        ]
    }
    var countries = country.countries;
    var perCountries = perCountries.permittedCountries;
    var nonCountry = _.difference(countries,perCountries)
    console.log(nonCountry)