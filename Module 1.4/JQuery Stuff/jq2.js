
    $('#colorPickerBtn').spectrum({
        preferredFormat: "hex", // or "rgb", "rgba", etc.
        showInput: true, // show the hex/RGB input
        showPalette: true, // show the color palette
        palette: [
          ["#ff0000", "#ff8000", "#ffff00"],
          ["#00ff00", "#00ffff", "#0000ff"],
          ["#8000ff", "#ff00ff", "#000000"]
        ],
        change: function(color) {
          // Handle color change event
          console.log(color.toHexString()); // or color.toString()

          // Apply the chosen color to the body background
          $('body').css('background-color', color.toHexString());
            
          // Remove other classes if they exist
          $('body').removeClass('gradient-pink gradient-green');
        }
      });
