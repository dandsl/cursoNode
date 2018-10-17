/** 
* Node JS novo sevidor usando Express
* @author: Daniel de Souza
*/
var app = require('./config/server');

//função get(param1,param2) home da pagina, função request e response
app.get('/',function(req,res){
	res.render("home/index");
});

app.get('/formulario_inclusao_noticia',function(req,res){
	res.render("admin/form_add_noticia");
})

app.get('/noticias',function(req,res){
	res.render("noticias/noticias");
})

//comando para subir o servidor usando o express
app.listen(3000,function(){
	console.log("Servidor On");
});

