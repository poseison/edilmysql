(function(){var t=function(t,r){return function(){return t.apply(r,arguments)}},r={}.hasOwnProperty,n=function(t,n){function e(){this.constructor=t}for(var o in n)r.call(n,o)&&(t[o]=n[o]);return e.prototype=n.prototype,t.prototype=new e,t.__super__=n.prototype,t};this.ngGmapModule("directives.api",function(){return this.Marker=function(r){function e(r){this.link=t(this.link,this);var n;e.__super__.constructor.call(this,r),n=this,this.template='<span class="angular-google-map-marker" ng-transclude></span>',this.$log.info(this)}return n(e,r),e.prototype.controller=["$scope","$element",function(t){return{getMarkerScope:function(){return t}}}],e.prototype.link=function(t,r,n,e){return new directives.api.models.parent.MarkerParentModel(t,r,n,e,this.$timeout)},e}(directives.api.IMarker)})}).call(this);