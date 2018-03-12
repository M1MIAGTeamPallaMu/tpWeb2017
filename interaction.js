"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var DnD = /** @class */ (function () {
    function DnD(canvas, interactor) {
        this.canvas = canvas;
        this.interactor = interactor;
    }
    DnD.prototype.initCoordinates = function () {
        this.xInit = 0;
        this.yInit = 0;
        this.xFinal = 0;
        this.yFinal = 0;
    };
    DnD.prototype.select = function (evt) {
        this.xInit = DnD.getMousePosition(this.canvas, evt).newX;
        this.yInit = DnD.getMousePosition(this.canvas, evt).newY;
        this.pressed = true;
    };
    DnD.prototype.move = function (evt) {
        if (this._pressed) {
            this._xFinal = DnD.getMousePosition(this.canvas, evt).newX;
            this._yFinal = DnD.getMousePosition(this.canvas, evt).newY;
        }
    };
    DnD.prototype.release = function (evt) {
        this.xFinal = DnD.getMousePosition(this.canvas, evt).newX;
        this.yFinal = DnD.getMousePosition(this.canvas, evt).newY;
        this.pressed = false;
    };
    DnD.getMousePosition = function (canvas, evt) {
        var rect = canvas.getBoundingClientRect();
        return {
            newX: evt.x - rect.left,
            newY: evt.y - rect.top
        };
    };
    Object.defineProperty(DnD.prototype, "yFinal", {
        get: function () {
            return this._yFinal;
        },
        set: function (value) {
            this._yFinal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnD.prototype, "xFinal", {
        get: function () {
            return this._xFinal;
        },
        set: function (value) {
            this._xFinal = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnD.prototype, "yInit", {
        get: function () {
            return this._yInit;
        },
        set: function (value) {
            this._yInit = value;
        },
        enumerable: true,
        configurable: true
    });
    Object.defineProperty(DnD.prototype, "xInit", {
        get: function () {
            return this._xInit;
        },
        set: function (value) {
            this._xInit = value;
        },
        enumerable: true,
        configurable: true
    });
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
