var fs = require('fs');


module.exports = function(app) {


app.get('/',function(req,res){
	res.end("Node-File-Upload");

});
app.post('/uploads/', function(req, res) {
	console.log(req.files.Key.originalFilename);
	console.log(req.files.Key.path);
		fs.readFile(req.files.Key.path, function (err, data){
		var dirname = "/home/vemishra/Downloads/Project/images";
		var newPath = dirname + "/uploads/" + 	req.files.Key.originalFilename;
		fs.writeFile(newPath, data, function (err) {
		if(err){
		res.json({'response':"Error"});
		}else {
		res.json({'response':"http://10.77.133.54:8080/uploads/"+req.files.Key.originalFilename});
}
});
});
});


app.get('/uploads/:file', function (req, res){
		file = req.params.file;
		var dirname = "/home/vemishra/Downloads/Project/images";
		var img = fs.readFileSync(dirname + "/uploads/" + file);
		res.writeHead(200, {'Content-Type': 'image/jpg' });
		res.end(img, 'binary');

});
};
