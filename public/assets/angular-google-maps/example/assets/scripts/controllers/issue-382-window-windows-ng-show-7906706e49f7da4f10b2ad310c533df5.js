angular.module("angular-google-maps-example",["google-maps"]).value("rndAddToLatLon",function(){return Math.floor(2*(Math.random()<.5?-1:1)+1)}).controller("controller",function(o,n,a,e){google.maps.visualRefresh=!0;var t="rawgithub.com"===window.location.host?"http://rawgithub.com/nlaplante/angular-google-maps/master/package.json":"/package.json";e.get(t).success(function(n){n||console.error("no version object found!!"),o.version=n.version}),o.map={center:{latitude:51.219053,longitude:4.404418},zoom:15},o.markersClick=function(){},o.map.markers=[{wonkyId:0,longitude:4.404418,latitude:51.219053}]}).controller("winCtrl",["$rootScope","$scope","$location","$http",function(o,n){n.showSpan=!0}]);