function makeCar () {
  var makes = ["Cheavy", "Gm", "Fiat", "BMW", "Ferary"];
  var models = ["Cadilac", "500", "Bell-Air", "Taxi", "Torpedo"];
  var years = [1995, 1954, 1948, 1955, 1968];
  var colors = ["white", "blue", "green", "black", "yellow"];
  var convertible = [true, false];

  var randMakes = Math.floor (Math.random() * makes.length);
  var randModels = Math.floor (Math.random() * models.length);
  var randYears = Math.floor (Math.random() * years.length);
  var randColors = Math.floor (Math.random() * 5);
  var randConvertible = Math.floor (Math.random() *2);
  var randPassengers = Math.floor (Math.random() * 5) + 1;

  car = {
    make:makes[randMakes],
    model:models[randModels],
    year:years[randYears],
    color:colors[randColors],
    convertible:convertible[randConvertible],
    passengers:randPassengers
  };

  return car;
}

function displaySell (car) {
  console.log ("Your new car is a " + car.year + " " + car.model + " " + car.make + " " + car.color + " " + car.convertible + " " + car.passengers);
}
var CarToSell = makeCar();
displaySell (CarToSell);


