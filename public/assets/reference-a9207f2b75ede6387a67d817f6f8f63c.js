Raphael(function(){function t(t){var e=document.getElementById(t);return e.style.cssText="float:right;padding:10px;width:99px;height:99px;background:#2C53B0 url(http://raphaeljs.com/blueprint-min.png) no-repeat",Raphael(e,99,99)}!function(t){if(t){var e=document.createElement("li"),r=function(t,e){var r=e.toUpperCase().split(""),n=r.shift(),a=new RegExp("^["+n.toLowerCase()+n+"][a-z]*"+r.join("[a-z]*")+"[a-z]*$");return!!String(t).match(a)},n=function(t,e){t=String(t),e=String(e);var n,a=0;if(t==e)return 1;if(!t||!e)return 0;if(r(t,e))return.9;a=0,n=t.toLowerCase();for(var i,o=0,l=e.length;l>o;o++)i=n.indexOf(e.charAt(o)),~i&&(n=n.substring(i+1),a+=1/(i+1));return a=Math.max(a/l-Math.abs(t.length-l)/t.length/2,0)};e.innerHTML='<input type="search" id="dr-filter" results="0">';for(var a=t.getElementsByTagName("span"),i=[],o=/[^\.\(]*(?=(\(\))?$)/,l=0,c=a.length;c>l;l++)i[l]={li:a[l].parentNode.parentNode,text:a[l].innerHTML.match(o)[0]};t.insertBefore(e,t.firstChild);var f=document.getElementById("dr-filter");f.style.width="100%",f.style.marginTop="10px",f.onclick=f.onchange=f.onkeydown=f.onkeyup=function(){var e=f.value,r=[];if(e.length>1){for(var a=0,o=i.length;o>a;a++)r[a]={li:i[a].li,weight:n(i[a].text,e)};for(r.sort(function(t,e){return e.weight-t.weight}),a=0,o=r.length;o>a;a++)t.appendChild(r[a].li)}else for(a=0,o=i.length;o>a;a++)t.appendChild(i[a].li)}}}(document.getElementById("dr-toc"));var e={stroke:"#fff","stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},r={stroke:"#fff","stroke-width":2,"stroke-dasharray":"- ","stroke-linecap":"round","stroke-linejoin":"round"},n={stroke:"#fff",fill:"#fff","fill-opacity":.5,"stroke-width":2,"stroke-linecap":"round","stroke-linejoin":"round"},a={fill:"#000",opacity:0};t("Paper.path-extra").path("M10,10R90,50 10,90").attr(e),function(t){var e;t.circle(15,15,10).attr(n).click(function(){var t=Raphael.hsb(Math.random(),.6,1);this.animate(e?{cx:15,cy:15,r:10,stroke:"#fff",fill:"#fff"}:{cx:80,cy:80,r:15,stroke:t,fill:t},600,["bounce","<>","elastic",""][Math.round(3*Math.random())]),e=!e})}(t("Element.animate-extra")),function(t){var e,r;t.circle(15,15,10).attr(n).drag(function(t,n){this.attr({cx:Math.min(Math.max(e+t,15),85),cy:Math.min(Math.max(r+n,15),85)})},function(){e=this.attr("cx"),r=this.attr("cy")})}(t("Element.drag-extra")),function(t){var e=t.ellipse(50,50,40,30).attr(n).click(function(){this.animate({transform:"r180"},1e3,function(){this.attr({transform:""})})}),a=t.rect().attr(e.getBBox()).attr(r);eve.on("anim.frame."+e.id,function(){a.attr(e.getBBox())})}(t("Element.getBBox-extra")),function(t){var r=t.path("M10,10R20,70 30,40 40,80 50,10 60,50 70,20 80,30 90,90").attr(e),n=r.getTotalLength(),i=1;t.customAttributes.along=function(t){var e=r.getPointAtLength(t*n);return{transform:"t"+[e.x,e.y]+"r"+e.alpha}};var o=t.ellipse(0,0,5,2).attr({along:0}).attr(e);t.rect(0,0,100,100).attr(a).click(function(){o.stop().animate({along:i},5e3),i=+!i})}(t("Element.getPointAtLength-extra")),function(t){var r=t.path("M10,10R20,70 30,40 40,80 50,10 60,50 70,20 80,30 90,90").attr(e),n=r.getTotalLength()-10,i=1;t.customAttributes.along=function(t){return{path:r.getSubpath(t*n,t*n+11)}};var o=t.path().attr(e).attr({along:0,stroke:"#f00","stroke-width":3});t.rect(0,0,100,100).attr(a).click(function(){o.stop().animate({along:i},5e3),i=+!i})}(t("Element.getSubpath-extra")),function(t){t.circle(50,50,40).attr(e).glow({color:"#fff"})}(t("Element.glow-extra")),function(t){t.rect(10,10,40,30).attr(r),t.rect(10,10,40,30).attr(e).transform("r-30, 50, 10t10, 20s1.5"),t.text(50,90,"r-30, 50, 10\nt10, 20s1.5").attr({fill:"#fff"})}(t("Element.transform-extra")),function(t){t.circle(50,50,40).attr(e)}(t("Paper.circle-extra")),function(t){t.ellipse(50,50,40,30).attr(e)}(t("Paper.ellipse-extra")),function(t){t.rect(10,10,50,50).attr(e),t.rect(40,40,50,50,10).attr(e)}(t("Paper.rect-extra")),function(t){var e=t.set(t.rect(10,10,50,50).attr(n),t.rect(40,40,50,50,10).attr(n)).hover(function(){e.stop().animate({stroke:"#f00"},600,"<>")},function(){e.stop().animate({stroke:"#fff"},600,"<>")})}(t("Paper.set-extra")),function(t){t.text(50,50,"Rapha\xebl\nkicks\nbutt!").attr({fill:"#fff",font:"italic 20px Georgia",transform:"r-10"})}(t("Paper.text-extra"))});