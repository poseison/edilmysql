angular.module("angular-google-maps-example",["google-maps"]).value("rndAddToLatLon",function(){return Math.floor(2*(Math.random()<.5?-1:1)+1)}).controller("controller",function(o,e,t,n){google.maps.visualRefresh=!0;var a="rawgithub.com"===window.location.host?"http://rawgithub.com/nlaplante/angular-google-maps/master/package.json":"/package.json";n.get(a).success(function(e){e||console.error("no version object found!!"),o.version=e.version}),angular.extend(o,{map:{control:{},center:{latitude:45,longitude:-73},options:{streetViewControl:!1,panControl:!1,maxZoom:20,minZoom:3},zoom:3,dragging:!1,bounds:{},markers:[{division:"US",type:"US",latitude:41.169444444444444,longitude:-75.87777777777778,driverCode:"GRIP",trailer:"  5555",status:"D",orderNumber:"9999999",destinationCityCode:"MT",destinationStateCode:"PA",contactCityCode:"PICK",contactStateCode:"ON",icon:void 0,id:"7"},{division:"US",type:"US",latitude:43.169444444444444,longitude:-75.87777777777778,driverCode:"GRIP",trailer:"  5555",status:"D",orderNumber:"9999999",destinationCityCode:"MT",destinationStateCode:"PA",contactCityCode:"PICK",contactStateCode:"ON",icon:void 0,id:"10"}],dynamicMarkers:[],refresh:function(){o.map.control.refresh(i)}}}),t.info("Markers: "+o.map.markers),e(function(){var e=[{id:1,latitude:46,longitude:-79},{id:2,latitude:33,longitude:-79},{id:3,icon:"assets/images/plane.png",latitude:35,longitude:-127}];_.each(e,function(e){e.closeClick=function(){e.showWindow=!1,o.$apply()},e.onClicked=function(){o.onMarkerClicked(e)}}),o.map.dynamicMarkers=e},2e3);var i={latitude:o.map.center.latitude,longitude:o.map.center.longitude}});