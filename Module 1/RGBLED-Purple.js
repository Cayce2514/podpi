var five = require("johnny-five");
var board = new five.Board();

// The RGB LED has 4 legs.  The longest leg is the cathode, or "negative."
// The short leg on the end next to the cathode is usually red.
// The two shorter legs to the other side of the cathode are usually blue then
// green.
//
// If the color mix doesn't show correctly, turn each LED on one at a time, then 
// re-name the variables to match the LED.


board.on("ready", function() {
  var red = new five.Led(3);
  var blue = new five.Led(4);
  var green = new five.Led(5);

  red.on();
  blue.on();
  green.off();

});