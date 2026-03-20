// ./gallery/src/Service/Gallery.js

/**
 * Handles a gallery of images with next/previous navigation.
 */
class Gallery {
	/**
	 * @param {number} amount - Total number of pictures in the gallery
	 */
	constructor(amount) {
		this._validateAmount(amount);

		/** @type {number} */
		this.first = 1;

		/** @type {number} */
		this.last = amount;

		/** @type {number} */
		this.current = this.first;
	}

	/**
	 * Returns the path of the current picture.
	 * @returns {string}
	 */
	getPicturePath() {
		return `./src/Images/Rouen_Cathedral_${this.current}.jpg`;
	}

	/**
	 * Moves the current picture by a step and returns the new path.
	 * @param {number} step - Positive for next, negative for previous
	 * @returns {string}
	 * @private
	 */
	_changePicture(step) {
		this.current += step;

		if (this.current > this.last) this.current = this.first;
		if (this.current < this.first) this.current = this.last;

		return this.getPicturePath();
	}

	/**
	 * Moves to the next picture and returns its path.
	 * @returns {string}
	 */
	next() {
		return this._changePicture(1);
	}

	/**
	 * Moves to the previous picture and returns its path.
	 * @returns {string}
	 */
	prev() {
		return this._changePicture(-1);
	}

	/**
	 * Validates that the provided amount is a positive integer.
	 * @param {number} num
	 * @private
	 */
	_validateAmount(num) {
		if (typeof num !== "number" || !Number.isInteger(num)) {
			console.warn("Amount should be an integer.");
			throw new Error("Invalid amount type.");
		}
		if (num < 1) {
			console.warn("Amount should be greater than 0.");
			throw new Error("Invalid amount value.");
		}
	}
}

export default Gallery;
