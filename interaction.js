"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DnD = /** @class */ (function () {
    function DnD(canvas, interactor) {
        this._canvas = canvas;
        this._interactor = interactor;
    }
    DnD.prototype.initCoordinates = function () {
        this.xInit = 0;
        this.yInit = 0;
        this.xFinal = 0;
        this.yFinal = 0;
    };
    DnD.prototype.select = function (evt) {
        this.xInit = DnD.getMousePosition(this._canvas, evt).x;
        this.yInit = DnD.getMousePosition(this._canvas, evt).y;
        this._pressed = true;
    };
    DnD.prototype.move = function (evt) {
        if (this._pressed) {
            this.xFinal = DnD.getMousePosition(this._canvas, evt).x;
            this.yFinal = DnD.getMousePosition(this._canvas, evt).y;
        }
    };
    DnD.prototype.release = function (evt) {
        this.xFinal = DnD.getMousePosition(this._canvas, evt).x;
        this.yFinal = DnD.getMousePosition(this._canvas, evt).y;
        this._pressed = false;
    };
    DnD.getMousePosition = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            x: evt.x - rect.left,
            y: evt.y - rect.top
        };
    };
    Object.defineProperty(DnD.prototype, "canvas", {
        get: function () {
            return this._canvas;
        },
        set: function (value) {
            this._canvas = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnD.prototype, "interactor", {
        get: function () {
            return this._interactor;
        },
        set: function (value) {
            this._interactor = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnD.prototype, "pressed", {
        get: function () {
            return this._pressed;
        },
        set: function (value) {
            this._pressed = value;
        },
        enumerable: true,
        configurable: true
    });
    return DnD;
}());
exports.DnD = DnD;
//# sourceMappingURL=interaction.js.map