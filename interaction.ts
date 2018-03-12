export class DnD{
    private _canvas;
    private _interactor;
    public xInit : number;
    public yInit : number;
    public xFinal : number;
    public yFinal : number;
    private _pressed : boolean;

    constructor (canvas, interactor?) {
        this._canvas = canvas;
        this._interactor = interactor;
    }
    initCoordinates() : void {
        this.xInit = 0;
        this.yInit = 0;
        this.xFinal = 0;
        this.yFinal = 0;
    }

    select(evt : {x, y}) : void {
        this.xInit = DnD.getMousePosition(this._canvas, evt).x;
        this.yInit = DnD.getMousePosition(this._canvas, evt).y;
        this._pressed = true;
    }

    move(evt : {x, y}) : void {
        if(this._pressed){
            this.xFinal = DnD.getMousePosition(this._canvas, evt).x;
            this.yFinal = DnD.getMousePosition(this._canvas, evt).y;
        }
    }

    release(evt : {x, y}) : void {
        this.xFinal = DnD.getMousePosition(this._canvas, evt).x;
        this.yFinal = DnD.getMousePosition(this._canvas, evt).y;
        this._pressed = false;
    }

    public static getMousePosition(canvas, evt: {x, y}){
        let rect = canvas.getBoundingClientRect();
        return {
            x : evt.x - rect.left,
            y : evt.y - rect.top
        }
    }

    get canvas() {
        return this._canvas;
    }

    set canvas(value) {
        this._canvas = value;
    }

    get interactor() {
        return this._interactor;
    }

    set interactor(value) {
        this._interactor = value;
    }

    get pressed(): boolean {
        return this._pressed;
    }

    set pressed(value: boolean) {
        this._pressed = value;
    }

}