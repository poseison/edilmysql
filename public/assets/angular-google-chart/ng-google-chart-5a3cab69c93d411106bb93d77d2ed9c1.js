!function(t,o){"use strict";angular.module("googlechart",[]).constant("googleChartApiConfig",{version:"1",optionalSettings:{packages:["corechart"]}}).provider("googleJsapiUrl",function(){var t="https:",o="//www.google.com/jsapi";this.setProtocol=function(o){t=o},this.setUrl=function(t){o=t},this.$get=function(){return(t?t:"")+o}}).factory("googleChartApiPromise",["$rootScope","$q","googleChartApiConfig","googleJsapiUrl",function(r,e,a,n){var i=e.defer(),c=function(){var t={callback:function(){var t=a.optionalSettings.callback;r.$apply(function(){i.resolve()}),angular.isFunction(t)&&t.call(this)}};t=angular.extend({},a.optionalSettings,t),o.google.load("visualization",a.version,t)},l=t.getElementsByTagName("head")[0],s=t.createElement("script");return s.setAttribute("type","text/javascript"),s.src=n,s.addEventListener?s.addEventListener("load",c,!1):s.onreadystatechange=function(){("loaded"===s.readyState||"complete"===s.readyState)&&(s.onreadystatechange=null,c())},l.appendChild(s),i.promise}]).directive("googleChart",["$timeout","$window","$rootScope","googleChartApiPromise",function(t,o,r,e){return{restrict:"A",scope:{chart:"=chart",onReady:"&",select:"&"},link:function(o,a){function n(t,r,e){if("undefined"!=typeof o.chart.formatters[t]){if(null==o.formatters[t])if(o.formatters[t]=new Array,"color"===t)for(var a=0;a<o.chart.formatters[t].length;a++){for(var n=new r,i=0;i<o.chart.formatters[t][a].formats.length;i++){var c=o.chart.formatters[t][a].formats[i];"undefined"!=typeof c.fromBgColor&&"undefined"!=typeof c.toBgColor?n.addGradientRange(c.from,c.to,c.color,c.fromBgColor,c.toBgColor):n.addRange(c.from,c.to,c.color,c.bgcolor)}o.formatters[t].push(n)}else for(var i=0;i<o.chart.formatters[t].length;i++)o.formatters[t].push(new r(o.chart.formatters[t][i]));for(var i=0;i<o.formatters[t].length;i++)o.chart.formatters[t][i].columnNum<e.getNumberOfColumns()&&o.formatters[t][i].format(e,o.chart.formatters[t][i].columnNum);("arrow"===t||"bar"===t||"color"===t)&&(o.chart.options.allowHtml=!0)}}function i(){i.triggered||void 0==o.chart||(i.triggered=!0,t(function(){i.triggered=!1,"undefined"==typeof o.formatters&&(o.formatters={});var r;r=o.chart.data instanceof google.visualization.DataTable?o.chart.data:Array.isArray(o.chart.data)?google.visualization.arrayToDataTable(o.chart.data):new google.visualization.DataTable(o.chart.data,.5),"undefined"!=typeof o.chart.formatters&&(n("number",google.visualization.NumberFormat,r),n("arrow",google.visualization.ArrowFormat,r),n("date",google.visualization.DateFormat,r),n("bar",google.visualization.BarFormat,r),n("color",google.visualization.ColorFormat,r));var e=o.chart.customFormatters;if("undefined"!=typeof e)for(name in e)n(name,e[name],r);var c={chartType:o.chart.type,dataTable:r,view:o.chart.view,options:o.chart.options,containerId:a[0]};o.chartWrapper=new google.visualization.ChartWrapper(c),google.visualization.events.addListener(o.chartWrapper,"ready",function(){o.chart.displayed=!0,o.$apply(function(t){t.onReady({chartWrapper:t.chartWrapper})})}),google.visualization.events.addListener(o.chartWrapper,"error",function(t){console.log("Chart not displayed due to error: "+t.message+". Full error object follows."),console.log(t)}),google.visualization.events.addListener(o.chartWrapper,"select",function(){var t=o.chartWrapper.getChart().getSelection()[0];t&&o.$apply(function(){o.select({selectedItem:t})})}),t(function(){a.empty(),o.chartWrapper.draw()})},0,!0))}function c(){e.then(function(){i()})}o.$watch("chart",function(){c()},!0),r.$on("resizeMsg",function(){t(function(){o.chartWrapper&&c()})})}}}]).run(["$rootScope","$window",function(t,o){angular.element(o).bind("resize",function(){t.$emit("resizeMsg")})}])}(document,window);