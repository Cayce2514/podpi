var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var led = new five.Led(2);
  var button = new five.Button('A0');
  var count = 0;
  
  button.on('press', function() {
    led.on();
    console.log('LED is on!');
    count += 1;
    console.log("You've pressed the button %d times!", count);
  });
    button.on('release', function() {
    led.off();
    console.log('LED is off!');
  });
});