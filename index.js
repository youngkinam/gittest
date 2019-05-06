var express = require('express');
var bodyParser = require('body-parser');
var app = express();
app.use(bodyParser.urlencoded({ extended: true }));

// app.use(express.static(__dirname + '/public'));
// app.set('views', __dirname + '/views');
// app.engine('html', require('ejs').renderFile);
// app.set('view engine', 'html');

// app.use(bodyParser.urlencoded({
//   extended: true
// }));
// app.use(bodyParser.json());



// app.get('*', function(req, res){
//     res.render('index.html');
// });




//app.use(cookieParser());
//app.set('router', __dirname + '/router/main');
app.set('views', __dirname + '/views');
app.use(express.static(__dirname+ '/public'));
//app.get('/', (req, res) => res.send('Hello World!'))
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(bodyParser.json());

//app.set('view engine', 'html');
app.get('/', (req, res) =>{
    res.render('index.html');
  });

app.set('port', process.env.PORT || 3001);
var server=app.listen(app.get('port'), function(){
  console.log('Server is running on Port: ',server.address().port);
});

// //this is for openshift
// var server_port = process.env.OPENSHIFT_NODEJS_PORT || 8080
// var server_ip_address = process.env.OPENSHIFT_NODEJS_IP || '127.0.0.1'
//
// app.listen(server_port, server_ip_address, function () {
//   console.log( "Listening on " + server_ip_address + ", port " + server_port )
// });
