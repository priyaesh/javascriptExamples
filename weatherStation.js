var station = {
    city:"string",
    temp:number,
    windSpeed:number,
    condition:[high,mild,sunny,raining]
    
};

var tempInCelisus = function celisus(temp){
                     return (5/9) * (temp - 32);
                    }

var tempInFahrenheit = function fahrenheit(temp){
                        return (temp*9 / 5 )+ 32;
}




