(function(){var t=function(t,r){return function(){return t.apply(r,arguments)}},r={}.hasOwnProperty,e=function(t,e){function n(){this.constructor=t}for(var i in e)r.call(e,i)&&(t[i]=e[i]);return n.prototype=e.prototype,t.prototype=new n,t.__super__=e.prototype,t};this.ngGmapModule("directives.api",function(){return this.Label=function(r){function n(r){this.link=t(this.link,this);var e;n.__super__.constructor.call(this,r),e=this,this.require="^marker",this.template='<span class="angular-google-maps-marker-label" ng-transclude></span>',this.$log.info(this)}return e(n,r),n.prototype.link=function(t,r,e,n){return this.$timeout(function(){return function(){var r,e;return e=n.getMarkerScope().gMarker,null!=e&&(r=new directives.api.models.child.MarkerLabelChildModel(e,t)),t.$on("$destroy",function(){return r.destroy()})}}(this),directives.api.utils.GmapUtil.defaultDelay+25)},n}(directives.api.ILabel)})}).call(this);