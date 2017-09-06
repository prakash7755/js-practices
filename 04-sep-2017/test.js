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
    countries.filter('US')
    console.log(countries);
