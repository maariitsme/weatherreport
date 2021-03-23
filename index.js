//key : 3977b79152cb13318f3af71da941648e
//first : cd2a3f5a3bc4360fde2fe9caf5ed3869
// ex :2a1ad423e9fad1a3ceda81fda56b1366
//api.openweathermap.org/data/2.5/weather?q={city name}&appid=3977b79152cb13318f3af71da941648e
//api.openweathermap.org/data/2.5/weather?q=hyderabad&appid=3977b79152cb13318f3af71da941648e
const apikey="3977b79152cb13318f3af71da941648e";
document.getElementById("check").addEventListener('click',()=>{
solve();
});
async function solve(){

    
       let temperature=await getApi();
       console.log(temperature);
       charjs(temperature);
        
    
};

async function  getApi(){
    let city=document.getElementById("city").value;
    let url="https://api.openweathermap.org/data/2.5/weather?q="+city+"&appid="+apikey+"&units=metric";
    // console.log(city);
    let details;
     await  fetch(url).then((value)=>{
        return value.json();
    }).catch(()=>{
        console.log("cannot fetch details Check your Internet Connection");
    }).then((data)=>{
        console.log(data);
       let {name:cityname,sys:{country:countryCode},main:{temp:temp,temp_min:tempMin,temp_max:tempMax,pressure:pressure,humidity:humidity}}=data;
        console.log(`country code ${countryCode}  city name ${cityname} temp : ${temp}`);
       details=[tempMin,temp,tempMax];
    });
    return details;
}


function charjs(a){
    var ctx = document.getElementById('myChart').getContext('2d');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['Minimum temperature', 'Current temperature','Maximum temperature'],
        datasets: [{
            label: 'Temperature',
            data: a,
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)'
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)'
            ],
            borderWidth: 1
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }
});
}