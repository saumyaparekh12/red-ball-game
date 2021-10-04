var bgImg;
var mazeImg, maze;
var redBallImg, redBall;
var gameState = 1
var nextImg;
var green;
var enemy1, enemy2, enemy3, enemy4, enemy5, enemyImg;
var boxImg

function preload() {
    bgImg = loadImage("bgrb.png");
    playImg = loadImage("play.png")
    mazeImg = loadImage("maze.jpg")
    redBallImg = loadImage("red-ball.png")
    happyRb = loadImage("redballHappy.png")
    nextImg = loadImage("next.png")
    greenImg = loadImage("green.jpg")
    enemyImg = loadImage("enemy.png")
    boxImg=loadImage("box.png")
}

function setup() {
    var canvas = createCanvas(windowWidth, windowHeight - 20);

    bg = createSprite(width / 2, height / 2)
    bg.addImage(bgImg);

    play = createSprite(width / 2 - 150, height - 100)
    play.addImage(playImg);
    play.scale = 0.8;

    maze = createSprite(width / 2, height / 2)
    maze.addImage(mazeImg)
    maze.scale = 0.6;
    maze.visible = false

    redBall = createSprite(386, 654);
    redBall.addImage(redBallImg);
    redBall.scale = 0.12;
    redBall.visible = false;


    edges = createEdgeSprites()

}

function draw() {
    background(0);

    drawSprites()

    textSize(20)
    fill("black")
    text(mouseX + "," + mouseY, mouseX, mouseY)

    if (mousePressedOver(play) && gameState === 1) {
        bg.destroy()
        play.destroy();
        gameState = 2
    }

    else if (gameState === 2) {

        maze.visible = true;
        redBall.visible = true;

        if (keyDown("UP")) {
            redBall.y = redBall.y - 12
        }
        if (keyDown("LEFT")) {
            redBall.x = redBall.x - 12
        }
        if (keyDown("RIGHT")) {
            redBall.x = redBall.x + 12
        }
        if (keyDown("DOWN")) {
            redBall.y = redBall.y + 12
        }

        mazeCreate()

        win = createSprite(1090, 60, 30, 30)
        win.visible = false;

        if (redBall.isTouching(win)) {

            gameState = 3


            //redBall.addImage(happyRb)
            //redBall.scale=1.2
        }


    }

    if (gameState === 3) {

        maze.destroy()
        redBall.visible = false
        win.destroy()

        stroke("white")
        textSize(38)
        textFont("Broadway")
        fill("cyan")
        text("Congratulations!! \n You have won", 620, 200)
        fill("yellow")
        text("Click on this button to go to the NEXT LEVEL!!", 420, height / 2)

        next = createSprite(750, 500, 50, 50)
        next.addImage(nextImg)
        next.scale = 0.4


        maze1.destroy()
        maze2.destroy()
        maze3.destroy()
        maze4.destroy()
        maze5.destroy()
        maze6.destroy()
        maze7.destroy()
        maze8.destroy()
        maze9.destroy()
        maze10.destroy()
        maze11.destroy()
        maze12.destroy()
        maze13.destroy()
        maze14.destroy()
        maze15.destroy()
        maze16.destroy()
        maze17.destroy()
        maze18.destroy()
        maze19.destroy()
        maze20.destroy()
        maze21.destroy()
        maze22.destroy()
        maze23.destroy()
        maze24.destroy()
        maze25.destroy()
        maze26.destroy()
        maze27.destroy()

        if (mousePressedOver(next)) {
            next.destroy()
            gameState = 4;
        }


    }
    if (gameState === 4) {

        //background("green")


        green = createSprite(width / 2, height / 2)
        green.addImage(greenImg)
        green.scale = 1.2
        green.velocityX = -12

        green.depth = next.depth + 1;
        if(green.x < 0){
            green.x = width/2
        }
        createBox();
        RedBall();
        /*
        enemy1=createSprite(250, 60)
        enemy1.addImage(enemyImg);
        enemy1.scale = 0.5
    
        enemy2=createSprite(550, 580)
        enemy2.addImage(enemyImg);
        enemy2.scale = 0.5;
    
        enemy3=createSprite(850, 60)
        enemy3.addImage(enemyImg);
        enemy3.scale = 0.5;
    
        enemy4=createSprite(1150, 580)
        enemy4.addImage(enemyImg);
        enemy4.scale = 0.5;
    
        enemy1.velocityY=-12;
        enemy2.velocityY=12;
        enemy3.velocityY=-12;
        enemy4.velocityY=12;
    
        
        
        enemy1.bounceOff(edges[2]) 
        enemy2.bounceOff(edges[2])
        enemy3.bounceOff(edges[2])
        enemy4.bounceOff(edges[2])
        
        enemy1.bounceOff(invSprite) 
        enemy2.bounceOff(invSprite)
        enemy3.bounceOff(invSprite)
        enemy4.bounceOff(invSprite)
        
        */




    }

}
function createBox() {
    if(frameCount % 60 == 0){
        box=createSprite(width,590,20,20)
        box.addImage(boxImg);
        box.velocityX=-48;
        box.scale=0.4
        box.depth = green.depth + 1

    }
    
}
function RedBall(){
    redBall.depth = green.depth + 1;
    redBall.scale=0.2
    redBall.visible=true;
    redBall.x=100;
    redBall.y=610;
    redBall.rotation=redBall.rotation+15;
    redBall.depth = green.depth + 1;
    
    if(keyDown("space")){
     redBall.velocityY=-20;
    }
    redBall.velocityY=redBall.velocityY +1;
    
    invSprite = createSprite(width / 2, 630, windowWidth, 10)
    redBall.collide(invSprite)
}
function mazeCreate() {

    maze1 = createSprite(409, 300, 30, 650)
    maze2 = createSprite(740, 690, 700, 30)
    maze3 = createSprite(1092, 390, 34, 620)
    maze4 = createSprite(750, 20, 710, 30)
    maze5 = createSprite(460, 615, 100, 34)
    maze6 = createSprite(460, 615, 100, 34)
    maze7 = createSprite(450, 395, 100, 34)
    maze8 = createSprite(530, 242, 250, 32)
    maze9 = createSprite(486, 158, 30, 160)
    maze10 = createSprite(486, 469, 30, 180)
    maze11 = createSprite(639, 529, 30, 290)
    maze12 = createSprite(716, 469, 30, 172)
    maze13 = createSprite(786, 429, 30, 250)
    maze14 = createSprite(1012, 389, 30, 177)
    maze15 = createSprite(713, 239, 30, 172)
    maze16 = createSprite(638, 194, 30, 72)
    maze17 = createSprite(789, 209, 30, 102)
    maze18 = createSprite(1013, 169, 30, 172)
    maze19 = createSprite(863, 279, 30, 92)
    maze20 = createSprite(563, 279, 30, 92)
    maze21 = createSprite(563, 429, 30, 92)
    maze22 = createSprite(563, 579, 30, 92)
    maze23 = createSprite(563, 99, 30, 152)
    maze24 = createSprite(938, 99, 30, 152)
    maze25 = createSprite(785, 69, 30, 62)
    maze26 = createSprite(863, 603, 30, 142)
    maze27 = createSprite(530, 242, 250, 32)
    maze28 = createSprite(520, 542, 80, 32)
    maze29 = createSprite(950, 542, 150, 32)
    maze30 = createSprite(780, 612, 150, 32)
    maze31 = createSprite(760, 540, 80, 32)
    maze32 = createSprite(632, 317, 310, 32)
    maze33 = createSprite(902, 317, 80, 32)
    maze34 = createSprite(902, 167, 100, 32)
    maze35 = createSprite(902, 237, 190, 30)
    maze36 = createSprite(872, 390, 150, 32)
    maze37 = createSprite(899, 470, 190, 32)
    maze38 = createSprite(965, 615, 90, 32)
    maze39 = createSprite(599, 390, 90, 32)
    maze40 = createSprite(749, 97, 250, 32)
    maze41 = createSprite(1059, 90, 90, 32)
    maze42 = createSprite(1009, 590, 30, 82)



    if (redBall.collide(maze1) || redBall.collide(maze2) || redBall.collide(maze3) || redBall.collide(maze4) ||
        redBall.collide(maze5) || redBall.collide(maze6) || redBall.collide(maze7) || redBall.collide(maze8) || redBall.collide(maze9) ||
        redBall.collide(maze10) || redBall.collide(maze11) || redBall.collide(maze12) || redBall.collide(maze13) ||
        redBall.collide(maze14) || redBall.collide(maze15) || redBall.collide(maze16) || redBall.collide(maze17) ||
        redBall.collide(maze18) || redBall.collide(maze19) || redBall.collide(maze20) || redBall.collide(maze21) ||
        redBall.collide(maze22) || redBall.collide(maze23) || redBall.collide(maze24) || redBall.collide(maze25) ||
        redBall.collide(maze26) || redBall.collide(maze27) || redBall.collide(maze28) || redBall.collide(maze29) ||
        redBall.collide(maze30) || redBall.collide(maze31) || redBall.collide(maze32) || redBall.collide(maze33) ||
        redBall.collide(maze34) || redBall.collide(maze35) || redBall.collide(maze36) || redBall.collide(maze37) ||
        redBall.collide(maze38) || redBall.collide(maze39) || redBall.collide(maze40) || redBall.collide(maze41) ||
        redBall.collide(maze42)) {

        fill("black")
        text("hello", 200, 200)
    }
    maze1.visible = false;
    maze2.visible = false;
    maze3.visible = false;
    maze4.visible = false;
    maze5.visible = false;
    maze6.visible = false;
    maze7.visible = false;
    maze8.visible = false;
    maze9.visible = false;
    maze10.visible = false;
    maze11.visible = false;
    maze12.visible = false;
    maze13.visible = false;
    maze14.visible = false;
    maze15.visible = false;
    maze16.visible = false;
    maze17.visible = false;
    maze18.visible = false;
    maze19.visible = false;
    maze20.visible = false;
    maze21.visible = false;
    maze22.visible = false;
    maze23.visible = false;
    maze24.visible = false;
    maze25.visible = false;
    maze26.visible = false;
    maze27.visible = false;
    maze28.visible = false;
    maze29.visible = false;
    maze30.visible = false;
    maze31.visible = false;
    maze32.visible = false;
    maze33.visible = false;
    maze34.visible = false;
    maze35.visible = false;
    maze36.visible = false;
    maze37.visible = false;
    maze38.visible = false;
    maze39.visible = false;
    maze40.visible = false;
    maze41.visible = false;
    maze42.visible = false;


}

