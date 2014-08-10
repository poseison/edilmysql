!function(t){function e(t,e,n){var o=t+e*n;return o>t+e&&(o=t+e),o}function n(t,e){return e/Math.ceil(e/t)}function o(t){if(null===t||"object"!=typeof t)return t;var e=t.constructor();for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n]);return e}t.EZ=t.EZ||{},t.EZ.Easing={Linear:function(t){return t}};var r=function(t){if("number"!=typeof t&&"[object Object]"!==Object.prototype.toString.call(t))throw"from value must be an object or an integer";this.from=t,this.to=t,this.duration=0,this.interval=10,this.tweenFn=EZ.Easing.Linear};r.prototype.setTo=function(t){if(typeof t!=typeof this.from)throw"to value must be the same type as from value";return this.to=t,this},r.prototype.setDuration=function(t){return this.duration=t,this},r.prototype.setInterval=function(t){return this.interval=t,this},r.prototype.setTweenFn=function(t){return this.tweenFn=t,this},r.prototype.start=function(r,i){var a=0,u=parseInt(this.duration,10),s=parseInt(this.interval,10);if("function"!=typeof this.tweenFn)throw"tweenFn must be a function";if(isNaN(s)||0>=s)throw"Interval must be a positive integer";if(isNaN(u)||0>=u)throw"Duration must be a positive integer";s>u&&(u=s),s=n(s,u);var f,l=this,c=t.setInterval(function(){if(a+=s,"number"==typeof l.from)f=e(l.from,l.to-l.from,l.tweenFn(a/u));else{f=o(l.from);for(var n in l.to)"number"==typeof l.from[n]&&"number"==typeof l.to[n]&&(f[n]=e(l.from[n],l.to[n]-l.from[n],l.tweenFn(a/u)))}"function"==typeof r&&r.call(this,f),a>=u&&("function"==typeof i&&i.call(this,f),t.clearInterval(c))},s);return this},t.EZ.Tween=r}(window),function(t,e){var n=e.module("app",["google-maps"]);n.controller("TrackingCtrl",["$rootScope","$scope","$timeout","$log",function(t,e){e.map={center:{latitude:53.406754,longitude:-2.158843},pan:!0,zoom:14,refresh:!1,options:{disableDefaultUI:!0},events:{},bounds:{},markers:[{id:1,location:{latitude:53.406754,longitude:-2.158843},options:{title:"Marker"},showWindow:!1,moveTo:function(t,n){var o=this;return"undefined"==typeof n&&(n=1),new EZ.Tween(o.location).setTo(t).setDuration(n).setInterval(13).start(function(t){e.$apply(function(){o.location=t})}),this}}]},e.map.markers[0].moveTo({latitude:53.416754,longitude:-2.148843},1e3)}])}(window,angular);