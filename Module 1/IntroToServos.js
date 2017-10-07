var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var servo = new five.Servo({pin:11});
  
  servo.sweep();
});

