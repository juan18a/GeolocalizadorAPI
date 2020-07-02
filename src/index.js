const express = require('express');
const app = express();
const morgan = require('morgan');
const geoip = require('geoip-lite');


app.use(morgan('combined'))

app.set('trust proxy', true);

app.get('/', (req, res) => {


const ip = req.headers['x-forwarded-for'] ||
 req.connection.remoteAddress;

 const geo = geoip.lookup(ip);

 res.json(geo);



});



app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server port on 3000");
})