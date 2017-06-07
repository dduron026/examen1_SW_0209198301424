var express = require('express');
var router = express.Router();

/* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

// 1) cree un ruta que maneje el método GET
//  con su número de cuenta y devuelva un objeto JSON
//  con su nombre completo, cuenta y su correo electrónico

// 2) cree una ruta que maneje el método POST
//  y reciba como parámetros (entero1, entero2)
//  y luego lo sume, cree un vista donde mostrará
//  los números enviados en los parámetros del cuerpo y el resultado final.




router.get('/0209198301424', function(req,res,next){
  var datosPersonales = [
                {"nombre":"Denis Joel Durón Guerra"},
                {"cuenta":"0209198301424"},
                {"correo":"denis.duron@bi-dss.com"},
              ];
  res.json(datosPersonales);

});


router.get('/suma', function(req, res, next){
  var numero1 = 3;
  var numero2 = 5;

  function suma(){
  var resultado = numero1 + numero2;
  }
 alert("resultado " + resultado);

})







module.exports = router;
