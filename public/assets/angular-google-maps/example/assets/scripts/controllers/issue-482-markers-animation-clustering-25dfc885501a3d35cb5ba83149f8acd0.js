angular.module("angular-google-maps-example",["google-maps"]).value("rndAddToLatLon",function(){return Math.floor(2*(Math.random()<.5?-1:1)+1)}).controller("controller",function(o,n,e,t){google.maps.visualRefresh=!0;var a="rawgithub.com"===window.location.host?"http://rawgithub.com/nlaplante/angular-google-maps/master/package.json":"/package.json";t.get(a).success(function(n){n||console.error("no version object found!!"),o.version=n.version}),angular.extend(o,{map:{control:{},center:{latitude:45,longitude:-73},options:{streetViewControl:!1,panControl:!1,maxZoom:20,minZoom:3},zoom:3,dragging:!1,bounds:{},dynamicMarkers:[],refresh:function(){o.map.control.refresh(i)}}}),o.refreshMap=function(){o.map.control.refresh({latitude:32.77968,longitude:-79.935493}),o.map.control.getGMap().setZoom(11)},o.getMapInstance=function(){alert("You have Map Instance of"+o.map.control.getGMap().toString())},o.onMarkerClicked=function(n){n.showWindow=!1,n.options=n.options?null:{animation:google.maps.Animation.BOUNCE},o.$apply()},o.onInsideWindowClick=function(){alert("Window hit!")},n(function(){var n=[{id:1,latitude:46,longitude:-79},{id:2,latitude:33,longitude:-79},{id:3,icon:"assets/images/plane.png",latitude:35,longitude:-127},{id:4,icon:"assets/images/plane.png",latitude:35,longitude:-128,title:"[35,-125]"}];_.each(n,function(n){n.closeClick=function(){n.showWindow=!1,o.$apply()},n.onClicked=function(){o.onMarkerClicked(n)}}),o.map.dynamicMarkers=n},2e3);var i={latitude:o.map.center.latitude,longitude:o.map.center.longitude}});