const express = require('express')
const exphbs =require('express-handlebars') //require handlebars
const axios =require('axios') //require axios
const app = express()



app.set('view engine', 'handlebars');
app.engine('handlebars', exphbs({ defaultLayout: 'main' }));
 
// app.get('/', function (req, res) {
//   res.render('index')
// })

app.use(express.urlencoded({extended:true}))


app.post('/weather',(req,res)=>{
 const cityName = req.body.city_name;
//  res.render('index',{cityName})
const APIKEY = require('./sources/keys.json').API_KEY;
axios.get(`http://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=imperial&appid=${APIKEY}`)
.then(function (response) {
   return response.data
})
.then(function(data){
  // const name = data.name
  // const temp = Math.round(data.main.temp)
  // const icon = data.weather[0].icon
  const weather_hyf={
    name:data.name,
    temp:`${Math.round(data.main.temp)}°F!`,
    icon:data.weather[0].icon
  }
  res.render('index', weather_hyf);
  console.log(data)
})
.catch(function (error) {
  res.render('index',{ weatherText: ` ${cityName}City is not found!` })
});

})

 
app.listen(3000)