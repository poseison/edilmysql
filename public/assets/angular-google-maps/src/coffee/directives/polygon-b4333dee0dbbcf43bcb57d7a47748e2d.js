(function(){angular.module("google-maps").directive("polygon",["$log","$timeout",function(e,t){var n,a,l,i,r;return r=function(e){var t;for(t=0;t<e.length;){if(angular.isUndefined(e[t].latitude)||angular.isUndefined(e[t].longitude))return!1;t++}return!0},a=function(e){var t,n;for(n=new google.maps.MVCArray,t=0;t<e.length;)n.push(new google.maps.LatLng(e[t].latitude,e[t].longitude)),t++;return n},l=function(e,t){var n,a;for(n=new google.maps.LatLngBounds,a=0;a<t.length;)n.extend(t.getAt(a)),a++;return e.fitBounds(n)},i=function(e){return angular.isDefined(e)&&null!==e&&e===!0||"1"===e||"y"===e||"true"===e},n={},{restrict:"ECA",require:"^googleMap",replace:!0,scope:{path:"=path",stroke:"=stroke",clickable:"=",draggable:"=",editable:"=",geodesic:"=",icons:"=icons",visible:"="},link:function(o,g,u,s){return angular.isUndefined(o.path)||null===o.path||o.path.length<2||!r(o.path)?void e.error("polyline: no valid path attribute found"):t(function(){var e,t,r,g,d,p,c,f;return e=s.getMap(),g=a(o.path),t=angular.extend({},n,{map:e,path:g,strokeColor:o.stroke&&o.stroke.color,strokeOpacity:o.stroke&&o.stroke.opacity,strokeWeight:o.stroke&&o.stroke.weight}),angular.forEach({clickable:!0,draggable:!1,editable:!1,geodesic:!1,visible:!0},function(e,n){return t[n]=angular.isUndefined(o[n])||null===o[n]?e:o[n]}),f=new google.maps.Polyline(t),i(u.fit)&&l(e,g),angular.isDefined(o.editable)&&o.$watch("editable",function(e){return f.setEditable(e)}),angular.isDefined(o.draggable)&&o.$watch("draggable",function(e){return f.setDraggable(e)}),angular.isDefined(o.visible)&&o.$watch("visible",function(e){return f.setVisible(e)}),p=void 0,r=void 0,d=void 0,c=f.getPath(),p=google.maps.event.addListener(c,"set_at",function(e){var t;return t=c.getAt(e),t&&t.lng&&t.lat?(o.path[e].latitude=t.lat(),o.path[e].longitude=t.lng(),o.$apply()):void 0}),r=google.maps.event.addListener(c,"insert_at",function(e){var t;return t=c.getAt(e),t&&t.lng&&t.lat?(o.path.splice(e,0,{latitude:t.lat(),longitude:t.lng()}),o.$apply()):void 0}),d=google.maps.event.addListener(c,"remove_at",function(e){return o.path.splice(e,1),o.$apply()}),o.$watch("path",function(t){var n,a,r,o,g,s,d;if(g=f.getPath(),t!==g){if(!t)return f.setMap(null);for(f.setMap(e),n=0,s=g.getLength(),r=t.length,a=Math.min(s,r);a>n;)d=g.getAt(n),o=t[n],(d.lat()!==o.latitude||d.lng()!==o.longitude)&&g.setAt(n,new google.maps.LatLng(o.latitude,o.longitude)),n++;for(;r>n;)o=t[n],g.push(new google.maps.LatLng(o.latitude,o.longitude)),n++;for(;s>n;)g.pop(),n++;if(i(u.fit))return l(e,g)}},!0),o.$on("$destroy",function(){return f.setMap(null),p(),p=null,r(),r=null,d(),d=null})})}}}])}).call(this);