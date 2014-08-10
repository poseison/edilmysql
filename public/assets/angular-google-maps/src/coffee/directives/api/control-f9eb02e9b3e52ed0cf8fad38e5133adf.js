(function(){var o={}.hasOwnProperty,t=function(t,n){function r(){this.constructor=t}for(var e in n)o.call(n,e)&&(t[e]=n[e]);return r.prototype=n.prototype,t.prototype=new r,t.__super__=n.prototype,t};angular.module("google-maps.directives.api").factory("Control",["IControl","$http","$templateCache","$compile","$controller",function(o,n,r,e,i){var l;return l=function(l){function a(){var o;a.__super__.constructor.call(this),o=this}return t(a,l),a.prototype.link=function(t,l,a,p){var c,s;return angular.isUndefined(t.template)?void this.$log.error("mapControl: could not find a valid template property"):(c=angular.isDefined(t.index&&!isNaN(parseInt(t.index)))?parseInt(t.index):void 0,s=angular.isDefined(t.position)?t.position.toUpperCase().replace(/-/g,"_"):"TOP_CENTER",google.maps.ControlPosition[s]?o.mapPromise(t,p).then(function(o){return function(l){var a,p;return a=void 0,p=angular.element("<div></div>"),n.get(t.template,{cache:r}).success(function(o){var n,r;return r=t.$new(),p.append(o),c&&(p[0].index=c),angular.isDefined(t.controller)&&(n=i(t.controller,{$scope:r}),p.children().data("$ngControllerController",n)),a=e(p.contents())(r)}).error(function(){return o.$log.error("mapControl: template could not be found")}).then(function(){return l.controls[google.maps.ControlPosition[s]].push(a[0])})}}(this)):void this.$log.error("mapControl: invalid position property"))},a}(o)}])}).call(this);