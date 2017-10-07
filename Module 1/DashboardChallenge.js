var five = require('johnny-five');
var board = five.Board();

board.on("ready", function() {
  var server = new five.Servo({pin:11});
  var light = new five.Sensor("A0");
  
  light.on("change", function() {
    brightness = Math.floor(Math.abs(180-(this.value/6)));
    console.log(Math.floor(100*((180-brightness)/180)));
    server.to(brightness);
  });
});