(function(){angular.module("google-maps.directives.api.utils").service("IsReady".ns(),["$q","$timeout",function(n,e){var r,t,i;return r=0,i=[],t=function(){return n.all(i)},{spawn:function(){var e;return e=n.defer(),i.push(e.promise),r+=1,{instance:r,deferred:e}},promises:t,instances:function(){return r},promise:function(i){var u,s;return null==i&&(i=1),u=n.defer(),s=function(){return e(function(){return r!==i?s():u.resolve(t())})},s(),u.promise}}}])}).call(this);