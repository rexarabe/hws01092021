/*
class RangeValidator {
    constructor(from, to){
        this._from = from; // from - приватное свойство
        this._to = to; // tо приватное свойство
    }
    set to(value){
        this._to = value;
    }
    get to() {
        return this._to;
    }
    set from(value){
        this._from =  value;
    }
    get from() {
        return this._from;
    }
    // находится ли число num в диапазоне от from до to
    validate(num){
        if (num < this._to && num >= this._from) {
            return true;
        }
        return false;
    }
}

const t = new RangeValidator(0,10);
t.validate(4);

 */

class RangeValidator {
    constructor(from = -Infinity, to = +Infinity){
        if(typeof from !== 'number' || isNaN(from) || typeof to !=='number' || isNaN(to)){
            throw new TypeError('Your value should be a number except NaN');
        }
        if (from> to){
            throw new RangeError('TO-value should be more than FROM=value');
        }
        this._from = from; // from - приватное свойство
        this._to = to; // tо приватное свойство
    }
    set to(value){
        if(typeof value !=='number' || isNaN(value)){
            throw new TypeError('Your value should be a number except NaN');
        }
        if(typeof value !==)
        this._to = value;
    }
    get to() {
        return this._to;
    }
    set from(value){
        this._from =  value;
    }
    get from() {
        return this._from;
    }
    // находится ли число num в диапазоне от from до to
    validate(num){
        if (num < this._to && num >= this._from) {
            return true;
        }
        return false;
    }
}

const t = new RangeValidator(0,10);
t.validate(4);
