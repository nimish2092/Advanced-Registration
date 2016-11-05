var http = require("http");
var mysql      = require('mysql');
var userData = [];


var connection = mysql.createConnection({
  host     : 'localhost',
  user     : 'root',
  password : 'root',
	database : 'assignment'
});
connection.connect(function(err) {
  if (err) {
    console.error('error connecting: ' + err.stack);
    return;
  }
  console.log('connected as id ' + connection.threadId);
});


var server = http.createServer(function(request,response){
	response.writeHead(200,{'Access-Control-Allow-Origin':'*'});
	request.on('data',function(data){
		userData = data.toString();
		var data = userData.split(",");
		connection.query('INSERT INTO `users` (`id`,`userid`,`password`,`email`,`sq1`,`sa1`,`sq2`,`sa2`,`mobile`,`address`,`comments`) VALUES (NULL, "' +  data[0] + '", "' + data[1] + '", "' + data[2] + '", "' + data[3] + '", "' + data[4] + '", "' + data[5] + '", "' + data[6] + '", "' + data[7] + '", "' + data[8] + '", "' + data[9] + '");', function (error, results, fields) {
		  if(error){
				console.log(error);
			}else{
				console.log(results);
				response.end("Successfully Registered");
			}
		});
	});
});
server.listen(8080);
//"<html><head></head><body><h1>Registration successful</h1><p>User was created successfully</p></body></html>"
