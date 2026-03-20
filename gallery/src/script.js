// ./gallery/src/script.js

import Gallery from "./Service/Gallery.js";

const gallery = new Gallery(6);

/**
 * Shows the next picture in the gallery.
 */
function showNext() {
	const picture = document.getElementById("picture");
	picture.src = gallery.next();
}

/**
 * Shows the previous picture in the gallery.
 */
function showPrev() {
	const picture = document.getElementById("picture");
	picture.src = gallery.prev();
}

/**
 * Assigns a click event handler to a button by id.
 * @param {string} id - Button element id
 * @param {Function} action - Function to run on click
 */
function useButton(id, action) {
	const btn = document.getElementById(id);
	if (btn) {
		btn.onclick = action;
	} else {
		console.warn(`Button with id "${id}" not found.`);
	}
}

useButton("next", showNext);
useButton("prev", showPrev);
