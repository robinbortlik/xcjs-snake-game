
$.position_x = 100
$.position_y = 100
$.speed = 5

function main()
{
    var scene = xc.getCurrentScene();
    snake_point = new XCSpriteNode('snake_point.png');
    direction = 'right'
    scene.addChild(snake_point);
    snake_point.moveTo($.position_x, $.position_y);

    scene.schedule(moveByDirection, 0.1);
    scene.schedule(checkGameEnd, 0.1);
    scene.schedule(speedUp, 10);

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
        switch (direction) {
            case "right":
                snake_point.moveBy($.speed,0)
                break;
            case "left":
                snake_point.moveBy(-$.speed,0)
                break;
            case "up":
                snake_point.moveBy(0,-$.speed)
                break;
            case "down":
                snake_point.moveBy(0,$.speed)
                break;
        }
    }

    function speedUp(){
        $.speed += 1
    }

    function checkGameEnd(){
        if ((snake_point.X() < 0) || (snake_point.Y() < 0) || (snake_point.X() > 480) || (snake_point.Y() > 480))
        {
            scene.pause();
            alert('Lose')
        }

    }
    
}
