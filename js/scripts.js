// Make a to do list webpage where people can add tasks to create a list of things to do. Add an option for users to indicate a task is done. Use jQuery to remove the task from the "to do" list. Make sure to identify specific behaviors your program should demonstrate, and create specifications with example input and output. List these in the project's README.
function Task(taskName, priority, notes, dueDate, checkBox) {
  this.taskName = taskName;
  this.priority = priority;
  this.notes = notes;
  this.dueDate = dueDate;
  this.checkBox = checkBox;
}

$(document).ready(function() {
  $("form").submit(function(event) {
    event.preventDefault();

    var taskName = $("#task").val();
    var priority = $("#priority").val();
    var notes = $("#notes").val();
    var dueDate = $("#due").val();
    var checkBox = "<label><input type='checkbox' name='checkBox'></label>"


    var newTask = new Task(taskName, priority, notes, dueDate, checkBox);

    $("#task-list").append("<p>" + newTask.checkBox + "<span class='task'>" + newTask.taskName + "</span></p>");

    // $("#task-list").append("<p><label><input type='checkbox' name='checkBox'><span class='task'>" + newTask.taskName +  "</span></label></p>");

    $("input[name='checkBox']").click(function() {
      if (this.checked) {
        $(this).remove();
      }
    })
    // $("#task-list").append("<p><label><input type='checkbox' id='checkBox' name='checkboxes'><span class='task'>" + newTask.taskName +  "</span></label></p>");
    // $("input:checkbox[name=checkboxes]:checked").each(function(){
    //   var deleteChecked = $(this).val();
    //   $("#btnDeleteid").click(function(){
    //     $("deleteChecked").remove();
    //   })
    // })

    // if (document.getElementById('checkbox').checked) {
    //   $(this).remove();
    // }

    $(".task").click(function() {
      $("#show-task").toggle();
      $("#show-task h2").text(newTask.taskName);
      $("#priority-output").text(newTask.priority);
      $("#notes-output").text(newTask.notes);
      $("#dueDate-output").text(newTask.dueDate);
    });

  });
});
