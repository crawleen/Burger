// Make sure we wait to attach our handlers until the DOM is fully loaded.
$(function() {
    $(".change-devoured").on("click", function(event) {
      var id = $(this).data("id");
      var newDevoured = $(this).data("newdevoured");  
      var newDevouredState = {
        devoured: newDevoured
      };
      // Send the PUT request.
      $.ajax("/api/burgers/" + id, {
        type: "PUT",
        data: newDevouredState
      }).then(
        function() {
          console.log("changed devour to", newDevoured);
          // Reload the page to get the updated list
          location.reload();
        }
      );
    });
  
    $("#submit-button").on("click", function(event) {
      // Make sure to preventDefault on a submit event.
      event.preventDefault();
      var newBurgerName = $("#new_burger").val().trim();
      if(newBurgerName !== ''){
        var newBurger = {
          burger_name: $("#new_burger").val().trim(),
          devoured: false
        };
    
        // Send the POST request.
        $.ajax("/api/burgers", {
          type: "POST",
          data: newBurger
        }).then(
          function() {
            console.log("created new burger");
            // Reload the page to get the updated list
            location.reload();
          }        
        );
      }
      else{
        alert("Please Enter a Burger Name!");
      } 
    });     
  });
  