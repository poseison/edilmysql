(function(){this.ngGmapModule("directives.api.utils",function(){return this.ModelsWatcher={didModelsChange:function(e,t){var i,n;return _.isArray(e)?e===t?!1:(n=_.intersectionObjects(e,t).length!==t.length,i=!0,n||(i=e.length!==t.length),i):(directives.api.utils.Logger.error("models property must be an array newValue of: "+e.toString()+" is not!!"),!1)}}})}).call(this);