$(document).ready(function(){
  
    //VANCOUVER COORDS 49.2577143, -123.1939438
      function getPosition(position){
          var lat = position.coords.latitude;
          var long = position.coords.longitude;
         console.log(lat, long) 
        $.getJSON("https://fcc-weather-api.glitch.me/api/current?lat=" + lat + "&lon=" + long, function(weather){
              console.log(weather)
              $(".temperature").html(Math.round(weather.main.temp) + " ºC")
              $(".temperature").data('value', Math.round(weather.main.temp));
              $(".location").html(weather.name)
              $(".humidity").html(weather.main.humidity + "%")
              $(".windspeed").html(weather.wind.speed)
             
            switch(weather.weather[0].description){
                case "light rain":
                  $(".weather-img").attr('src', 'https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-5.svg')
                  break;
                  case "clear sky":
                  $(".weather-img").attr('src', 'https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/day.svg')
                  break;
                  case "few clouds":
                  $(".weather-img").attr('src', 'https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-day-3.svg')
                  break;
                  case "scattered clouds":
                  $(".weather-img").attr('src', 'https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy.svg')
                  break;
                  case "broken clouds":
                  $(".weather-img").attr('src', 'https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-night-1.svg')
                  break;
                  case "shower rain":
                  $(".weather-img").attr('src', '(https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-2.svg')
                  break;
                  case "rain":
                  $(".weather-img").attr('src', 'https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/rainy-7.svg')
                  break;
                  case "thunderstorm":
                  $(".weather-img").attr('src', 'https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/thunder.svg')
                  break;
                  case "snow":
                  $(".weather-img").attr('src', 'https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/snowy-6.svg')
                  break;
                  case "mist":
                  $(".weather-img").attr('src', 'https://www.amcharts.com/wp-content/themes/amcharts2/css/img/icons/weather/animated/cloudy-day-1.svg')
                  break;
              }
          });            
      }
      navigator.geolocation.getCurrentPosition(getPosition);
  });
  
  $(".temperature").click(function(){
      var type = $(this).data('type'),
          value = $(this).data('value');
      
      if(type === 'f'){
          $(".temperature").html(value + " ºC");
          $(this).data('type', 'c');
      } else {
          
          $(".temperature").html(Math.round((value * 9/5) + 32) + " ºF");
          $(this).data('type', 'f');
      }
  });
  
  
   
  