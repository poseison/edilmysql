(function(){angular.module("google-maps").factory("add-events",["$timeout",function(n){var t,u;return t=function(t,u,r){return google.maps.event.addListener(t,u,function(){return r.apply(this,arguments),n(function(){},!0)})},u=function(n,u,r){var e;return r?t(n,u,r):(e=[],angular.forEach(u,function(u,r){return e.push(t(n,r,u))}),function(){return angular.forEach(e,function(n){return _.isFunction(n)&&n(),null!==n.e&&_.isFunction(n.e)?n.e():void 0}),e=null})}}])}).call(this);