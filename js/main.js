
const searchbtn = document.querySelector("#searchbutton");

console.log("test")

const getWeather = async () => {
    try{
        const apiKey = 'e466cbef4d4e3b5fcd41f6c39ad0d364';
        const city = document.querySelector("#city").value
        if (city === ''){
            console.log('please enter a city name')
            return;
        }
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
        const res =  await fetch(url);
        if(!res.ok){ throw new Error("an error has occured!")}
        
    const data = await res.json();
    const temperature = document.createElement('h2');
    temperature.textContent = `${data.main.temp}°C`;
    const div = document.querySelector('#maincard')
    div.appendChild(temperature);
    console.log(data.main.temp);

    } catch(error) {
        console.log("an error has occured!")
    }
}

searchbtn.addEventListener("click", function(event){
    event.preventDefault();

    console.log("Button clicked!");
    getWeather();
})
