

const apiKey = '57df789ae4965f62a6a161f8b63d7642'

const boston = '4930956'
const newYorkCity = '5128581'


let getWeather = async (city, cityName) => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&units=imperial&appid=${apiKey}`)
    let data = await response.json();
    document.querySelector('.currentWeather').innerHTML = data.main.temp;
    document.querySelector('.cityName').innerHTML = cityName
    return data.main.temp;
}

getWeather(boston, 'Boston');
// getWeather(newYorkCity, 'New York');

let cities = []

let getCities = async () => {
    let response = await fetch('city.list.json');
    let data = await response.json();
    cities.push(data)
    console.log(data)
}

getCities();
console.log(cities)






// async function callAsync() {
//   let currentWeather = await getWeather();
//   console.log(currentWeather);
// }

// callAsync();



// let weather = async () => {
//     let response = await fetch(`api.openweathermap.org/data/2.5/weather?id=${boston}&appid=${apiKey}`);
//     let data = await response.json();
//     return data;
// }

// weather().then(data => console.log(data));

// fetch(`https://cat-fact.herokuapp.com/facts`)
//     .then(response => {
//         console.log(response.json());
//     })
//     .then(users => {
//         console.log(users)
//     });

// fetch('https://jsonplaceholder.cypress.io/todos/1')
//   .then(response => response.json())
//   .then(json => console.log(json))


// function getWeather() {
//   fetch(`http://api.openweathermap.org/data/2.5/weather?id=${boston}&units=imperial&appid=${apiKey}`)
//   .then(function(res) {
//       return res.json();
//   })
//   .then(function(data) {
//       console.log(data.main)
//       return data
//   }).then(function(data){
//     currentWeather = data.main.temp
//   })
//   .catch(error => console.log(error))
// }