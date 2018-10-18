$(document).ready(function(){
  var height = parseInt(prompt("What is your height in inches?"));

  if (height < 36) {
    $("li.short").addClass("highlight");
    // $(".short-rides").show();
  } else if (height >= 36 && height <= 60){
    $("li.tall").addClass("highlight");
    // $(".tall-rides").show();
  } else if (height > 60) {
    $("li.too-tall").addClass("highlight");
    alert("You're too tall to ride the ride");
  }

});
