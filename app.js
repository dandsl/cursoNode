/** 
* Node JS novo sevidor usando Express
* @author: Daniel de Souza
*/
var app = require('./config/server');

//var rotaNoticias = require('./app/routes/noticias');
//rotaNoticias(app);

//var rotaHome = require('./app/routes/home');
//rotaHome(app);

//var rotaFormulario = require('./app/routes/formulario_inclusao_noticia');
//rotaFormulario(app);

//Outra maneira executando o require da função ja executando a função
var rotaNoticias = require('./app/routes/noticias')(app);

var rotaHome = require('./app/routes/home')(app);

var rotaFormulario = require('./app/routes/formulario_inclusao_noticia')(app);


//comando para subir o servidor usando o express
app.listen(3000,function(){
	console.log("Servidor On");
});

