module.exports=function(e){e.set({basePath:"",frameworks:["jasmine"],files:["bower_components/angular/angular.js","bower_components/angular-mocks/angular-mocks.js","ng-table.js","test/*.js"],preprocessors:{"*.js":"coverage"},reporters:["progress","coverage"],autoWatch:!0,browsers:["Chrome"],coverageReporter:{type:"lcov",dir:"out/coverage"}})};