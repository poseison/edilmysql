(function(){describe("LayerParentModelSpec",function(){return beforeEach(function(){var t;return this.scope={options:{blah:!0},$watch:function(){},$on:function(){}},this.attrs={type:"testLayer",options:"someBoundAttr"},t=this,this.setOpts,this.tempMaps=google.maps,google.maps.testLayer=function(){return function(e){return t.setOpts=e,{setMap:function(){}}}}(this),this.mapCtrl={getMap:function(){}},this.timeout=function(){return function(t){return t()}}(this),this.constructor=directives.api.models.parent.LayerParentModel,this.subject=new this.constructor(this.scope,{},this.attrs,this.mapCtrl,this.timeout)}),afterEach(function(){return google.map=this.tempMaps}),it("constructor is defined",function(){return expect(this.constructor).toBeDefined()}),it("subject is defined",function(){return expect(this.subject).toBeDefined()}),it("options set",function(){return expect(this.setOpts.blah).toBe(this.scope.options.blah)})})}).call(this);