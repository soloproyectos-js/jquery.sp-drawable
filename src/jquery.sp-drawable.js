/**
 * jQuery.spDrawable - The base class for any drawable object.
 *
 * This plugin requires: 
 *      1. jQuery ~2.0
 *
 * @author  Gonzalo Chumillas <gchumillas@email.com>
 * @license https://github.com/soloproyectos-js/jquery.sp-drawable/blob/master/LICENSE MIT License
 * @link    https://github.com/soloproyectos-js/jquery.sp-drawable
 */
(function ($) {
    /**
     * Drawable class.
     * 
     * Example:
     * ```JavaScript
     * // Rectangle extends $.spDrawable
     * var Rectangle = function (width, height) {
     *     this._width = width;
     *     this._height = height;
     *     this.update();
     * };
     * Rectangle.prototype = Object.create($.spDrawable.prototype);
     * 
     * // implements $.spDrawable::draw()
     * Rectangle.prototype.draw = function () {
     *     console.log('Draw a rectangle of ' + this._width + 'x' + this._height + ' pixels');
     * };
     * 
     * // width property
     * Rectangle.prototype.setWidth = function (width) {
     *     this._width = width;
     *     // tells the system to draw the object
     *     this.update();
     * };
     * Rectangle.prototype.getWidth = function () {
     *     return this._width;
     * };
     * 
     * // height property
     * Rectangle.prototype.setHeight = function (height) {
     *     this._height = height;
     *     // tells the system to draw the object
     *     this.update();
     * };
     * Rectangle.prototype.getHeight = function () {
     *     return this._height;
     * };
     * 
     * // Even though update() has been called several times,
     * // the draw() function is called only once
     * var r = new Rectangle();
     * r.setWidth(320);
     * r.setHeight(240);
     * ```
     */
    $.spDrawable = function () {
        // No-Op
    };
    
    /**
     * Requests ID. (referencia estática)
     * @var {number|null}
     */
    $.spDrawable.prototype._requestId = null;
    
    /**
     * Requests the system to draw the object.
     * 
     * Even though this function can be called several times, the draw() function is not necessarily
     * called more than once.
     * 
     * @return {void}
     */
    $.spDrawable.prototype.update = function () {
        var self = this;
        
        if (this._requestId === null) {
            this._requestId = window.requestAnimationFrame(function () {
                window.cancelAnimationFrame(self._requestId);
                self._requestId = null;
                self.draw();
            });
        }
    };
    
    /**
     * Draws the object.
     * 
     * You should avoid to use draw() directly. Instead, use update().
     * 
     * @abstract
     * @return {void}
     */
    $.spDrawable.prototype.draw = function () {
        // No-Op
    };
})(jQuery);
