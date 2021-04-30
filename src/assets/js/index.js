"use strict";

/*

Run the dev server and check to see if the component comes through the index.js. If the checkmark
is there, then everything below, as well as the component.js file.
    
    Happy Programming! 
*/
import { checkComponent } from "./component.js";

checkComponent();

// This is just for the confetti, can be deleted
import confetti from "https://cdn.skypack.dev/canvas-confetti";
confetti({
  particleCount: 250,
  spread: 180,
  startVelocity: 60,
  gravity: 0.2,
  ticks: 1600,
});
