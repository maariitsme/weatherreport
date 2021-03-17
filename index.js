//key : 3977b79152cb13318f3af71da941648e
//first : cd2a3f5a3bc4360fde2fe9caf5ed3869
// ex :2a1ad423e9fad1a3ceda81fda56b1366
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=3977b79152cb13318f3af71da941648e
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=e58df82a2e41b81975178a27f21319bc
const apikey="3977b79152cb13318f3af71da941648e";
document.getElementById("check").addEventListener('click',()=>{
        let city=document.getElementById("city").value;
        let url="http://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey;
        console.log(city);
        console.log()
        let {name:cityname}=fetch(url).then((value)=>{
            // console.log(value.json());
            return value.json();
        }).then((data)=>console.log(data));
        console.log(cityname);
    
});