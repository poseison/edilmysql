(function(){var e,s,c;s=require("util").log,e=require("./GruntJasmineSettings"),c=require("lodash"),module.exports=function(s){var c;return c={bump:{options:{files:["package.json","bower.json"],updateConfigs:[],commit:!0,commitMessage:"Release %VERSION%",commitFiles:["package.json","bower.json","Gruntfile.coffee","dist/*"],createTag:!0,tagName:"%VERSION%",tagMessage:"Version %VERSION%",push:!1,pushTo:"origin",gitDescribeOptions:"--tags --always --abbrev=1 --dirty=-d"}},pkg:s.file.readJSON("package.json"),pkgFn:function(){return s.file.readJSON("package.json")},clean:{coffee:["tmp/output_coffee.js","tmp"],dist:["dist/*","tmp"],example:["example/<%= pkg.name %>.js"],spec:["_Spec*"]},mkdir:{all:{options:{mode:448,create:["tmp"]}}},coffee:{compile:{files:{"tmp/output_coffee.js":["src/coffee/module.coffee","src/coffee/extensions/*.coffee","src/coffee/directives/api/utils/*.coffee","src/coffee/directives/api/managers/*.coffee","src/coffee/controllers/polyline-display.js","src/coffee/utils/LatLngArraySync.coffee","src/coffee/utils/MapEvents.coffee","src/coffee/directives/api/models/child/*.coffee","src/coffee/directives/api/models/parent/*.coffee","src/coffee/directives/api/*.coffee","src/coffee/directives/map.coffee","src/coffee/directives/marker.coffee","src/coffee/directives/markers.coffee","src/coffee/directives/label.coffee","src/coffee/directives/polygon.coffee","src/coffee/directives/circle.coffee","src/coffee/directives/polyline*.coffee","src/coffee/directives/rectangle.coffee","src/coffee/directives/window.coffee","src/coffee/directives/windows.coffee","src/coffee/directives/layer.coffee","src/coffee/directives/control.coffee","src/coffee/directives/*.coffee"],"tmp/spec/js/bootstrap.js":"spec/coffee/bootstrap.coffee","tmp/spec/js/helpers/helpers.js":"spec/coffee/helpers/*.coffee","tmp/spec/js/ng-gmap-module.spec.js":"spec/coffee/ng-gmap-module.spec.coffee","tmp/spec/js/usage/usage.spec.js":"spec/coffee/usage/*.spec.coffee","tmp/spec/js/directives/api/apis.spec.js":"spec/coffee/directives/api/*.spec.coffee","tmp/spec/js/directives/api/models/child/children.spec.js":"spec/coffee/directives/api/models/child/*.spec.coffee","tmp/spec/js/directives/api/models/parent/parents.spec.js":"spec/coffee/directives/api/models/parent/*.spec.coffee","tmp/spec/js/directives/api/utils/utils.spec.js":"spec/coffee/directives/api/utils/*.spec.coffee"}}},concat:{options:{banner:'/*! <%= pkg.name %> <%= pkgFn().version %> <%= grunt.template.today("yyyy-mm-dd") %>\n *  <%= pkg.description %>\n *  <%= pkg.repository.type %>: <%= pkg.repository.url %>\n */\n',separator:";"},dist:{src:["lib/*.js","tmp/output_coffee.js","tmp/wrapped.js","src/js/**/*.js","src/js/**/**/*.js","src/js/**/**/**/*.js"],dest:"tmp/output.js"}},copy:{dist:{files:[{src:"tmp/output.js",dest:"dist/<%= pkg.name %>.js"}]}},uglify:{options:{banner:'/*! <%= pkg.name %> <%= pkgFn().version %> <%= grunt.template.today("yyyy-mm-dd") %>\n *  <%= pkg.description %>\n *  <%= pkg.repository.type %>: <%= pkg.repository.url %>\n */\n',compress:!0,report:"gzip"},dist:{src:"tmp/output.js",dest:"dist/<%= pkg.name %>.min.js"}},jshint:{all:["Gruntfile.js","temp/spec/js/*.js","temp/spec/js/**/*.js","temp/spec/js/**/**/*.js","src/js/**/*.js","src/js/**/**/*.js","src/js/**/**/**/*.js"]},test:{},watch:{all:{options:{livereload:!0},files:["src/coffee/*.coffee","src/coffee/**/*.coffee","src/coffee/**/**/*.coffee","src/js/*.js","src/js/**/*.js","src/js/**/**/*.js","spec/**/*.spec.coffee","spec/coffee/helpers/**"],tasks:["clean:dist","jshint","mkdir","coffee","concat:dist","copy:dist","jasmine:spec","clean:example","coffee"]},spec:{options:{livereload:!0},files:["src/coffee/**/*.coffee","src/coffee/*.coffee","src/coffee/**/**/*.coffee","spec/**/*.spec.coffee","spec/coffee/helpers/**"],tasks:["clean:dist","jshint","mkdir","coffee","concat:dist","copy:dist","jasmine:spec","clean:example","coffee"]}},open:{version:{path:"http://localhost:3100/package.json"},jasmine:{path:"http://localhost:8069/_SpecRunner.html"}},connect:{server:{options:{hostname:"0.0.0.0",port:3100,base:""}},jasmineServer:{options:{hostname:"0.0.0.0",port:8069,base:""}}},changelog:{options:{dest:"CHANGELOG.md"}},jasmine:{spec:e.spec},wrap:{basic:{src:["bower_components/uuid/dist/uuid.core.js"],dest:"tmp/wrapped.js",options:{wrapper:['angular.module("google-maps.wrapped").service("uuid".ns(), function(){\n',"\nreturn UUID;\n});"]}}}},e.coverage&&(c.jasmine.coverage=e.coverage),c}}).call(this);