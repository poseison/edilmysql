(function(){ActiveAdmin.CheckboxToggler=function(){function e(e,t){var n;this.options=e,this.container=t,n={},this.options=$.extend(n,e),this._init(),this._bind()}return e.prototype._init=function(){if(!this.container)throw new Error("Container element not found");if(this.$container=$(this.container),!this.$container.find(".toggle_all").length)throw new Error('"toggle all" checkbox not found');return this.toggle_all_checkbox=this.$container.find(".toggle_all"),this.checkboxes=this.$container.find(":checkbox").not(this.toggle_all_checkbox)},e.prototype._bind=function(){return this.checkboxes.change(function(e){return function(t){return e._didChangeCheckbox(t.target)}}(this)),this.toggle_all_checkbox.change(function(e){return function(){return e._didChangeToggleAllCheckbox()}}(this))},e.prototype._didChangeCheckbox=function(){switch(this.checkboxes.filter(":checked").length){case this.checkboxes.length-1:return this.toggle_all_checkbox.prop({checked:null});case this.checkboxes.length:return this.toggle_all_checkbox.prop({checked:!0})}},e.prototype._didChangeToggleAllCheckbox=function(){var e;return e=this.toggle_all_checkbox.prop("checked")?!0:null,this.checkboxes.each(function(t){return function(n,o){return $(o).prop({checked:e}),t._didChangeCheckbox(o)}}(this))},e}(),$.widget.bridge("checkboxToggler",ActiveAdmin.CheckboxToggler)}).call(this);