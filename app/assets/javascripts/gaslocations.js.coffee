# Place all the behaviors and hooks related to the matching controller here.
# All this logic will automatically be available in application.js.
# You can use CoffeeScript in this file: http://coffeescript.org/
$ ->
  $(".jquery-ui-date").datepicker(
    dateFormat: 'yy-mm-dd'
  )
@events=[]
@RaffleCtrl = ($scope,$filter, $http,ngTableParams) ->	
	            
  $scope.status_options = [
    {
      display: "Daily Consumption"
      value: 0
    }
    {
      display: "Monthly Consumption"
      value: 1
    }
    {
      display: "Yearly Consumption"
      value: 2
    }
  ] 
  
  $scope.doSearch = ->
    $scope.tableParams.reload()
    console.log 'DoSearch button pressed'
    return
  
  $scope.map =
    center:
      latitude: 45
      longitude: -73

    zoom: 8
  $scope.chart =
    type: "ColumnChart"
    cssStyle: "height:200px; width:300px;"
    data:
      cols: [
        {
          id: "month"
          label: "Month"
          type: "string"
        }
        {
          id: "laptop-id"
          label: "Laptop"
          type: "number"
        }
        {
          id: "desktop-id"
          label: "Desktop"
          type: "number"
        }
        {
          id: "server-id"
          label: "Server"
          type: "number"
        }
        {
          id: "cost-id"
          label: "Shipping"
          type: "number"
        }
      ]
      rows: [
        {
          c: [
            {
              v: "January"
            }
            {
              v: 19
              f: "42 items"
            }
            {
              v: 12
              f: "Ony 12 items"
            }
            {
              v: 7
              f: "7 servers"
            }
            {
              v: 4
            }
          ]
        }
        {
          c: [
            {
              v: "February"
            }
            {
              v: 13
            }
            {
              v: 1
              f: "1 unit (Out of stock this month)"
            }
            {
              v: 12
            }
            {
              v: 2
            }
          ]
        }
        {
          c: [
            {
              v: "March"
            }
            {
              v: 24
            }
            {
              v: 0
            }
            {
              v: 11
            }
            {
              v: 6
            }
          ]
        }
      ]

    options:
      title: "Sales per month"
      isStacked: "true"
      fill: 20
      displayExactValues: true
      vAxis:
        title: "Sales unit"
        gridlines:
          count: 6

      hAxis:
        title: "Date"

    formatters: {}
      
  
  $scope.submitaverage = ->
    $http.post("http://localhost:3000/avresults.json",
      ltable: $scope.newEntry.consumption
      lchoice: $scope.lchoice
      lid: gon.locid
    ).success(((_this) ->
      (data) ->
        $scope.avresult = data
        $scope.tableParams.reload()
        return
    )(this)).error (data) ->
      console.log "Error on submissiion"
      return
  
     
     
 	  
              
  $scope.$watch 'newEntry.consumption', (value) ->
          $scope.submitaverage()
          $scope.tableParams.reload()
          
  $scope.$watch 'lchoice', (value) ->
          $scope.submitaverage()
          $scope.tableParams.reload()
          
  $scope.$watch 'newEntry.title', (value) ->
          $scope.submit()
          
  $scope.numero=@numerp
  $scope.chart_options = {
      data: [],
      xkey: 'capturedate',
      ykeys: ['capturevalue'],
      labels: ['Consumption in Nm3 :']
      xlabels: 'day'
	  };
    
  
  $scope.submit = ->
    $http.post("http://localhost:3000/ltables.json",
      ltable: $scope.newEntry.title
      ldtable: $scope.newEntry.titleza
      lid: gon.locid
    ).success(((_this) ->
      (data) ->
        $scope.chart_options.data = data
        $scope.tableParams.reload()
        return
    )(this)).error (data) ->
      console.log $scope.entries

    $http.post("http://localhost:3000/api/v1/monthcharts.json",
      monthchart: $scope.newEntry.title
    ).success(((_this) ->
      (data) ->
        $scope.bar_options.data = data
        $scope.tableParams.reload()
        return
    )(this)).error (data) ->
      console.log data
  
     
     
              
              
              
	
    							
  $scope.bar_options = {
     data: [
       { y: '2006', a: 100, b: 90 },
       { y: '2007', a: 75,  b: 65 },
       { y: '2008', a: 50,  b: 40 },
       { y: '2009', a: 75,  b: 65 },
       { y: '2010', a: 50,  b: 40 },
       { y: '2011', a: 75,  b: 65 },
       { y: '2012', a: 100, b: 90 }
     ],
     xkey: 'value1',
     ykeys: ['value2'],
     labels: ['Series A'],
	 barColors: ['#4F89DB', '#333A92', '#5D57BA', '#2F1360', '#620F8B', '#872FB0'],
   };
   
  $scope.tableParams = new ngTableParams({
        page: 1,
        count:25,
        sorting:
            capturedate: "asc"    
      }, {
        total:0,
        getData: ($defer, params) ->
          console.log "run deferred"
          $defer.resolve($scope.chart_options.data.slice((params.page() - 1) * params.count(), params.page() * params.count()))
      })
      
  $scope.xkey = 'range'
  $scope.ykeys = ['total_tasks',     'total_overdue']
  $scope.labels = ['Total Tasks', 'Out of Budget Tasks'] 
  $scope.myModel = [
      { range: 'January', total_tasks: 20, total_overdue: 5 },
      { range: 'January', total_tasks: 35, total_overdue: 8 },
      { range: 'January', total_tasks: 20, total_overdue: 1 },
      { range: 'January', total_tasks: 20, total_overdue: 6 }
    ]
 
	

app.controller("RaffleCtrl",RaffleCtrl)
console.log gon.locid


	
	
	
	
