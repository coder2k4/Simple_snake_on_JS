class Snake extends Element {
    constructor(matrix, coords, course) {
        super(matrix, coords);
        this.value = 'snake';
        this.course = course;
        this.alive = true;
    }

    move() {
        if (this.alive) {
            //let head = this.coords.slice(-1); //Координаты последнего элемента (головы змеи)
            let head = [...this.coords[this.coords.length - 1]]; //Координаты последнего элемента (головы змеи)
            switch (this.course) {
                case 'right':
                    if (head[0] < this.matrix.calcX) head[0]++;
                    else head[0] = 1;
                    break;
                case 'left':
                    if (head[0] > 1) head[0]--;
                    else head[0] = this.matrix.calcX;
                    break;
                case 'up':
                    if (head[1] > 1) head[1]--;
                    else head[1] = this.matrix.calcY;
                    break;
                case 'down':
                    if (head[1] < this.matrix.calcY) head[1]++;
                    else head[1] = 1;
                    break;
            }
            this._checkAlive(head); //todo врезание
            this.matrix.setCell(head[0], head[1], 'snake');
            this.coords.push(head); // Закидываем новую голову в конец массива
        }
    }



    setCourse(course) {
        this.course = course;
        this.move();
    }

    /**
     * Проверям змею на врезания
     * @param head
     * @private
     */
    _checkAlive(head) {
        let cell = this.matrix.getCell(head[0], head[1]);
        switch (cell) {
            case 'apple' :
                break;
            case 'wall' :
                alert('You DIE');
                this.alive = false;
                break;
            case 'snake' :
                let index = this.coords.findIndex(element => element[0] == head[0] && element[1] == head[1])
                if (index != -1) // Если мы нашли элемент
                {
                    for (let i = 0; i <= index + 1; i++)
                        this.matrix.setCell(this.coords[i][0], this.coords[i][1], ''); //зачищаем ячейки от остатков змеи
                    this.coords = this.coords.slice(index + 1);
                }
            default:
                this.matrix.setCell(this.coords[0][0], this.coords[0][1], ''); // Очищаем хвост
                this.coords.shift(); //Выкидываем хвост
        }
    }


}