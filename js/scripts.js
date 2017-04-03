// Make a to do list webpage where people can add tasks to create a list of things to do. Add an option for users to indicate a task is done. Use jQuery to remove the task from the "to do" list. Make sure to identify specific behaviors your program should demonstrate, and create specifications with example input and output. List these in the project's README.
function Task(taskName, priority, notes, dueDate) {
  this.taskName = taskName;
  this.priority = priority;
  this.notes = notes;
  this.dueDate = dueDate;
  // this.checkBox = checkBox;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var taskName = $("#task").val();
    var priority = $("#priority").val();
    var notes = $("#notes").val();
    var dueDate = $("#due").val();

    var newTask = new Task(taskName, priority, notes, dueDate);

    $("#task-list").append("<p><input type='checkbox' name='checkBox'><span class='task'>" + newTask.taskName + "</span></p>");


    $("input[name='checkBox']").click(function() {
      if (this.checked) {
        $(this).parent().remove()
      }
    });

    $(".task").last().click(function() {
      $("#show-task").toggle();
      $("#show-task h2").text(newTask.taskName);
      $("#priority-output").text(newTask.priority);
      $("#notes-output").text(newTask.notes);
      $("#dueDate-output").text(newTask.dueDate);
    });
  });
});
