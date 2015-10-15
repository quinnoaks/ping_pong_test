$(document).ready(function() {

  $(".button").submit(function(event) {
    var number = prompt("What is your number?");

    for (var index = 0; index < number; index += 1) {
      if (index % 3 === 0) {
        $(".output ul").text("ping");
      } else if (index % 5 === 0) {
        $(".output ul").text("pong");
      } else {
        $(".output ul").text(index);
      }
    }

    event.preventDefault();
  });
});
