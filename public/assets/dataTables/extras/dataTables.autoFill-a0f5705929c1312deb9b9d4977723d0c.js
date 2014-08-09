!function(t,e,s){var o=function(o,r){"use strict";var l=function(t,e){if(!(this instanceof l))throw"Warning: AutoFill must be initialised with the keyword 'new'";if(!o.fn.dataTableExt.fnVersionCheck("1.7.0"))throw"Warning: AutoFill requires DataTables 1.7 or greater";return this.c={},this.s={filler:{height:0,width:0},border:{width:2},drag:{startX:-1,startY:-1,startTd:null,endTd:null,dragging:!1},screen:{interval:null,y:0,height:0,scrollTop:0},scroller:{top:0,bottom:0},columns:[]},this.dom={table:null,filler:null,borderTop:null,borderRight:null,borderBottom:null,borderLeft:null,currentTarget:null},this.fnSettings=function(){return this.s},this._fnInit(t,e),this};return l.prototype={_fnInit:function(t,s){var i=this;this.s.dt=r.Api?new r.Api(t).settings()[0]:t.fnSettings(),this.s.init=s||{},this.dom.table=this.s.dt.nTable,o.extend(!0,this.c,l.defaults,s),this._initColumns();var n=o("<div/>",{"class":"AutoFill_filler"}).appendTo("body");this.dom.filler=n[0],this.s.filler.height=n.height(),this.s.filler.width=n.width(),n[0].style.display="none";var d,a=e.body;""!==i.s.dt.oScroll.sY&&(i.s.dt.nTable.parentNode.style.position="relative",a=i.s.dt.nTable.parentNode),d=o("<div/>",{"class":"AutoFill_border"}),this.dom.borderTop=d.clone().appendTo(a)[0],this.dom.borderRight=d.clone().appendTo(a)[0],this.dom.borderBottom=d.clone().appendTo(a)[0],this.dom.borderLeft=d.clone().appendTo(a)[0],n.on("mousedown.DTAF",function(t){return this.onselectstart=function(){return!1},i._fnFillerDragStart.call(i,t),!1}),o("tbody",this.dom.table).on("mouseover.DTAF mouseout.DTAF",">tr>td, >tr>th",function(t){i._fnFillerDisplay.call(i,t)}),o(this.dom.table).on("destroy.dt.DTAF",function(){n.off("mousedown.DTAF").remove(),o("tbody",this.dom.table).off("mouseover.DTAF mouseout.DTAF")})},_initColumns:function(){var t,e,s=this,r=this.s.dt,i=this.s.init;for(t=0,e=r.aoColumns.length;e>t;t++)this.s.columns[t]=o.extend(!0,{},l.defaults.column);for(r.oApi._fnApplyColumnDefs(r,i.aoColumnDefs||i.columnDefs,i.aoColumns||i.columns,function(t,e){s._fnColumnOptions(t,e)}),t=0,e=r.aoColumns.length;e>t;t++){var n=this.s.columns[t];n.read||(n.read=this._fnReadCell),n.write||(n.read=this._fnWriteCell),n.step||(n.read=this._fnStep)}},_fnColumnOptions:function(t,e){var o=this.s.columns[t],r=function(t,r){e[r[0]]!==s&&(o[t]=e[r[0]]),e[r[1]]!==s&&(o[t]=e[r[1]])};r("enable",["bEnable","enable"]),r("read",["fnRead","read"]),r("write",["fnWrite","write"]),r("step",["fnStep","step"]),r("increment",["bIncrement","increment"])},_fnTargetCoords:function(t){var e=o(t).parents("tr")[0],s=this.s.dt.oInstance.fnGetPosition(t);return{x:o("td",e).index(t),y:o("tr",e.parentNode).index(e),row:s[0],column:s[2]}},_fnUpdateBorder:function(t,e){var s,r=this.s.border.width,l=o(t).offset(),i=o(e).offset(),n=l.left-r,d=i.left+o(e).outerWidth(),a=l.top-r,h=i.top+o(e).outerHeight(),f=i.left+o(e).outerWidth()-l.left+2*r,c=i.top+o(e).outerHeight()-l.top+2*r;if(l.left>i.left&&(n=i.left-r,d=l.left+o(t).outerWidth(),f=l.left+o(t).outerWidth()-i.left+2*r),""!==this.s.dt.oScroll.sY){var p=o(this.s.dt.nTable.parentNode).offset(),u=o(this.s.dt.nTable.parentNode).scrollTop(),m=o(this.s.dt.nTable.parentNode).scrollLeft();n-=p.left-m,d-=p.left-m,a-=p.top-u,h-=p.top-u}s=this.dom.borderTop.style,s.top=a+"px",s.left=n+"px",s.height=this.s.border.width+"px",s.width=f+"px",s=this.dom.borderBottom.style,s.top=h+"px",s.left=n+"px",s.height=this.s.border.width+"px",s.width=f+"px",s=this.dom.borderLeft.style,s.top=a+"px",s.left=n+"px",s.height=c+"px",s.width=this.s.border.width+"px",s=this.dom.borderRight.style,s.top=a+"px",s.left=d+"px",s.height=c+"px",s.width=this.s.border.width+"px"},_fnFillerDragStart:function(s){var r=this,l=this.dom.currentTarget;this.s.drag.dragging=!0,r.dom.borderTop.style.display="block",r.dom.borderRight.style.display="block",r.dom.borderBottom.style.display="block",r.dom.borderLeft.style.display="block";var i=this._fnTargetCoords(l);this.s.drag.startX=i.x,this.s.drag.startY=i.y,this.s.drag.startTd=l,this.s.drag.endTd=l,this._fnUpdateBorder(l,l),o(e).bind("mousemove.AutoFill",function(t){r._fnFillerDragMove.call(r,t)}),o(e).bind("mouseup.AutoFill",function(t){r._fnFillerFinish.call(r,t)}),this.s.screen.y=s.pageY,this.s.screen.height=o(t).height(),this.s.screen.scrollTop=o(e).scrollTop(),""!==this.s.dt.oScroll.sY&&(this.s.scroller.top=o(this.s.dt.nTable.parentNode).offset().top,this.s.scroller.bottom=this.s.scroller.top+o(this.s.dt.nTable.parentNode).height()),this.s.screen.interval=setInterval(function(){var t=o(e).scrollTop(),s=t-r.s.screen.scrollTop;r.s.screen.y+=s,r.s.screen.height-r.s.screen.y+t<50?o("html, body").animate({scrollTop:t+50},240,"linear"):r.s.screen.y-t<50&&o("html, body").animate({scrollTop:t-50},240,"linear"),""!==r.s.dt.oScroll.sY&&(r.s.screen.y>r.s.scroller.bottom-50?o(r.s.dt.nTable.parentNode).animate({scrollTop:o(r.s.dt.nTable.parentNode).scrollTop()+50},240,"linear"):r.s.screen.y<r.s.scroller.top+50&&o(r.s.dt.nTable.parentNode).animate({scrollTop:o(r.s.dt.nTable.parentNode).scrollTop()-50},240,"linear"))},250)},_fnFillerDragMove:function(t){if(t.target&&"TD"==t.target.nodeName.toUpperCase()&&t.target!=this.s.drag.endTd){var s=this._fnTargetCoords(t.target);"y"==this.c.mode&&s.x!=this.s.drag.startX&&(t.target=o("tbody>tr:eq("+s.y+")>td:eq("+this.s.drag.startX+")",this.dom.table)[0]),"x"==this.c.mode&&s.y!=this.s.drag.startY&&(t.target=o("tbody>tr:eq("+this.s.drag.startY+")>td:eq("+s.x+")",this.dom.table)[0]),"either"==this.c.mode&&(s.x!=this.s.drag.startX?t.target=o("tbody>tr:eq("+this.s.drag.startY+")>td:eq("+s.x+")",this.dom.table)[0]:s.y!=this.s.drag.startY&&(t.target=o("tbody>tr:eq("+s.y+")>td:eq("+this.s.drag.startX+")",this.dom.table)[0])),"both"!==this.c.mode&&(s=this._fnTargetCoords(t.target));var r=this.s.drag;r.endTd=t.target,s.y>=this.s.drag.startY?this._fnUpdateBorder(r.startTd,r.endTd):this._fnUpdateBorder(r.endTd,r.startTd),this._fnFillerPosition(t.target)}this.s.screen.y=t.pageY,this.s.screen.scrollTop=o(e).scrollTop(),""!==this.s.dt.oScroll.sY&&(this.s.scroller.scrollTop=o(this.s.dt.nTable.parentNode).scrollTop(),this.s.scroller.top=o(this.s.dt.nTable.parentNode).offset().top,this.s.scroller.bottom=this.s.scroller.top+o(this.s.dt.nTable.parentNode).height())},_fnFillerFinish:function(){var t,s,l,i=this;o(e).unbind("mousemove.AutoFill mouseup.AutoFill"),this.dom.borderTop.style.display="none",this.dom.borderRight.style.display="none",this.dom.borderBottom.style.display="none",this.dom.borderLeft.style.display="none",this.s.drag.dragging=!1,clearInterval(this.s.screen.interval);var n=[],d=this.dom.table,a=this._fnTargetCoords(this.s.drag.startTd),h=this._fnTargetCoords(this.s.drag.endTd),f=function(t){return i.s.dt.oApi._fnVisibleToColumnIndex(i.s.dt,t)};if(a.y<=h.y)for(t=a.y;t<=h.y;t++)if(a.x<=h.x)for(l=a.x;l<=h.x;l++)n.push({node:o("tbody>tr:eq("+t+")>td:eq("+l+")",d)[0],x:l-a.x,y:t-a.y,colIdx:f(l)});else for(l=a.x;l>=h.x;l--)n.push({node:o("tbody>tr:eq("+t+")>td:eq("+l+")",d)[0],x:l-a.x,y:t-a.y,colIdx:f(l)});else for(t=a.y;t>=h.y;t--)if(a.x<=h.x)for(l=a.x;l<=h.x;l++)n.push({node:o("tbody>tr:eq("+t+")>td:eq("+l+")",d)[0],x:l-a.x,y:t-a.y,colIdx:f(l)});else for(l=a.x;l>=h.x;l--)n.push({node:o("tbody>tr:eq("+t+")>td:eq("+l+")",d)[0],x:a.x-l,y:a.y-t,colIdx:f(l)});if(!(n.length<=1)){var c,p=[];for(t=0,s=n.length;s>t;t++){var u=n[t],m=this.s.columns[u.colIdx],b=m.read.call(m,u.node),g=m.step.call(m,u.node,b,c,t,u.x,u.y);m.write.call(m,u.node,g),c=g,p.push({cell:u,colIdx:u.colIdx,newValue:g,oldValue:b})}null!==this.c.complete&&this.c.complete.call(this,p),r.Api?new r.Api(this.s.dt).draw(!1):this.s.dt.oInstance.fnDraw()}},_fnFillerDisplay:function(t){var e=this.dom.filler;if(!this.s.drag.dragging){var s="td"==t.target.nodeName.toLowerCase()?t.target:o(t.target).parents("td")[0],r=this._fnTargetCoords(s).column;return this.s.columns[r].enable?void("mouseover"==t.type?(this.dom.currentTarget=s,this._fnFillerPosition(s),e.style.display="block"):t.relatedTarget&&t.relatedTarget.className.match(/AutoFill/)||(e.style.display="none")):void(e.style.display="none")}},_fnFillerPosition:function(t){var e=o(t).offset(),s=this.dom.filler;s.style.top=e.top-this.s.filler.height/2-1+o(t).outerHeight()+"px",s.style.left=e.left-this.s.filler.width/2-1+o(t).outerWidth()+"px"}},r.AutoFill=l,r.AutoFill=l,l.version="1.2.0",l.defaults={mode:"y",complete:null,column:{enable:!0,increment:!0,read:function(t){return o(t).html()},write:function(t,e){var s=o(t).parents("table");if(r.Api)s.DataTable().cell(t).data(e);else{var l=s.dataTable(),i=l.fnGetPosition(t);l.fnUpdate(e,i[0],i[2],!1)}},step:function(t,e,o,r,l,i){var n=/(\-?\d+)/,d=this.increment&&o?o.match(n):null;return d?o.replace(n,parseInt(d[1],10)+(0>l||0>i?-1:1)):o===s?e:o}}},l};"function"==typeof define&&define.amd?define("datatables-autofill",["jquery","datatables"],o):jQuery&&!jQuery.fn.dataTable.AutoFill&&o(jQuery,jQuery.fn.dataTable)}(window,document);