(function(){var t=function(t,i){return function(){return t.apply(i,arguments)}},i={}.hasOwnProperty,e=function(t,e){function o(){this.constructor=t}for(var r in e)i.call(e,r)&&(t[r]=e[r]);return o.prototype=e.prototype,t.prototype=new o,t.__super__=e.prototype,t};this.ngGmapModule("directives.api",function(){return this.IWindow=function(i){function o(i,e,o,r){var s;this.$timeout=i,this.$compile=e,this.$http=o,this.$templateCache=r,this.link=t(this.link,this),s=this,this.restrict="ECMA",this.template=void 0,this.transclude=!0,this.priority=-100,this.require=void 0,this.replace=!0,this.scope={coords:"=coords",show:"=show",templateUrl:"=templateurl",templateParameter:"=templateparameter",isIconVisibleOnClick:"=isiconvisibleonclick",closeClick:"&closeclick",options:"=options"},this.$log=directives.api.utils.Logger}return e(o,i),o.include(directives.api.utils.ChildEvents),o.prototype.link=function(){throw new Exception("Not Implemented!!")},o}(oo.BaseObject)})}).call(this);