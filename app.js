/** 
* Node JS novo sevidor usando Express
* @author: Daniel de Souza
*/

var express = require('express');
var msg = require('./mod_teste');

var app = express();


//informar para o express que o engine de views será o ejs
app.set('view engine', 'ejs');

//função get(param1,param2) home da pagina, função request e response
app.get('/',function(req,res){
	//res.send("<html><body>Portal de Noticias</body></html>");
	//novo metodo de chamar usando o ejs
	res.render("home/index.ejs");
});

app.get('/formulario_inclusao_noticia',function(req,res){
	res.render("admin/form_add_noticia");
})

app.get('/noticias',function(req,res){
	res.render("noticias/noticias");
})

//comando para subir o servidor usando o express
app.listen(3000,function(){
	console.log(msg());
});

