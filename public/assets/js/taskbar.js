// need to attach hanldebars when DOM is loaded
$(function() {
  $(".change-task").on("click", function(event) {
    var id = $(this).data("id");
    var newTask = $(this).data("newtask");

    var newTaskState = {
      done: newTask
    };

    // Send the PUT request.
    $.ajax("/api/task/" + id, {
      type: "PUT",
      data: newTaskState
    }).then(function() {
      console.log("changed task to", newTask);
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".create-form").on("submit", function(event) {
    // Make sure to preventDefault on a submit event.
    event.preventDefault();

    var newTask = {
      name: $("#ca")
        .val()
        .trim(),
      done: $("[name=done]:checked")
        .val()
        .trim()
    };

    // Send the POST request.
    $.ajax("/api/task", {
      type: "POST",
      data: newTask
    }).then(function() {
      console.log("created new task");
      // Reload the page to get the updated list
      location.reload();
    });
  });

  $(".delete-task").on("click", function(event) {
    var id = $(this).data("id");

    // Send the DELETE request.
    $.ajax("/api/task/" + id, {
      type: "DELETE"
    }).then(function() {
      console.log("deleted task", id);
      // Reload the page to get the updated list
      location.reload();
    });
  });
});
