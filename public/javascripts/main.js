requirejs.config({

    paths: {
        jquery: 'libs/jquery-ui/js/jquery-1.7.2.min',
		underscore : 'libs/underscore',
		backbone: 'libs/backbone',
		fx: 'libs/fx'
    },
	
    shim: {
        'backbone': {
            deps: ['underscore', 'jquery'],
            exports: 'Backbone'
        },
		'fx' : {
			exports : '$fx()'
		}
    }
});

require(['jquery', 'underscore','backbone', 'fx'], function(jQuery, _, Backone) {

	/*$fx('#midiv');
	$fx('#midiv').fxAdd({type: 'fontSize', from: 12, to: 72, step: 1, delay: 20}).fxRun(null,-1); 

	setTimeout(function(){
	jQuery('#midiv').append('<br> Te hace mover');
	$fx('#midiv').fxAdd({type: 'fontSize', from: 12, to: 72, step: 1, delay: 20}).fxRun(null,-1);
	},2000);*/
	

/*	var moveBg0 = {type: 'backgroundx', to: -314, step: -1, delay: 20}
	var moveBg1 = {type: 'backgroundx', to: -269, step: -1, delay: 50}
	var stars = jQuery('midiv');

	$fx(stars[0]).fxAdd(moveBg0).fxRun(null, -1);
    $fx(stars[1]).fxAdd(moveBg1).fxRun(null, -1);*/

	
	
});