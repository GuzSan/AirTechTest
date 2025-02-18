//The cities that we are going to use
const citiesList = [
  "nasville",
  "nasville",
  "los angeles",
  "nasville",
  "Madrid",
  "memphis",
  "barcelona",
  "los angeles",
  "sevilla",
  "Madrid",
  "canary islands",
  "barcelona",
  "Madrid",
  "Madrid",
  "nasville",
  "barcelona",
  "london",
  "berlin",
  "Madrid",
  "nasville",
  "london",
  "Madrid",
  "Madrid",
];


function CountCities(cities) {
  // Create an object to store the count of each city
  const cityCount = {};

  // Loop through the cities list and count occurrences
  for (let city of cities) {
    cityCount[city] = (cityCount[city] || 0) + 1;
  }

  // Convert the cityCount object to an array of [city, count] pairs
  const sortedCities = Object.entries(cityCount)
    .sort((a, b) => b[1] - a[1]) // Sort by count in descending order

  // Get all cities by descending order
  sortedCities.forEach(([city, count]) => {
    console.log(`${city}: ${count}`);
  });
}



CountCities(citiesList);
