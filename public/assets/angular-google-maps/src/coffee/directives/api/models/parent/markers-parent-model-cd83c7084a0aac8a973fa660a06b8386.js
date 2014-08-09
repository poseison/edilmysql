(function(){var r=function(r,e){return function(){return r.apply(e,arguments)}},e={}.hasOwnProperty,t=function(r,t){function i(){this.constructor=r}for(var a in t)e.call(t,a)&&(r[a]=t[a]);return i.prototype=t.prototype,r.prototype=new i,r.__super__=t.prototype,r};this.ngGmapModule("directives.api.models.parent",function(){return this.MarkersParentModel=function(e){function i(e,t,a,s,n,o){this.fit=r(this.fit,this),this.onDestroy=r(this.onDestroy,this),this.onWatch=r(this.onWatch,this),this.reBuildMarkers=r(this.reBuildMarkers,this),this.createMarkers=r(this.createMarkers,this),this.validateScope=r(this.validateScope,this),this.onTimeOut=r(this.onTimeOut,this);var l;i.__super__.constructor.call(this,e,t,a,s,n,o),l=this,this.markersIndex=0,this.gMarkerManager=void 0,this.scope=e,this.scope.markerModels=[],this.bigGulp=directives.api.utils.AsyncProcessor,this.$timeout=n,this.$injector=o,this.$log.info(this)}return t(i,e),i.include(directives.api.utils.ModelsWatcher),i.prototype.onTimeOut=function(r){return this.watch("models",r),this.watch("doCluster",r),this.watch("clusterOptions",r),this.watch("fit",r),this.createMarkers(r)},i.prototype.validateScope=function(r){var e;return e=angular.isUndefined(r.models)||void 0===r.models,e&&this.$log.error(this.constructor.name+": no valid models attribute found"),i.__super__.validateScope.call(this,r)||e},i.prototype.createMarkers=function(r){var e;return null!=r.doCluster&&r.doCluster===!0?null!=r.clusterOptions?void 0===this.gMarkerManager?this.gMarkerManager=new directives.api.managers.ClustererMarkerManager(this.mapCtrl.getMap(),void 0,r.clusterOptions):this.gMarkerManager.opt_options!==r.clusterOptions&&(this.gMarkerManager=new directives.api.managers.ClustererMarkerManager(this.mapCtrl.getMap(),void 0,r.clusterOptions)):this.gMarkerManager=new directives.api.managers.ClustererMarkerManager(this.mapCtrl.getMap()):this.gMarkerManager=new directives.api.managers.MarkerManager(this.mapCtrl.getMap()),e=[],r.isMarkerModelsReady=!1,this.bigGulp.handleLargeArray(r.models,function(t){return function(i){var a;return r.doRebuild=!0,a=new directives.api.models.child.MarkerChildModel(t.markersIndex,i,r,t.mapCtrl,t.$timeout,t.DEFAULTS,t.doClick,t.gMarkerManager,t.$injector),t.$log.info("child",a,"markers",e),e.push(a),t.markersIndex++}}(this),function(){},function(t){return function(){return t.gMarkerManager.draw(),r.markerModels=e,angular.isDefined(t.attrs.fit)&&null!=r.fit&&r.fit&&t.fit(),r.isMarkerModelsReady=!0,null!=r.onMarkerModelsReady?r.onMarkerModelsReady(r):void 0}}(this))},i.prototype.reBuildMarkers=function(r){return r.doRebuild||void 0===r.doRebuild?(_.each(r.markerModels,function(){return function(r){return r.destroy()}}(this)),this.markersIndex=0,null!=this.gMarkerManager&&this.gMarkerManager.clear(),this.createMarkers(r)):void 0},i.prototype.onWatch=function(r,e,t,i){return"models"!==r||this.didModelsChange(t,i)?"options"===r&&null!=t?void(this.DEFAULTS=t):this.reBuildMarkers(e):void 0},i.prototype.onDestroy=function(r){var e,t,i,a;for(a=r.markerModels,t=0,i=a.length;i>t;t++)e=a[t],e.destroy();return null!=this.gMarkerManager?this.gMarkerManager.clear():void 0},i.prototype.fit=function(){var r,e;return this.mapCtrl&&null!=this.scope.markerModels&&this.scope.markerModels.length>0&&(r=new google.maps.LatLngBounds,e=!1,_.each(this.scope.markerModels,function(){return function(t){return null!=t.gMarker?(e||(e=!0),r.extend(t.gMarker.getPosition())):void 0}}(this)),e)?this.mapCtrl.getMap().fitBounds(r):void 0},i}(directives.api.models.parent.IMarkerParentModel)})}).call(this);