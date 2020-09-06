class Matrix {

    constructor(elem, cells) {
        this.elem = elem;
        this.cells = cells;
        this.cell = [];
        this.elem.style.display = 'grid';
        this.calcX = this.calcY = Math.sqrt(cells).toFixed();
        let string = '1fr ';
        string = string.repeat(this.calcX);
        string = string.trim();
        this.elem.style.gridTemplateColumns = string;
    }

    create() {
        for (let i = 0; i < this.calcX*this.calcY; i++) {
            let div = document.createElement('div');
            this.elem.appendChild(div);
            this.cell[i] = ''
        }
    }

    getCell(x, y) {
        let num = this._calcNum(x, y);
        return this.elem.children[num].className;
    }

    setCell(x, y, val) {
        let num = this._calcNum(x, y);
        this.cell[num] = val;
        this.elem.children[num].className = val;
    }

    _calcNum (x, y)
    {
        return this.calcX * (y-1) + (x-1);
    }
}