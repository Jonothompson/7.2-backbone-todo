export default Backbone.View.extend ({
	template: JST.todotemp,
	tagName: 'section',
	
	initialize: function(){
		this.render();
	},
	
	render: function (){
		this.$el.html(this.template());
	}
	
});