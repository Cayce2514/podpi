var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var lumina = new five.Sensor('A0');
  var led = new five.Led(3);
  lumina.on('change', function() {
    console.log('light sensed =' + this.value);

    // brightness is 0-255.
    // play with the division value so that max value
    // of light sensed, divided by this number
    // does not exceed 255.
    led.brightness(this.value/4);
  });
});