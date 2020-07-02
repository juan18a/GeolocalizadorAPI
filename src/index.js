const express = require('express');
const app = express();
var http = require('http');
var morgan = require('morgan')


app.use(morgan('combined'))


app.set('trust proxy', true);


app.get('/', (req, res) => {

/*
http.get({'host': 'api.ipify.org', 'port': 80, 'path': '/'}, function(resp) {
  resp.on('data', function(ip) {
    console.log("My public IP address is: " + ip);
  });
})

*/
console.dir(req.ips)

const ip = req.headers['x-forwarded-for'] || req.connection.remoteAddress ||  req.socket.remoteAddress || req.connection.socket.remoteAddress;
res.send('Your IP is ' + ip);



});



app.listen(process.env.PORT || 5000, ()=>{
    console.log("Server port on 3000");
})