(function(){var n=[].indexOf||function(n){for(var t=0,i=this.length;i>t;t++)if(t in this&&this[t]===n)return t;return-1};this.ngGmapModule("oo",function(){var t;return t=["extended","included"],this.BaseObject=function(){function i(){}return i.extend=function(i){var e,r,u;for(e in i)r=i[e],n.call(t,e)<0&&(this[e]=r);return null!=(u=i.extended)&&u.apply(0),this},i.include=function(i){var e,r,u;for(e in i)r=i[e],n.call(t,e)<0&&(this.prototype[e]=r);return null!=(u=i.included)&&u.apply(0),this},i}()})}).call(this);