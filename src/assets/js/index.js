"use strict";

/*

Run the dev server and check to see if the component comes through the index.js. If the checkmark
is there, then everything in this file can be deleted, as well as the component.js file.
    
    Happy designing!
*/
import { checkComponent } from "./component.js";

checkComponent();

// This is just for the confetti, can be deleted
import ConfettiGenerator from "confetti-js";
var confettiSettings = { target: "canvas" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
