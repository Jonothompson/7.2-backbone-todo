import {TodoCollection} from './models/taskListModel';

import TaskListView from './views/taskListView';


var Router = Backbone.Router.extend({
	routes: {
		'': 'index'	
	},
	
	initialize: function(){
		this.collection = new TodoCollection([
			{id: 1, title: "Learn Backbone", active: false, completed: true},
			{id: 2, title: "finish 7.2 homework", active: false, completed: true},
			{id: 3, title: "Eat Dinner!", active: false, completed: true},
			{id: 4, title: "Destroy Backbone Completely", active: false, completed: true},
			{id: 5, title: "Dance Gleefully on its ashes", active: false, completed: true}			
		]);
	},
	
	index: function() {
		var todoView = new TaskListView({collection: this.collection});
		$('#app-container').html(todoView.el);
	},
	
});

var router = new Router();
export default router;