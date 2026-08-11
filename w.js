const apikey=e6d5ea86d6451ea656f4880e2708bece;
const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;
const input = document.getElementById('cityInput');
const searchBtn = document.getElementById('searchBtn');

async function wetherstate() {
    try{ 
        const wth1=await fetch('https://api.openweathermap.org/data/2.5/weather?q=Basra&appid=YOUR_API_KEY&units=metric');
        const wth2=await wth1.json()
        if (wth2.name==input){
            const temp=wth2.main.temp
            const flk=wth2.main.feels_like
            const prs=wth2.main.pressure
            const humi=wth2.main.humidity
            const state=wth2.weather.main
            const clud=wth2.cloud.all
        }catch(error){
            console.log(error)
        }
    }
}    
searchBtn.addEventListener('click',function(){
    let city=input 
    wetherstate();
});
wetherstate()
