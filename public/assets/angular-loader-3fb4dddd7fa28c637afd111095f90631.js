!function(){"use strict";function e(e){return function(){var r,n,t=arguments[0],o="["+(e?e+":":"")+t+"] ",i=arguments[1],u=arguments,a=function(e){return"function"==typeof e?e.toString().replace(/ \{[\s\S]*$/,""):"undefined"==typeof e?"undefined":"string"!=typeof e?JSON.stringify(e):e};for(r=o+i.replace(/\{\d+\}/g,function(e){var r,n=+e.slice(1,-1);return n+2<u.length?(r=u[n+2],"function"==typeof r?r.toString().replace(/ ?\{[\s\S]*$/,""):"undefined"==typeof r?"undefined":"string"!=typeof r?toJson(r):r):e}),r=r+"\nhttp://errors.angularjs.org/1.2.21/"+(e?e+"/":"")+t,n=2;n<arguments.length;n++)r=r+(2==n?"?":"&")+"p"+(n-2)+"="+encodeURIComponent(a(arguments[n]));return new Error(r)}}function r(r){function n(e,r,n){return e[r]||(e[r]=n())}var t=e("$injector"),o=e("ng"),i=n(r,"angular",Object);return i.$$minErr=i.$$minErr||e,n(i,"module",function(){var e={};return function(r,i,u){var a=function(e,r){if("hasOwnProperty"===e)throw o("badname","hasOwnProperty is not a valid {0} name",r)};return a(r,"module"),i&&e.hasOwnProperty(r)&&(e[r]=null),n(e,r,function(){function e(e,r,t){return function(){return n[t||"push"]([e,r,arguments]),s}}if(!i)throw t("nomod","Module '{0}' is not available! You either misspelled the module name or forgot to load it. If registering a module ensure that you specify the dependencies as the second argument.",r);var n=[],o=[],a=e("$injector","invoke"),s={_invokeQueue:n,_runBlocks:o,requires:i,name:r,provider:e("$provide","provider"),factory:e("$provide","factory"),service:e("$provide","service"),value:e("$provide","value"),constant:e("$provide","constant","unshift"),animation:e("$animateProvider","register"),filter:e("$filterProvider","register"),controller:e("$controllerProvider","register"),directive:e("$compileProvider","directive"),config:a,run:function(e){return o.push(e),this}};return u&&a(u),s})}})}r(window)}(window),angular.Module;