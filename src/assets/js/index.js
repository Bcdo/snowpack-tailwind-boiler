"use strict";

/*
    "Hello world" should show in console. If it does, 
    everything is connected and anything underneath this
    comment can be deleted, as well as hello-world.js 
    
    Happy designing!
*/
import { helloWorld } from "./hello-world.js";

helloWorld();

// This is just for the confetti, can be deleted
import ConfettiGenerator from "confetti-js";
var confettiSettings = { target: "canvas" };
var confetti = new ConfettiGenerator(confettiSettings);
confetti.render();
