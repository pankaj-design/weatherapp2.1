

var button = document.querySelector("#but");
button.addEventListener('click',()=>{
    var input = document.getElementById('userinput');
    search = input.value;
    input.value="";


    return myFunction();
    
})

 var api = "https://api.openweathermap.org/data/2.5/weather?q="; 
 var apikey = "&appid=1325e3a176af0a7cfae0d10628fec2a8";
 var units = "&units=metric";


 function myFunction(){
   var apipath = api + search + apikey +units ;

fetch(apipath)
    .then((response) => {
        return response.json();
    })
    
    .then((data) => {

        var cityName = data.name;
        console.log(cityName);
        document.getElementById('A1').innerHTML = cityName;

        var view = data.weather[0].description;
         document.getElementById('A2').innerHTML = view;
        console.log(view);
        

        var avgTemp = data.main.temp;
        console.log(avgTemp);
        document.getElementById('A3').innerHTML = avgTemp;

        var humi = data.main.humidity;
        console.log(humi);
        document.getElementById('A4').innerHTML = humi;
    })
    
}
