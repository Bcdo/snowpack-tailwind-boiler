"use strict";

// This is just for the confetti, can be deleted
import { helloWorld } from "./hello-world.js";
import confetti from "canvas-confetti";

helloWorld();

confetti.create(document.getElementById("canvas"), {
  resize: true,
  useWorker: true,
})({ particleCount: 200, spread: 200 });
