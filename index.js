

const apiKey = '57df789ae4965f62a6a161f8b63d7642'

let getWeather = async (city) => {
    let response = await fetch(`http://api.openweathermap.org/data/2.5/weather?id=${city}&units=imperial&appid=${apiKey}`)
    let data = await response.json();
    document.querySelector('.weather').textContent = `${data.main.temp}°F`;
    return data.main.temp;
}

let searchCity = async (cityName) => {
    let response = await fetch('city.list.json');
    let data = await response.json();
    let searchArr = data.filter(res => res.name.includes(cityName))
    searchArr.forEach(element => {
        const para = document.createElement("p")
        para.classList.add('result-item')
        const node = document.createTextNode(`${element.name}${element.state ? `, ${element.state}` : ''}, ${element.country}`)
        para.appendChild(node)
        document.querySelector('.results').appendChild(para)
        para.addEventListener('click', function(){
            getWeather(element.id)
            console.log(element.id)
        })
    });
    console.log(searchArr)
    // console.log(data.find(el => el.name = "Boston"))
}

document.querySelector('.submit').addEventListener('click', function() {
    searchCity(document.querySelector('.search-bar').value)
})

// console.log(cities.find(element => element === 'Boston'))






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