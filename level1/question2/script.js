//Console.log out elements in JSON file
var data = "{\"video\": [{\"id\": 12312412312, \"name\": \"Ecuaciones Diferenciales\", \"url\": \"/video/math/edo/12312412312\", \"author\": { \"data\": [{ \"name_author\": \"Alejandro Morales\", \"url\": \"/author/alejandro-morales\", \"type\": \"master\" }]}}]}";

var json = JSON.parse(data);

for (var i = 0; i < json.video.length; i++) {
	console.log(json.video[i].id);
	console.log(json.video[i].name);
	console.log(json.video[i].url);
	console.log(json.video[i].author);

	for (var j = 0; j < json.video[i].author.data.length; j++) {
		console.log(json.video[i].author.data[j].name_author);
		console.log(json.video[i].author.data[j].url);
		console.log(json.video[i].author.data[j].type);
	}
}
