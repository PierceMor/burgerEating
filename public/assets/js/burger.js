$(function(){

  $(".change-devoured").on("click",function(event){
      var id = $(this).data("id");
      
      // send the PUT REQUEST 
      $.ajax("/api/burger/" + id, {
          type: "PUT",
          data: id
        }).then(
          function() {
            location.reload();

          }
        );
  });///change-devoured

  $(".create-burger").on("click",function (event){
    event.preventDefault();

   var name = $("input#ca").val().trim();
   var devoured = 0;
   var newBurger = {
     name, 
     devoured
   };
    // send the fucking post request
    $.ajax("/api/burger", {
        type: "POST",
        data: newBurger
      }).then(
        function() {
          location.reload();
        }
      );
  }); // create form

  $(".delete-burger").on("click", function(event){
      var id = $(this).data("id");

      $.ajax("/api/burger/" + id, {
        type: "DELETE",
      }).then(
        function() {
          console.log("deleted BURGER", id);
          location.reload();
        }
      );
  }); // delete-burgers
}); // beginning

