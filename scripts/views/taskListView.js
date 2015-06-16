export default Backbone.View.extend ({
	template: JST.todotemp,
	
	initialize: function(){
		this.render();
	},
	
	render: function (){
		this.$el.html(this.template());
	}
	
});