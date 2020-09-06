class Element {
    constructor(matrix, coords) {
        this.matrix = matrix;
        this.coords = coords;
        this.value = '';
    }

    show() {
        for (let cord of this.coords)
            this.matrix.setCell(cord[0], cord[1], this.value);
    }
}