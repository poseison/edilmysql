(function(){var t=function(t,o){return function(){return t.apply(o,arguments)}},o={}.hasOwnProperty,n=function(t,n){function i(){this.constructor=t}for(var e in n)o.call(n,e)&&(t[e]=n[e]);return i.prototype=n.prototype,t.prototype=new i,t.__super__=n.prototype,t};this.ngGmapModule("directives.api.models.parent",function(){return this.IMarkerParentModel=function(o){function i(o,n,i,e,r){var s;this.scope=o,this.element=n,this.attrs=i,this.mapCtrl=e,this.$timeout=r,this.linkInit=t(this.linkInit,this),this.onDestroy=t(this.onDestroy,this),this.onWatch=t(this.onWatch,this),this.watch=t(this.watch,this),this.validateScope=t(this.validateScope,this),this.onTimeOut=t(this.onTimeOut,this),s=this,this.$log=directives.api.utils.Logger,this.validateScope(o)&&(this.doClick=angular.isDefined(i.click),null!=o.options&&(this.DEFAULTS=o.options),this.$timeout(function(t){return function(){return t.watch("coords",o),t.watch("icon",o),t.watch("options",o),t.onTimeOut(o),o.$on("$destroy",function(){return t.onDestroy(o)})}}(this)))}return n(i,o),i.prototype.DEFAULTS={},i.prototype.isFalse=function(t){return-1!==["false","FALSE",0,"n","N","no","NO"].indexOf(t)},i.prototype.onTimeOut=function(){},i.prototype.validateScope=function(t){var o;return null==t?!1:(o=null!=t.coords,o||this.$log.error(this.constructor.name+": no valid coords attribute found"),o)},i.prototype.watch=function(t,o){return o.$watch(t,function(n){return function(i,e){return i!==e?n.onWatch(t,o,i,e):void 0}}(this),!0)},i.prototype.onWatch=function(){throw new Exception("Not Implemented!!")},i.prototype.onDestroy=function(){throw new Exception("Not Implemented!!")},i.prototype.linkInit=function(){throw new Exception("Not Implemented!!")},i}(oo.BaseObject)})}).call(this);