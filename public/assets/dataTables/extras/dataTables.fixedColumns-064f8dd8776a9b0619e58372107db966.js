!function(t){var e=function(e){"use strict";var i=function(t,o){var s=this;if(!this instanceof i)return void alert("FixedColumns warning: FixedColumns must be initialised with the 'new' keyword.");"undefined"==typeof o&&(o={}),e.fn.dataTable.camelToHungarian&&e.fn.dataTable.camelToHungarian(i.defaults,o);var l=e.fn.dataTable.Api?new e.fn.dataTable.Api(t).settings()[0]:t.fnSettings();this.s={dt:l,iTableColumns:l.aoColumns.length,aiOuterWidths:[],aiInnerWidths:[]},this.dom={scroller:null,header:null,body:null,footer:null,grid:{wrapper:null,dt:null,left:{wrapper:null,head:null,body:null,foot:null},right:{wrapper:null,head:null,body:null,foot:null}},clone:{left:{header:null,body:null,footer:null},right:{header:null,body:null,footer:null}}},l._oFixedColumns=this,l._bInitComplete?this._fnConstruct(o):l.oApi._fnCallbackReg(l,"aoInitComplete",function(){s._fnConstruct(o)},"FixedColumns")};return i.prototype={fnUpdate:function(){this._fnDraw(!0)},fnRedrawLayout:function(){this._fnColCalc(),this._fnGridLayout(),this.fnUpdate()},fnRecalculateHeight:function(t){delete t._DTTC_iHeight,t.style.height="auto"},fnSetRowHeight:function(t,e){t.style.height=e+"px"},fnGetPosition:function(t){var i,o=this.s.dt.oInstance;if(e(t).parents(".DTFC_Cloned").length){if("tr"===t.nodeName.toLowerCase())return i=e(t).index(),o.fnGetPosition(e("tr",this.s.dt.nTBody)[i]);var s=e(t).index();i=e(t.parentNode).index();var l=o.fnGetPosition(e("tr",this.s.dt.nTBody)[i]);return[l,s,o.oApi._fnVisibleToColumnIndex(this.s.dt,s)]}return o.fnGetPosition(t)},_fnConstruct:function(o){var s=this;if("function"!=typeof this.s.dt.oInstance.fnVersionCheck||this.s.dt.oInstance.fnVersionCheck("1.8.0")!==!0)return void alert("FixedColumns "+i.VERSION+" required DataTables 1.8.0 or later. Please upgrade your DataTables installation");if(""===this.s.dt.oScroll.sX)return void this.s.dt.oInstance.oApi._fnLog(this.s.dt,1,"FixedColumns is not needed (no x-scrolling in DataTables enabled), so no action will be taken. Use 'FixedHeader' for column fixing when scrolling is not enabled");this.s=e.extend(!0,this.s,i.defaults,o);var l=this.s.dt.oClasses;this.dom.grid.dt=e(this.s.dt.nTable).parents("div."+l.sScrollWrapper)[0],this.dom.scroller=e("div."+l.sScrollBody,this.dom.grid.dt)[0],this._fnColCalc(),this._fnGridSetup();var n;e(this.dom.scroller).on("mouseover.DTFC touchstart.DTFC",function(){n="main"}).on("scroll.DTFC",function(){"main"===n&&(s.s.iLeftColumns>0&&(s.dom.grid.left.liner.scrollTop=s.dom.scroller.scrollTop),s.s.iRightColumns>0&&(s.dom.grid.right.liner.scrollTop=s.dom.scroller.scrollTop))}),s.s.iLeftColumns>0&&e(s.dom.grid.left.liner).on("mouseover.DTFC touchstart.DTFC",function(){n="left"}).on("scroll.DTFC",function(){"left"===n&&(s.dom.scroller.scrollTop=s.dom.grid.left.liner.scrollTop,s.s.iRightColumns>0&&(s.dom.grid.right.liner.scrollTop=s.dom.grid.left.liner.scrollTop))}).on("wheel.DTFC",function(t){var e=-t.originalEvent.deltaX;s.dom.scroller.scrollLeft-=e}),s.s.iRightColumns>0&&e(s.dom.grid.right.liner).on("mouseover.DTFC touchstart.DTFC",function(){n="right"}).on("scroll.DTFC",function(){"right"===n&&(s.dom.scroller.scrollTop=s.dom.grid.right.liner.scrollTop,s.s.iLeftColumns>0&&(s.dom.grid.left.liner.scrollTop=s.dom.grid.right.liner.scrollTop))}).on("wheel.DTFC",function(t){var e=-t.originalEvent.deltaX;s.dom.scroller.scrollLeft-=e}),e(t).on("resize.DTFC",function(){s._fnGridLayout.call(s)});var r=!0,d=e(this.s.dt.nTable);d.on("draw.dt.DTFC",function(){s._fnDraw.call(s,r),r=!1}).on("column-sizing.dt.DTFC",function(){s._fnColCalc(),s._fnGridLayout(s)}).on("column-visibility.dt.DTFC",function(){s._fnColCalc(),s._fnGridLayout(s),s._fnDraw(!0)}).on("destroy.dt.DTFC",function(){d.off("column-sizing.dt.DTFC destroy.dt.DTFC draw.dt.DTFC"),e(s.dom.scroller).off("scroll.DTFC mouseover.DTFC"),e(t).off("resize.DTFC"),e(s.dom.grid.left.liner).off("scroll.DTFC wheel.DTFC mouseover.DTFC"),e(s.dom.grid.left.wrapper).remove(),e(s.dom.grid.right.liner).off("scroll.DTFC wheel.DTFC mouseover.DTFC"),e(s.dom.grid.right.wrapper).remove()}),this._fnGridLayout(),this.s.dt.oInstance.fnDraw(!1)},_fnColCalc:function(){var t=this,i=0,o=0;this.s.aiInnerWidths=[],this.s.aiOuterWidths=[],e.each(this.s.dt.aoColumns,function(s,l){var n=e(l.nTh);if(n.filter(":visible").length){var r=n.outerWidth();if(0===t.s.aiOuterWidths.length){var d=e(t.s.dt.nTable).css("border-left-width");r+="string"==typeof d?1:parseInt(d,10)}t.s.aiOuterWidths.push(r),t.s.aiInnerWidths.push(n.width()),s<t.s.iLeftColumns&&(i+=r),t.s.iTableColumns-t.s.iRightColumns<=s&&(o+=r)}else t.s.aiInnerWidths.push(0),t.s.aiOuterWidths.push(0)}),this.s.iLeftWidth=i,this.s.iRightWidth=o},_fnGridSetup:function(){var t,i=this._fnDTOverflow();this.dom.body=this.s.dt.nTable,this.dom.header=this.s.dt.nTHead.parentNode,this.dom.header.parentNode.parentNode.style.position="relative";var o=e('<div class="DTFC_ScrollWrapper" style="position:relative; clear:both;"><div class="DTFC_LeftWrapper" style="position:absolute; top:0; left:0;"><div class="DTFC_LeftHeadWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div><div class="DTFC_LeftBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_LeftBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_LeftFootWrapper" style="position:relative; top:0; left:0; overflow:hidden;"></div></div><div class="DTFC_RightWrapper" style="position:absolute; top:0; left:0;"><div class="DTFC_RightHeadWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightHeadBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div><div class="DTFC_RightBodyWrapper" style="position:relative; top:0; left:0; overflow:hidden;"><div class="DTFC_RightBodyLiner" style="position:relative; top:0; left:0; overflow-y:scroll;"></div></div><div class="DTFC_RightFootWrapper" style="position:relative; top:0; left:0;"><div class="DTFC_RightFootBlocker DTFC_Blocker" style="position:absolute; top:0; bottom:0;"></div></div></div></div>')[0],s=o.childNodes[0],l=o.childNodes[1];this.dom.grid.dt.parentNode.insertBefore(o,this.dom.grid.dt),o.appendChild(this.dom.grid.dt),this.dom.grid.wrapper=o,this.s.iLeftColumns>0&&(this.dom.grid.left.wrapper=s,this.dom.grid.left.head=s.childNodes[0],this.dom.grid.left.body=s.childNodes[1],this.dom.grid.left.liner=e("div.DTFC_LeftBodyLiner",o)[0],o.appendChild(s)),this.s.iRightColumns>0&&(this.dom.grid.right.wrapper=l,this.dom.grid.right.head=l.childNodes[0],this.dom.grid.right.body=l.childNodes[1],this.dom.grid.right.liner=e("div.DTFC_RightBodyLiner",o)[0],t=e("div.DTFC_RightHeadBlocker",o)[0],t.style.width=i.bar+"px",t.style.right=-i.bar+"px",this.dom.grid.right.headBlock=t,t=e("div.DTFC_RightFootBlocker",o)[0],t.style.width=i.bar+"px",t.style.right=-i.bar+"px",this.dom.grid.right.footBlock=t,o.appendChild(l)),this.s.dt.nTFoot&&(this.dom.footer=this.s.dt.nTFoot.parentNode,this.s.iLeftColumns>0&&(this.dom.grid.left.foot=s.childNodes[2]),this.s.iRightColumns>0&&(this.dom.grid.right.foot=l.childNodes[2]))},_fnGridLayout:function(){var t,i=this.dom.grid,o=e(i.wrapper).width(),s=e(this.s.dt.nTable.parentNode).height(),l=e(this.s.dt.nTable.parentNode.parentNode).height(),n=this._fnDTOverflow(),r=this.s.iLeftWidth,d=this.s.iRightWidth;n.x&&(s-=n.bar),i.wrapper.style.height=l+"px",this.s.iLeftColumns>0&&(i.left.wrapper.style.width=r+"px",i.left.wrapper.style.height="1px",i.left.body.style.height=s+"px",i.left.foot&&(i.left.foot.style.top=(n.x?n.bar:0)+"px"),i.left.liner.style.width=r+n.bar+"px",i.left.liner.style.height=s+"px"),this.s.iRightColumns>0&&(t=o-d,n.y&&(t-=n.bar),i.right.wrapper.style.width=d+"px",i.right.wrapper.style.left=t+"px",i.right.wrapper.style.height="1px",i.right.body.style.height=s+"px",i.right.foot&&(i.right.foot.style.top=(n.x?n.bar:0)+"px"),i.right.liner.style.width=d+n.bar+"px",i.right.liner.style.height=s+"px",i.right.headBlock.style.display=n.y?"block":"none",i.right.footBlock.style.display=n.y?"block":"none")},_fnDTOverflow:function(){var t=this.s.dt.nTable,e=t.parentNode,i={x:!1,y:!1,bar:this.s.dt.oScroll.iBarWidth};return t.offsetWidth>e.clientWidth&&(i.x=!0),t.offsetHeight>e.clientHeight&&(i.y=!0),i},_fnDraw:function(t){this._fnGridLayout(),this._fnCloneLeft(t),this._fnCloneRight(t),null!==this.s.fnDrawCallback&&this.s.fnDrawCallback.call(this,this.dom.clone.left,this.dom.clone.right),e(this).trigger("draw.dtfc",{leftClone:this.dom.clone.left,rightClone:this.dom.clone.right})},_fnCloneRight:function(t){if(!(this.s.iRightColumns<=0)){var e,i=[];for(e=this.s.iTableColumns-this.s.iRightColumns;e<this.s.iTableColumns;e++)this.s.dt.aoColumns[e].bVisible&&i.push(e);this._fnClone(this.dom.clone.right,this.dom.grid.right,i,t)}},_fnCloneLeft:function(t){if(!(this.s.iLeftColumns<=0)){var e,i=[];for(e=0;e<this.s.iLeftColumns;e++)this.s.dt.aoColumns[e].bVisible&&i.push(e);this._fnClone(this.dom.clone.left,this.dom.grid.left,i,t)}},_fnCopyLayout:function(t,i){for(var o=[],s=[],l=[],n=0,r=t.length;r>n;n++){var d=[];d.nTr=e(t[n].nTr).clone(!0,!0)[0];for(var h=0,a=this.s.iTableColumns;a>h;h++)if(-1!==e.inArray(h,i)){var f=e.inArray(t[n][h].cell,l);if(-1===f){var p=e(t[n][h].cell).clone(!0,!0)[0];s.push(p),l.push(t[n][h].cell),d.push({cell:p,unique:t[n][h].unique})}else d.push({cell:s[f],unique:t[n][h].unique})}o.push(d)}return o},_fnClone:function(t,i,o,s){var l,n,r,d,h,a,f,p,c,u,g=this;if(s){for(null!==t.header&&t.header.parentNode.removeChild(t.header),t.header=e(this.dom.header).clone(!0,!0)[0],t.header.className+=" DTFC_Cloned",t.header.style.width="100%",i.head.appendChild(t.header),p=this._fnCopyLayout(this.s.dt.aoHeader,o),c=e(">thead",t.header),c.empty(),l=0,n=p.length;n>l;l++)c[0].appendChild(p[l].nTr);this.s.dt.oApi._fnDrawHead(this.s.dt,p,!0)}else for(p=this._fnCopyLayout(this.s.dt.aoHeader,o),u=[],this.s.dt.oApi._fnDetectHeader(u,e(">thead",t.header)[0]),l=0,n=p.length;n>l;l++)for(r=0,d=p[l].length;d>r;r++)u[l][r].cell.className=p[l][r].cell.className,e("span.DataTables_sort_icon",u[l][r].cell).each(function(){this.className=e("span.DataTables_sort_icon",p[l][r].cell)[0].className});this._fnEqualiseHeights("thead",this.dom.header,t.header),"auto"==this.s.sHeightMatch&&e(">tbody>tr",g.dom.body).css("height","auto"),null!==t.body&&(t.body.parentNode.removeChild(t.body),t.body=null),t.body=e(this.dom.body).clone(!0)[0],t.body.className+=" DTFC_Cloned",t.body.style.paddingBottom=this.s.dt.oScroll.iBarWidth+"px",t.body.style.marginBottom=2*this.s.dt.oScroll.iBarWidth+"px",null!==t.body.getAttribute("id")&&t.body.removeAttribute("id"),e(">thead>tr",t.body).empty(),e(">tfoot",t.body).remove();var m=e("tbody",t.body)[0];if(e(m).empty(),this.s.dt.aiDisplay.length>0){var C=e(">thead>tr",t.body)[0];for(f=0;f<o.length;f++){h=o[f],a=e(this.s.dt.aoColumns[h].nTh).clone(!0)[0],a.innerHTML="";var y=a.style;y.paddingTop="0",y.paddingBottom="0",y.borderTopWidth="0",y.borderBottomWidth="0",y.height=0,y.width=g.s.aiInnerWidths[h]+"px",C.appendChild(a)}e(">tbody>tr",g.dom.body).each(function(t){var i=this.cloneNode(!1);i.removeAttribute("id");var s=g.s.dt.oFeatures.bServerSide===!1?g.s.dt.aiDisplay[g.s.dt._iDisplayStart+t]:t;for(f=0;f<o.length;f++){var l=g.s.dt.aoData[s].anCells||g.s.dt.oApi._fnGetTdNodes(g.s.dt,s);h=o[f],l.length>0&&(a=e(l[h]).clone(!0,!0)[0],i.appendChild(a))}m.appendChild(i)})}else e(">tbody>tr",g.dom.body).each(function(){a=this.cloneNode(!0),a.className+=" DTFC_NoData",e("td",a).html(""),m.appendChild(a)});if(t.body.style.width="100%",t.body.style.margin="0",t.body.style.padding="0",s&&"undefined"!=typeof this.s.dt.oScroller&&i.liner.appendChild(this.s.dt.oScroller.dom.force.cloneNode(!0)),i.liner.appendChild(t.body),this._fnEqualiseHeights("tbody",g.dom.body,t.body),null!==this.s.dt.nTFoot){if(s){null!==t.footer&&t.footer.parentNode.removeChild(t.footer),t.footer=e(this.dom.footer).clone(!0,!0)[0],t.footer.className+=" DTFC_Cloned",t.footer.style.width="100%",i.foot.appendChild(t.footer),p=this._fnCopyLayout(this.s.dt.aoFooter,o);var T=e(">tfoot",t.footer);for(T.empty(),l=0,n=p.length;n>l;l++)T[0].appendChild(p[l].nTr);this.s.dt.oApi._fnDrawHead(this.s.dt,p,!0)}else{p=this._fnCopyLayout(this.s.dt.aoFooter,o);var v=[];for(this.s.dt.oApi._fnDetectHeader(v,e(">tfoot",t.footer)[0]),l=0,n=p.length;n>l;l++)for(r=0,d=p[l].length;d>r;r++)v[l][r].cell.className=p[l][r].cell.className}this._fnEqualiseHeights("tfoot",this.dom.footer,t.footer)}var b=this.s.dt.oApi._fnGetUniqueThs(this.s.dt,e(">thead",t.header)[0]);e(b).each(function(t){h=o[t],this.style.width=g.s.aiInnerWidths[h]+"px"}),null!==g.s.dt.nTFoot&&(b=this.s.dt.oApi._fnGetUniqueThs(this.s.dt,e(">tfoot",t.footer)[0]),e(b).each(function(t){h=o[t],this.style.width=g.s.aiInnerWidths[h]+"px"}))},_fnGetTrNodes:function(t){for(var e=[],i=0,o=t.childNodes.length;o>i;i++)"TR"==t.childNodes[i].nodeName.toUpperCase()&&e.push(t.childNodes[i]);return e},_fnEqualiseHeights:function(t,i,o){if("none"!=this.s.sHeightMatch||"thead"===t||"tfoot"===t){var s,l,n,r,d,h=i.getElementsByTagName(t)[0],a=o.getElementsByTagName(t)[0],f=e(">"+t+">tr:eq(0)",i).children(":first"),p=(f.outerHeight()-f.height(),this._fnGetTrNodes(h)),c=this._fnGetTrNodes(a),u=[];for(s=0,l=c.length;l>s;s++)r=p[s].offsetHeight,d=c[s].offsetHeight,n=d>r?d:r,"semiauto"==this.s.sHeightMatch&&(p[s]._DTTC_iHeight=n),u.push(n);for(s=0,l=c.length;l>s;s++)c[s].style.height=u[s]+"px",p[s].style.height=u[s]+"px"}}},i.defaults={iLeftColumns:1,iRightColumns:0,fnDrawCallback:null,sHeightMatch:"semiauto"},i.version="3.0.1",e.fn.dataTable.FixedColumns=i,e.fn.DataTable.FixedColumns=i,i};"function"==typeof define&&define.amd?define("datatables-fixedcolumns",["jquery","datatables"],e):jQuery&&!jQuery.fn.dataTable.FixedColumns&&e(jQuery,jQuery.fn.dataTable)}(window,document);