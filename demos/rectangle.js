/**
 * Rectangle class.
 * 
 * This class extends the $.spDrawable class.
 * 
 * @param {jQuery} canvasId Canvas ID
 */
var Rectangle = function (canvas) {
    this._canvas = canvas;
    this._width = 0;
    this._height = 0;
    this.update();
};
Rectangle.prototype = Object.create($.spDrawable.prototype);

/**
 * Draws a rectangle.
 * 
 * This function implements the $.spDrawable::draw() abstract method.
 * 
 * @return {void}
 */
Rectangle.prototype.draw = function () {
    var canvas = this._canvas[0];
    var context = canvas.getContext('2d');
    context.fillStyle = '#ff0000';
    context.fillRect(0, 0, this._width, this._height);
};

/**
 * Sets width.
 * 
 * This function does not call draw() directly. Instead, it calls the update() method.
 * 
 * @param {number} width Rectangle width
 * 
 * @return {void}
 */
Rectangle.prototype.setWidth = function (width) {
    this._width = width;
    // tells the system to draw the object
    this.update();
};

/**
 * Gets width.
 * 
 * @return {number}
 */
Rectangle.prototype.getWidth = function () {
    return this._width;
};

/**
 * Sets height.
 * 
 * This function does not call draw() directly. Instead, it calls the update() method.
 * 
 * @param {number} width Rectangle height
 * 
 * @return {void}
 */
Rectangle.prototype.setHeight = function (height) {
    this._height = height;
    // tells the system to draw the object
    this.update();
};

/**
 * Gets height.
 * 
 * @return {number}
 */
Rectangle.prototype.getHeight = function () {
    return this._height;
};
