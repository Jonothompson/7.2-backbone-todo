
import TaskListView from './views/taskListView';
import TodoCollection from './models/taskListModel';

(function(){
  'use strict';

  $(document).ready(function(){
//    $('#app-container').prepend(JST.todotemp());
    var taskViewList = new TaskListView();
    
    $('#app-container').prepend(taskViewList.el)
  
  });
  
  
})();
