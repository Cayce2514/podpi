var five = require("johnny-five");
var board = new five.Board();

board.on("ready", function() {
  var red = new five.Led(2);
  var green = new five.Led(3);
  var blue = new five.Led(4);
  var button = new five.Button('A0');
  var counter = 1;
  
  button.on('press', function() {
    counter++;
    console.log('The Counter value is: %d', counter);
    switch ( counter ) {
      case 2:
        red.on();
        green.off();
        blue.off();
        break;
      case 3:
        red.off();
        green.on();
        blue.off();
        break;
      case 4:
        red.off();
        green.off();
        blue.on();
        counter = 1;
        break;
    }
  });
});