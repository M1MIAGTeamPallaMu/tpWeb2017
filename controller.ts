import {DnD} from "./interaction";

export class Controller{

    public editingMode : {rect : 0, line : 1};
    private _currentEditingMode: number;
    private _currentLineWidth : string | number;
    private _cursorColour : string;
    private _currentShape : number;
    private DnD: DnD;

    pencil(ctx, drawing, canvas): void{
        this.currentEditingMode = this.editingMode.line;
        this.currentLineWidth = 5;
        this.cursorColour = '#000000';
        this.currentShape = 0;
        this.DnD = new DnD(canvas, this);
    }
    
    onInteractionStart(){
        this.currentLineWidth = document.getElementById('spinnerWidth').nodeValue;
        this.cursorColour = document.getElementById('colour').nodeValue;
    }

    onInteractionUpdate(){

    }

    onInteractionEnd(){

    }

    get currentShape(): number {
        return this._currentShape;
    }

    set currentShape(value: number) {
        this._currentShape = value;
    }
    get cursorColour(): string {
        return this._cursorColour;
    }

    set cursorColour(value: string) {
        this._cursorColour = value;
    }

    get currentEditingMode(): number {
        return this._currentEditingMode;
    }

    set currentEditingMode(value: number) {
        this._currentEditingMode = value;
    }

    get currentLineWidth(): string | number {
        return this._currentLineWidth;
    }

    set currentLineWidth(value: string | number) {
        this._currentLineWidth = value;
    }
}