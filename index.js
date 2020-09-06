window.onload = function (e) {
    let div = document.querySelector('.fields');
    let matrix = new Matrix(div,200);
    matrix.create();

    (new Apple(matrix,[[6,6]])).show();
    (new Wall(matrix, [[3,9],[4,9],[5,9]])).show();
    let snake = new Snake(matrix, [[3,5],[4,5],[5,5]]);
    snake.show();


    this.addEventListener('keydown', function (e) {
        if(e.which === 37)
            snake.setCourse('left');
        if(e.which === 39)
            snake.setCourse('right');
        if(e.which === 38)
            snake.setCourse('up');
        if(e.which === 40)
            snake.setCourse('down');
    })
};