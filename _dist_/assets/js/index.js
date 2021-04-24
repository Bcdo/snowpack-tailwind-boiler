"use strict";

// This is just for the confetti, can be deleted
import ConfettiGenerator from "../../../_snowpack/pkg/confetti-js.js";
var confettiSettings = { target: "my-canvas" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
