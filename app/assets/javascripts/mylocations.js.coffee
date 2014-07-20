# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
lmarkers=gon.mymarkers
@ShowCtrl = ($scope, $http,ngTableParams) ->
  $scope.map =
    center:
      latitude: 45
      longitude: -73

    zoom: 8
    markers:lmarkers
    
  $scope.nmarkers=gon.mymarkers
  $scope.provinces = [
    "Attiki"
    "BIOTIA"
  ]
  $scope.tableParams = new ngTableParams({
        page: 1,
        count: 10,
        sorting: { name: 'asc'}
      }, {
        total: $scope.map.markers,
        getData: ($defer, params) ->
          console.log "run deferred"
          $defer.resolve($scope.map.markers.slice((params.page() - 1) * params.count(), params.page() * params.count()))
      })
  $scope.update = ->
    $scope.map.center.latitude=38.73
    $scope.map.center.longitude=23.80
    



app.controller("ShowCtrl",ShowCtrl)
console.log 'from the the ShowCtrl'