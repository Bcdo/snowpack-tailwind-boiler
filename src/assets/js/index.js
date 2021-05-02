"use strict";

/*

Run the dev server and check to see if the component comes through the index.js. If the checkmark
is there, then delete everything below, as well as the component.js file.
    
    Happy Programming! 
*/
import { checkComponent } from "./component.js";

checkComponent();

import confetti from "https://cdn.skypack.dev/pin/canvas-confetti@v1.4.0-RXPmBgwlGaqEvCqvGmjX/mode=imports,min/optimized/canvas-confetti.js";
confetti({
  particleCount: 250,
  spread: 180,
  startVelocity: 60,
  gravity: 0.2,
  ticks: 1600,
});
