define(["jquery", "underscore", "backbone", "vistas/inicial"], function(jQuery, _, Backbone, vistaInicial){

  var ruteador = Backbone.Router.extend({

  routes: {
    "*path": "defaultAction",
  },

  defaultAction: function() {
      vistaInicial.render();
     },

  });
  
  iniciar = function(){
  var rutas = new ruteador();
  Backbone.history.start();
  };

  return {
    iniciar : iniciar
  };  
  
});