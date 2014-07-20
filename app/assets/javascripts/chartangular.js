angular.module('ChartAngular', []).
  directive('barchart', function(){
  
  
  return {
    restrict: 'E',
    scope: {
      options: '='
    },
    replace: true,
    template: '<div></div>',
    link: function link(scope, element, attrs) {
  		scope.$watch('options.data', function(newValue, oldValue) {
  		                if (newValue){
						    function createChart(el_id, options) {
						      options.element = el_id;
						      var r = new Morris.Bar(options);
						      return r;
						    }
							element.html(' ');
  		                    console.log("Line: I see a data change!");
							console.log(scope.options.data);
							return createChart(attrs.id, scope.options);}
  		            }, true);
    }
  };
}).
  directive('linechart', function() {

    
    return {
      restrict: 'E',
      scope:  {
        options: '='
      },
      replace: true,
      template: '<div></div>',
      link: function link(scope, element, attrs) {
  		scope.$watch('options.data', function(newValue, oldValue) {
  		                if (newValue){
						    function createChart(el_id, options) {
						      options.element = el_id;
						      var r = new Morris.Line(options);
						      return r;
						    }
							element.html(' ');
  		                    console.log("Line: I see a data change!");
							console.log(scope.options.data);
							return createChart(attrs.id, scope.options);}
  		            }, true);
					
        
      }
    }

  }).
  directive('donutchart', function() {

    function createChart(el_id, options) {
      options.element = el_id;
      var r = new Morris.Donut(options);
      return r;
    }

    return {
      restrict: 'E',
      scope:  {
        options: '='
      },
      replace: true,
      template: '<div></div>',
      link: function(scope, element, attrs) {
        return createChart(attrs.id, scope.options)
      }
    }

  });