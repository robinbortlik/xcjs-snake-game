
$.position_x = 100
$.position_y = 100
$.step = 16
$.speed = 0.5

function main()
{
    var scene = xc.getCurrentScene();
    var snake = new Array()
    createSnakePoint();
    createSnakePoint();
    createSnakePoint();
    createSnakePoint();
    
    direction = 'right'

    scene.schedule(moveByDirection, 0.3);
    scene.schedule(checkGameEnd, 0.1);
    //scene.schedule(speedUp, 2);

    scene.keyDown = function(key){
        switch (key.key) {
            case 39:
                direction = 'right'
                break;
            case 37:
                direction = 'left'
                break;
            case 38:
                direction = 'up'
                break;
            case 40:
                direction = 'down'
                break;
        }
    };

    xc.addEventListener('keyDown', scene);

    function moveByDirection(){
        moveSnakeBody()
        switch (direction) {
            case "right":
                snakeHead().moveBy($.step,0)
                break;
            case "left":
                snakeHead().moveBy(-$.step,0)
                break;
            case "up":
                snakeHead().moveBy(0,-$.step)
                break;
            case "down":
                snakeHead().moveBy(0,$.step)
                break;
        }
        
    }

    function speedUp(){
        $.step += 10
        
    }

    function checkGameEnd(){
        if ((snakeHead().X() < 0) || (snakeHead().Y() < 0) || (snakeHead().X() > 480) || (snakeHead().Y() > 480))
        {
            scene.pause();
            alert('You lose')
        }

    }

    function createSnakePoint(){
        new_snake_point = new XCSpriteNode('snake_point.png')
        snake[snake.length] = new_snake_point;
        scene.addChild(new_snake_point);
    }

    function snakeHead(){
        return snake[0];
    }

    function moveSnakeBody(){
        var index=snake.length-1;
        for (index=snake.length-1;index>=0;index--)
        {
            if (index > 0) {
                previous_snake_point = snake[index-1];
                snake[index].moveTo(previous_snake_point.X(), previous_snake_point.Y())
            }
        }

    }
}
