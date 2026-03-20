import BoxMover from "./Service/BoxMover.js";

const box = document.getElementById("box");
const container = document.getElementById("container");

const mover = new BoxMover(box, container);

mover.start();
