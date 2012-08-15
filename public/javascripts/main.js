requirejs.config({

    paths: {
        jquery: 'libs/jquery-ui/js/jquery-1.7.2.min',
		underscore : 'libs/underscore',
		backbone: 'libs/backbone'
    },
	
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        }
    }
});

require(['jquery', 'underscore','backbone'], function(jQuery, _, Backone) {

});