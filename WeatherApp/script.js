const city = document.getElementById('cityInput')
const btn = document.getElementById('submitBtn')
const cityName = document.getElementById('cityName')
const temp = document.getElementById('temperature')
const time = document.getElementById('time')
async function getData(cityName){
    const result = await fetch(`http://api.weatherapi.com/v1/current.json?key=67f0b70a44dd4d628d674957240811&q=${cityName}&aqi=yes`)
    return await result.json()
}
btn.addEventListener('click',async()=>{
    const result = await getData(city.value)
    cityName.innerText = `${result.location.country},${result.location.region}-${result.location.name}`
    temp.innerText = `${result.current.temp_c}°C`
    time.innerText = `${result.location.localtime}`
})