
const searchbtn = document.querySelector("#searchbutton");

console.log("test")

const getWeather = async () => {
    try{
        const apiKey = 'your api key';
        const city = document.querySelector("#city").value
        if (city === ''){
            console.log('please enter a city name')
            return;
        }
        const url = `your api + you api key`;
        const res =  await fetch(url);
        if(!res.ok){ throw new Error("an error has occured!")}
        
    const data = await res.json();
    const text = document.querySelector('#temp');
    const weather = document.querySelector('#weatherResult')
    const iconimage = document.querySelector("#icon");
    text.textContent = `${data.main.temp}°C`;
    let iconCode = data.weather[0].icon;
    let iconUrl = `https://openweathermap.org/img/wn/${iconCode}@4x.png`;
    iconimage.src = iconUrl;

    weather.classList.add("show")


    console.log(data);

    } catch(error) {
        console.log("an error has occured!")
    }
}



searchbtn.addEventListener("click", function(event){
    event.preventDefault();

    console.log("Button clicked!");
    getWeather();
})
