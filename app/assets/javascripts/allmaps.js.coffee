jQuery ->
        $('#products').dataTable
          sPaginationType: "full_numbers"
          bJQueryUI: true
          aButtons: [ "xls" ] 
jQuery ->
  $('#article_published_on').datepicker
    dateFormat: 'yy-mm-dd'

app = angular.module("Raffler", [
  "ng"
  "ngResource"
  "ui.bootstrap"
  "ngRoute"
  "ngTable"
  "ngTableExport"
  "ChartAngular"
  "google-maps"
  "googlechart"
])

DemoTestCtrl = undefined
app = undefined
__extends_ = undefined
__hasProp_ = undefined
__slice_ = undefined
DemoTestCtrl = undefined
app = undefined
__slice_ = [].slice
__hasProp_ = {}.hasOwnProperty
__extends_ = (child, parent) ->
  ctor = undefined
  key = undefined
  ctor = ->
    @constructor = child
    return

  for key of parent
    child[key] = parent[key]  if __hasProp_.call(parent, key)
  ctor:: = parent::
  child:: = new ctor()
  child.__super__ = parent::
  child

@DemoCtrl = ($scope, $http, ngTableParams) ->
  $scope.dailydata = []
  $scope.bardata = []
  $scope.checkOut = "2014-01-06"
  $scope.dailytitleza = ->
    @titlos = "Daily"

  $scope.setlit = ->
    @literate = "ok"
    $scope.$watch "dailydata", (value) ->
      $scope.bardata()


  $scope.map =
    center:
      latitude: 45
      longitude: -73

    zoom: 8

  $scope.chartObject = {
    "type": "Table",
    "displayed": true,
    "data": {
      "cols": [
        {
          "id": "month",
          "label": "Month",
          "type": "string",
          "p": {}
        },
        {
          "id": "laptop-id",
          "label": "Laptop",
          "type": "number",
          "p": {}
        },
        {
          "id": "desktop-id",
          "label": "Desktop",
          "type": "number",
          "p": {}
        },
        {
          "id": "server-id",
          "label": "Server",
          "type": "number",
          "p": {}
        },
        {
          "id": "cost-id",
          "label": "Shipping",
          "type": "number"
        },
        {
          "id": "data-id",
          "label": "Date",
          "type": "date"
        }
      ],
      "rows": [
        {
          "c": [
            {
              "v": "January",
              "p": {}
            },
            {
              "v": 19,
              "f": "<span style=\"padding: 0; float: left; white-space: nowrap;\"><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_b.png\" height=\"12\" width=\"80\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_w.png\" height=\"12\" width=\"20\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /> 42 items</span> ",
              "p": {
                "className": "google-visualization-formatters-arrow-empty",
                "_bar_format_old_value": "42 items"
              }
            },
            {
              "v": 12,
              "f": "Ony 12 items",
              "p": {}
            },
            {
              "v": 7,
              "f": "7 servers"
            },
            {
              "v": 4,
              "p": {
                "style": "color:white;background-color:#800080;"
              },
              "f": "$4.00"
            },
            {
              "v": "2013-02-04T22:00:00.000Z"
            }
          ]
        },
        {
          "c": [
            {
              "v": "February",
              "p": {}
            },
            {
              "v": 13,
              "p": {
                "className": "google-visualization-formatters-arrow-dr",
                "_bar_format_old_value": "13"
              },
              "f": "<span style=\"padding: 0; float: left; white-space: nowrap;\"><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_b.png\" height=\"12\" width=\"55\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_w.png\" height=\"12\" width=\"45\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /> 13</span> "
            },
            {
              "v": 1,
              "f": "1 unit (Out of stock this month)",
              "p": {}
            },
            {
              "v": 12
            },
            {
              "v": 2,
              "p": {
                "style": "color:white;background-color:red;"
              },
              "f": "$2.00"
            },
            {
              "v": "2013-03-04T22:00:00.000Z"
            }
          ]
        },
        {
          "c": [
            {
              "v": "March",
              "p": {}
            },
            {
              "v": 24,
              "p": {
                "className": "google-visualization-formatters-arrow-ug",
                "_bar_format_old_value": "24"
              },
              "f": "<span style=\"padding: 0; float: left; white-space: nowrap;\"><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_b.png\" height=\"12\" width=\"100\" /><img style=\"padding: 0\" src=\"https://ajax.googleapis.com/ajax/static/modules/gviz/1.0/util/bar_s.png\" height=\"12\" width=\"1\" /> 24</span> "
            },
            {
              "v": 5,
              "p": {}
            },
            {
              "v": 11
            },
            {
              "v": 6,
              "p": {
                "style": "color:black;background-color:#33ff33;"
              },
              "f": "$6.00"
            },
            {
              "v": "2013-04-04T21:00:00.000Z"
            }
          ]
        }
      ]
    },
    "options": {
      "title": "Sales per month",
      "isStacked": "true",
      "fill": 20,
      "displayExactValues": true,
      "vAxis": {
        "title": "Sales unit",
        "gridlines": {
          "count": 2
        }
      },
      "hAxis": {
        "title": "Date"
      },
      "allowHtml": true,
      "tooltip": {
        "isHtml": false
      }
    },
    "formatters": {
      "arrow": [
        {
          "columnNum": 1,
          "base": 19
        }
      ],
      "color": [
        {
          "columnNum": 4,
          "formats": [
            {
              "from": 0,
              "to": 3,
              "color": "white",
              "bgcolor": "red"
            },
            {
              "from": 3,
              "to": 5,
              "color": "white",
              "fromBgColor": "red",
              "toBgColor": "blue"
            },
            {
              "from": 6,
              "to": null,
              "color": "black",
              "bgcolor": "#33ff33"
            }
          ]
        }
      ],
      "number": [
        {
          "columnNum": 4,
          "prefix": "$"
        }
      ],
      "bar": [
        {
          "columnNum": 1,
          "width": 100
        }
      ]
    },
    "view": {
      "columns": [
        0,
        1,
        2,
        4
      ]
    }
  }
   
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

  $scope.bardata = ->
    bar1 = undefined
    element = undefined
    _i = undefined
    _len = undefined
    _ref = undefined
    bar1 = undefined
    element = undefined
    _i = undefined
    _len = undefined
    _ref = undefined
    bar1 = []
    _ref = $scope.dailydata
    _i = 0
    _len = _ref.length
    while _i < _len
      element = _ref[_i]
      bar1.push
        streetname: element.streetname.slice(0, 10)
        elvalue: element.value1

      console.log "Inside the loop"
      console.log element.streetname
      _i++
    console.log bar1
    $scope.mybar_options =
      data: bar1
      xkey: "streetname"
      ykeys: ["elvalue"]
      labels: ["gfgfg"]
      resize: true
      hidehover: true
      xLabelMargin: 15
      barColors: [
        "#4F89DB"
        "#333A92"
        "#5D57BA"
        "#2F1360"
        "#620F8B"
        "#872FB0"
      ]
      barRatio: 0.4
      xLabelAngle: 70
      gridTextSize: 6
      
  
  $scope.monthtitleza = ->
    @titlos = "Monthly "

  $scope.firstpost = ->
    $http.post("http://localhost:3000/dailydata.json",
      ltable: $scope.checkOut
    ).success(((_this) ->
      (data) ->
        $scope.dailydata = data
    )(this)).error (data) ->
      console.log $scope.entries


  $scope.submit2 = ->
    $http.post("http://localhost:3000/monthdata.json",
      ltable: $scope.checkOut
    ).success(((_this) ->
      (data) ->
        $scope.dailydata = data
    )(this)).error (data) ->
      console.log $scope.entries


  $scope.tableParams = new ngTableParams(
    page: 1
    count: 10
    sorting:
      name: "asc"
  ,
    total: $scope.dailydata.length
    getData: ($defer, params) ->
      console.log "run deferred"
      $defer.resolve $scope.dailydata.slice((params.page() - 1) * params.count(), params.page() * params.count())
  )


app.controller "DemoCtrl", DemoCtrl
@BaseCtrl = (->
  BaseCtrl = undefined
  BaseCtrl = ->
    args = undefined
    fn = undefined
    index = undefined
    key = undefined
    _i = undefined
    _len = undefined
    _ref = undefined
    _ref1 = undefined
    args = undefined
    fn = undefined
    index = undefined
    key = undefined
    _i = undefined
    _len = undefined
    _ref = undefined
    _ref1 = undefined
    args = ((if 1 <= arguments_.length then __slice_.call(arguments_, 0) else []))
    _ref = @constructor.$inject
    index = _i = 0
    _len = _ref.length
    while _i < _len
      key = _ref[index]
      this[key] = args[index]
      index = ++_i
    _ref1 = @constructor::
    for key of _ref1
      fn = _ref1[key]
      continue  if typeof fn isnt "function"
      continue  if (key is "constructor" or key is "initialize") or key[0] is "_"
      @$scope[key] = ((if typeof fn.bind is "function" then fn.bind(this) else undefined)) or _.bind(fn, this)
    @initialize()  if typeof @initialize is "function"
    return

  BaseCtrl.register = (app, name) ->
    _ref = undefined
    _ref = undefined
    name = @name or ((if (_ref = @toString().match(/function\s*(.*?)\(/))? then _ref[1] else undefined))  unless name?
    app.controller name, this

  BaseCtrl.inject = ->
    args = undefined
    args = undefined
    args = ((if 1 <= arguments_.length then __slice_.call(arguments_, 0) else []))
    @$inject = args

  BaseCtrl
)()
DemoTestCtrl = ((_super) ->
  DemoTestCtrl = ->
    DemoTestCtrl.__super__.constructor.apply this, arguments_

  __extends_ DemoTestCtrl, _super
  DemoTestCtrl.register app
  DemoTestCtrl.inject "$scope", "$http", "ngTableParams"
  DemoTestCtrl::initialize = ->
    @$scope.dailydata = []

  DemoTestCtrl.$scope.bardata = []
  DemoTestCtrl.$scope.checkOut = "2014-01-06"
  DemoTestCtrl
)(BaseCtrl)
firstpost: ->
  $http.post("http://localhost:3000/dailydata.json",
    ltable: $scope.checkOut
  ).success(((_this) ->
    (data) ->
      _this.$scope.dailydata = data
  )(this)).error (data) ->
    console.log @$scope.entries


submit2: ->
  $http.post("http://localhost:3000/monthdata.json",
    ltable: $scope.checkOut
  ).success(((_this) ->
    (data) ->
      _this.$scope.dailydata = data
  )(this)).error (data) ->
    console.log $scope.entries

Morris.Hover = (->
  Hover = undefined
  Hover = (options) ->
    options = {}  unless options?
    @options = $.extend({}, Morris.Hover.defaults, options)
    @el = $("<div class='" + @options["class"] + "'></div>")
    @el.hide()
    @options.parent.append @el
    return

  Hover.defaults = class: "morris-hover morris-default-style"
  Hover::update = (html, x, y) ->
    @html html
    @show()
    @moveTo x, y

  Hover::html = (content) ->
    @el.html content

  Hover::moveTo = (x, y) ->
    hoverHeight = undefined
    hoverWidth = undefined
    left = undefined
    parentHeight = undefined
    parentWidth = undefined
    top = undefined
    hoverHeight = undefined
    hoverWidth = undefined
    left = undefined
    parentHeight = undefined
    parentWidth = undefined
    top = undefined
    parentWidth = @options.parent.innerWidth()
    parentHeight = @options.parent.innerHeight()
    hoverWidth = @el.outerWidth()
    hoverHeight = @el.outerHeight()
    left = Math.min(Math.max(0, x - hoverWidth / 2), parentWidth - hoverWidth)
    if y?
      top = y - hoverHeight - 10
      if top < 0
        top = y + 10
        top = parentHeight / 2 - hoverHeight / 2  if top + hoverHeight > parentHeight
    else
      top = parentHeight / 2 - hoverHeight / 2
    @el.css
      left: left + "px"
      top: parseInt(top) + "px"


  Hover::show = ->
    @el.show()

  Hover::hide = ->
    @el.hide()

  Hover
)()