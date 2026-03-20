// ./animation/src/Service/BoxMover.js

/**
 * Handles movement of an element inside a container.
 */
class BoxMover {
	/**
	 * @param {HTMLElement} box - Moving element
	 * @param {HTMLElement} container - Boundary container
	 * @param {number} [step=1] - Movement step
	 * @param {number} [interval=15] - Interval in ms
	 */
	constructor(box, container, step = 1, interval = 15) {
		this._validateElements(box, container);

		/** @type {HTMLElement} */
		this.box = box;

		/** @type {HTMLElement} */
		this.container = container;

		/** @type {number} */
		this.step = step;

		/** @type {number} */
		this.intervalTime = interval;

		/** @type {number} */
		this.pos = 0;

		/** @type {number} */
		this.direction = -1;

		/** @type {number} */
		this.limit = null;

		/** @type {number|null} */
		this.intervalId = null;
	}

	/**
	 * Starts the movement.
	 */
	start() {
		if (this.intervalId) return;
		this.intervalId = setInterval(() => this._move(), this.intervalTime);
	}

	/**
	 * Stops the movement.
	 */
	stop() {
		if (!this.intervalId) return;
		clearInterval(this.intervalId);
		this.intervalId = null;
	}

	/**
	 * Main movement logic.
	 * @private
	 */
	_move() {
		this.limit = this._calculateLimit();
		if (this.pos >= this.limit || this.pos <= 0) {
			this.direction *= -1;
		}

		this.pos += this.step * this.direction;
		this._updatePosition();
	}

	/**
	 * Updates element position in DOM.
	 * @private
	 */
	_updatePosition() {
		const value = this._toPx(this.pos);
		this.box.style.top = value;
		this.box.style.left = value;
	}

	/**
	 * Converts number to px string.
	 * @param {number} value
	 * @returns {string}
	 * @private
	 */
	_toPx(value) {
		return `${value}px`;
	}

	/**
	 * Calculates movement boundary.
	 * @returns {number}
	 * @private
	 */
	_calculateLimit() {
		return this.container.clientWidth - this.box.clientWidth;
	}

	/**
	 * Validates DOM elements.
	 * @param {HTMLElement} box
	 * @param {HTMLElement} container
	 * @private
	 */
	_validateElements(box, container) {
		if (!(box instanceof HTMLElement)) {
			throw new Error("Box must be a valid HTMLElement.");
		}

		if (!(container instanceof HTMLElement)) {
			throw new Error("Container must be a valid HTMLElement.");
		}
	}
}

export default BoxMover;
