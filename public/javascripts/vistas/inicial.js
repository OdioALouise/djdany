define(["jquery", "underscore", "backbone", "text!templates/inicial.html", "text!templates/header.html", "paper"], function(jQuery, _, Backbone, tmpInicial, tmpHeader){
  
  var vista = Backbone.View.extend({
    
    el : "#seccionPrincipal",

    events: {

    },
    
    render : function(){

// canvasPrincipal     
      var compiled = _.template(tmpInicial);
      jQuery(this.el).append(tmpInicial);
      
      var compiled = _.template(tmpHeader);
      jQuery("header").append(tmpHeader);      
      
    paper.install(window);
    paper.setup('canvasPrincipal');

    
		var segments = [
			[new Point(63.39306640625, 265.7138671875), null, new Point(10.86669921875, 6.96630859375)],
			[new Point(106.58203125, 277.97412109375), new Point(-16.71826171875, 0), new Point(24.79931640625, 0)],
			[new Point(145.87060546875, 245.9306640625), new Point(0, 18.947265625), new Point(0, -17.27587890625)],
			[new Point(110.4833984375, 208.87158203125), new Point(25.35595703125, 9.4736328125), new Point(-30.65087890625, -11.14599609375)],
			[new Point(60.88525390625, 155.37255859375), new Point(0, 26.19189453125), new Point(0, -29.25732421875)],
			[new Point(121.62890625, 104.380859375), new Point(-36.501953125, 0), new Point(18.947265625, 0)],
			[new Point(162.86767578125, 113.576171875), new Point(-8.08056640625, -4.73681640625)],
			[new Point(156.18017578125, 133.35986328125), null, new Point(-5.8515625, -3.62255859375)],
			[new Point(120.79296875, 124.443359375), new Point(16.9970703125, 0), new Point(-25.63525390625, 0)],
			[new Point(85.4052734375, 152.5859375), new Point(0, -12.8173828125), new Point(0, 17.55419921875)],
			[new Point(122.7431640625, 188.80908203125), new Point(-25.91357421875, -10.03076171875), new Point(31.76513671875, 12.26025390625)],
			[new Point(170.39111328125, 243.97998046875), new Point(0, -27.58544921875), new Point(0, 28.97900390625)],
			[new Point(104.91015625, 298.31494140625), new Point(44.30419921875, 0), new Point(-18.111328125, 0)],
			[new Point(56.984375, 286.0546875), new Point(10.03076171875, 6.6875)]
		];

		var lineGroup = new Group();
		var lineCount = 100;
		for (var i = 0; i < lineCount; i++) {
			var linePath = new Path.Line([0, 0], [0, 0]);
			linePath.strokeColor = 'red';
			lineGroup.addChild(linePath);
		}

		var path1 = new Path();
		path1.segments = segments;
		path1.closed = true;
		path1.position = view.center;
		path1.scale(1.5);

		var path2 = new Path();
		path2.segments = segments;
		path2.closed = true;
		path2.position = view.center;
		path2.scale(2);

		var length1 = path1.length;
		var length2 = path2.length;
		
		view.onFrame = function(event) {
			var vector = new Point({
				angle: -event.count % 360,
				length: 100
			});
			path1.rotate(-0.5);
			path1.position = view.center - vector;

			path2.rotate(-0.5);
			path2.position = view.center + vector.normalize(50);

			for (var i = 0; i < lineCount; i++) {
				var path = lineGroup.children[i];
				var l1 = (length1 / lineCount * (i + event.count / 10)) % length1;
				var l2 = (length2 / lineCount * (i + event.count / 10)) % length2;
				path.segments[0].point = path1.getPointAt(l1),
				path.segments[1].point = path2.getPointAt(l2);
			}
		  
		}
    

	
      
      
      
    }
    
  });
  
  return new vista();   
  
  });