var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":["6d14dcc0-4d08-4288-884f-e38969ffbe85","6477bc21-aebe-42d3-b8ee-4cdb27aa5d28","1763c3d0-ec25-403b-ad0c-129b248d4f43","9b029a00-9572-40d3-9402-49598f767219","5291957e-876e-480c-bc4a-c9838fb0a9ed","0f6ec0ae-1ddc-4665-8ff8-8ded7a89694d","2e9ac539-9569-4553-84c1-732ca5bcc6bb","09286d0b-b134-44ec-b305-84232087eeb7","deed262c-d9f7-4257-808f-34e5ea8c131a","465b20c9-97ea-4ff0-9901-d37d7aa74e12","665777c0-7122-41f0-b630-027733631d63","9ba220ba-c52a-4b06-8a8c-5cdac5d60cef","404db4b4-d1bc-49b1-9337-ef1a5aa76e4a","dd9bfa1e-047a-48d6-a49f-0ce9b937ecc5","77ba22c2-aecb-4253-8833-d05022cf34e7"],"propsByKey":{"6d14dcc0-4d08-4288-884f-e38969ffbe85":{"name":"arrow","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"qsBAmlcT98H3Enz25j9GaNvcqwzSeo2E","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/6d14dcc0-4d08-4288-884f-e38969ffbe85.png"},"6477bc21-aebe-42d3-b8ee-4cdb27aa5d28":{"name":"road","sourceUrl":null,"frameSize":{"x":451,"y":1000},"frameCount":1,"looping":true,"frameDelay":12,"version":"Y5gsxVVD6Vbm5OJZAJ37fpbaNhLR6g_c","loadedFromSource":true,"saved":true,"sourceSize":{"x":451,"y":1000},"rootRelativePath":"assets/6477bc21-aebe-42d3-b8ee-4cdb27aa5d28.png"},"1763c3d0-ec25-403b-ad0c-129b248d4f43":{"name":"forest1","sourceUrl":null,"frameSize":{"x":660,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"Rg.hu.6T8klDhWpAckkgU0xv6CHDhmjP","loadedFromSource":true,"saved":true,"sourceSize":{"x":660,"y":500},"rootRelativePath":"assets/1763c3d0-ec25-403b-ad0c-129b248d4f43.png"},"9b029a00-9572-40d3-9402-49598f767219":{"name":"tygh.JPG_1","sourceUrl":null,"frameSize":{"x":66,"y":152},"frameCount":1,"looping":true,"frameDelay":12,"version":"sYOUxI0qpzQN4W5Zch9.U_dd5DTlMVVa","loadedFromSource":true,"saved":true,"sourceSize":{"x":66,"y":152},"rootRelativePath":"assets/9b029a00-9572-40d3-9402-49598f767219.png"},"5291957e-876e-480c-bc4a-c9838fb0a9ed":{"name":"snow","sourceUrl":null,"frameSize":{"x":463,"y":1000},"frameCount":1,"looping":true,"frameDelay":12,"version":"uEMoFXVMk0Atwfs_GJCMwVQHpuPOzBK0","loadedFromSource":true,"saved":true,"sourceSize":{"x":463,"y":1000},"rootRelativePath":"assets/5291957e-876e-480c-bc4a-c9838fb0a9ed.png"},"0f6ec0ae-1ddc-4665-8ff8-8ded7a89694d":{"name":"forest2","sourceUrl":null,"frameSize":{"x":480,"y":500},"frameCount":1,"looping":true,"frameDelay":12,"version":"yXY7DW7.ziUghS4z4ozGkEK6MR70KQHV","loadedFromSource":true,"saved":true,"sourceSize":{"x":480,"y":500},"rootRelativePath":"assets/0f6ec0ae-1ddc-4665-8ff8-8ded7a89694d.png"},"2e9ac539-9569-4553-84c1-732ca5bcc6bb":{"name":"car.JPG_1","sourceUrl":null,"frameSize":{"x":951,"y":481},"frameCount":1,"looping":true,"frameDelay":12,"version":"KtTDhrGE61TXd3akoj3fXznB16wTbCJS","loadedFromSource":true,"saved":true,"sourceSize":{"x":951,"y":481},"rootRelativePath":"assets/2e9ac539-9569-4553-84c1-732ca5bcc6bb.png"},"09286d0b-b134-44ec-b305-84232087eeb7":{"name":"car","sourceUrl":null,"frameSize":{"x":410,"y":1000},"frameCount":1,"looping":true,"frameDelay":12,"version":"dVdXLoTkwoUJIGWPxEGdX3Om58oouYnM","loadedFromSource":true,"saved":true,"sourceSize":{"x":410,"y":1000},"rootRelativePath":"assets/09286d0b-b134-44ec-b305-84232087eeb7.png"},"deed262c-d9f7-4257-808f-34e5ea8c131a":{"name":"istockphoto-872511934-640x640.jpg_1","sourceUrl":null,"frameSize":{"x":640,"y":360},"frameCount":1,"looping":true,"frameDelay":12,"version":"Us2LT76dMxRhLkBQEMtWp5tWbvRT8jps","loadedFromSource":true,"saved":true,"sourceSize":{"x":640,"y":360},"rootRelativePath":"assets/deed262c-d9f7-4257-808f-34e5ea8c131a.png"},"465b20c9-97ea-4ff0-9901-d37d7aa74e12":{"name":"png-transparent-tornado-cartoon-animation-hurricane-comics-cartoon-twister.png_1","sourceUrl":null,"frameSize":{"x":920,"y":1016},"frameCount":1,"looping":true,"frameDelay":12,"version":"vgZZQH9tZwSB35fgUA7Sa0tvi4JApaaM","loadedFromSource":true,"saved":true,"sourceSize":{"x":920,"y":1016},"rootRelativePath":"assets/465b20c9-97ea-4ff0-9901-d37d7aa74e12.png"},"665777c0-7122-41f0-b630-027733631d63":{"name":"maxresdefault.jpg_1","sourceUrl":"assets/v3/animations/VVOF-sSstkNc_YPTjkjGRmL-XMoTQXmLNuo-KYmJ6mE/665777c0-7122-41f0-b630-027733631d63.png","frameSize":{"x":1280,"y":720},"frameCount":1,"looping":true,"frameDelay":4,"version":"Yk0hIdHzQgoRcMdqkFKD3EfEdiDNdzWY","loadedFromSource":true,"saved":true,"sourceSize":{"x":1280,"y":720},"rootRelativePath":"assets/v3/animations/VVOF-sSstkNc_YPTjkjGRmL-XMoTQXmLNuo-KYmJ6mE/665777c0-7122-41f0-b630-027733631d63.png"},"9ba220ba-c52a-4b06-8a8c-5cdac5d60cef":{"name":"istockphoto-956441848-1024x1024.jpg_1","sourceUrl":null,"frameSize":{"x":139,"y":84},"frameCount":1,"looping":true,"frameDelay":12,"version":"cQl_67C0aEYLHhv_tTdvS_bdDCTI5XLy","loadedFromSource":true,"saved":true,"sourceSize":{"x":139,"y":84},"rootRelativePath":"assets/9ba220ba-c52a-4b06-8a8c-5cdac5d60cef.png"},"404db4b4-d1bc-49b1-9337-ef1a5aa76e4a":{"name":"download.jpg_1","sourceUrl":"assets/v3/animations/VVOF-sSstkNc_YPTjkjGRmL-XMoTQXmLNuo-KYmJ6mE/404db4b4-d1bc-49b1-9337-ef1a5aa76e4a.png","frameSize":{"x":51,"y":90},"frameCount":1,"looping":true,"frameDelay":4,"version":"YbeZsTN0DbvKGc.GALqirlwbsYx3Lzgt","loadedFromSource":true,"saved":true,"sourceSize":{"x":51,"y":90},"rootRelativePath":"assets/v3/animations/VVOF-sSstkNc_YPTjkjGRmL-XMoTQXmLNuo-KYmJ6mE/404db4b4-d1bc-49b1-9337-ef1a5aa76e4a.png"},"dd9bfa1e-047a-48d6-a49f-0ce9b937ecc5":{"sourceSize":{"x":75,"y":64},"frameSize":{"x":75,"y":64},"frameCount":1,"frameDelay":4,"name":"restart","sourceUrl":"assets/v3/animations/VVOF-sSstkNc_YPTjkjGRmL-XMoTQXmLNuo-KYmJ6mE/dd9bfa1e-047a-48d6-a49f-0ce9b937ecc5.png","size":525,"version":"2TJTTjy7yTfy347nHMGoJgmnHT7OkeBG","looping":true,"loadedFromSource":true,"saved":true,"rootRelativePath":"assets/v3/animations/VVOF-sSstkNc_YPTjkjGRmL-XMoTQXmLNuo-KYmJ6mE/dd9bfa1e-047a-48d6-a49f-0ce9b937ecc5.png"},"77ba22c2-aecb-4253-8833-d05022cf34e7":{"name":"gameOver","sourceUrl":null,"frameSize":{"x":100,"y":100},"frameCount":1,"looping":true,"frameDelay":12,"version":"ZATbH9LTIZFOBHKt_zMEYViNHp5TFsqD","loadedFromSource":true,"saved":true,"sourceSize":{"x":100,"y":100},"rootRelativePath":"assets/77ba22c2-aecb-4253-8833-d05022cf34e7.png"}}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

var PLAY = 1;
var END = 0;
var gameState = PLAY;

var bgimg = createSprite(200,200,400,400);
bgimg.velocityY=2;
bgimg.y=bgimg.height/2;
bgimg.setAnimation("road");
bgimg.scale=3;

var gameOver = createSprite(200,300);
var restart = createSprite(200,340);
gameOver.setAnimation("gameOver");
gameOver.scale = 0.5;
restart.setAnimation("restart");
restart.scale = 0.5;
gameOver.visible = false;
restart.visible = false;




//player
var player = createSprite(200,280,10,10);
player.setAnimation("car");
player.scale =0.15;
//score
textSize(18);
textFont("Georgia");
textStyle(BOLD);
var count = 0;
//lifes
var lifes = 3;
//arrow group
var arrowgroup = createGroup();
var ObstaclesGroup = createGroup();
var Target =createGroup();
function draw() {
  
  if(gameState === PLAY){
    text("lifes left"+lifes,250,150)
    bgimg.velocityY = -(6 + 3*count/100);
     text("Score: "+ count, 250, 100);
  console.log(gameState);

    count = count + Math.round( World.frameRate/60);
     if (keyDown("RIGHT")){
   player.x=player.x+1
 }  
 if (keyDown("LEFT")){
   player.x=player.x-1
 }  
    createArrow();
   var select_bg=randomNumber(1,3);
  if (World.frameCount % 1000 === 0){
    if (select_bg == 1){
      forest();
    } else if (select_bg == 2){
      forest2();
    } else if(select_bg == 3){
      snow();
    } 
  }
    var select_storm=randomNumber(1,3);
   if (World.frameCount % 800 === 0){
    if (select_storm == 1){
      storm();
    } else if (select_bg == 2){
      storm2();
    } else if(select_bg == 3){
      storm3();
    } 
  }
  
    
   
    
     //jump when the space key is pressed
     if(bgimg.y<400){
    bgimg.y=bgimg.height/2;
  }
  
    //add gravity
    
    
    //spawn the clouds
    
  
    //spawn obstacles
    spawnObstacles();
    
    //End the game when trex is touching the obstacle
    if(ObstaclesGroup.isTouching(player)){
      
      lifes= lifes-1;
    }
    if (lifes === 0 ){
      gamestate = END;
    }
  }
  
  else if(gameState === END) {
    gameOver.visible = true;
    restart.visible = true;
    
    //set velcity of each game object to 0
    bgimg.velocityY = 0;
  
    ObstaclesGroup.setVelocityYEach(0);
    
    
    //change the trex animation
    
    
    //set lifetime of the game objects so that they are never destroyed
    ObstaclesGroup.setLifetimeEach(-1);
    
    
  }
  
  if(mousePressedOver(restart)) {
    reset();
  }-
  
  
        drawSprites();
}
  function createarrow(){
  var arrow = createSprite(350,player.y,10,10);
arrow.setAnimation("arrow");
arrow.velocityY=4;
arrow.lifetime=100;
arrowgroup.add(arrow);
}

function forest(){
  bgimg.setAnimation("forest1");
  bgimg.scale=1.5;
 
  }
 

function forest2(){
  bgimg.setAnimation("forest2");
   bgimg.scale=1.75;
 
}
  function snow(){
    bgimg.setAnimation("snow")
     bgimg.scale=1.5;
  
  }
  
   function storm(){
  bgimg.setAnimation("istockphoto-872511934-640x640.jpg_1");
  bgimg.scale=1.5;
 
  }
 

function storm2(){
  bgimg.setAnimation("png-transparent-tornado-cartoon-animation-hurricane-comics-cartoon-twister.png_1");
   bgimg.scale=0.25;
 
}
  function storm3(){
    bgimg.setAnimation("maxresdefault.jpg_1")
     bgimg.scale=1.5;
  
  }
function spawnObstacles() {
  if(World.frameCount % 60 === 0) {
    var obstacle = createSprite(200,0,10,10);
    obstacle.velocityY = (6 + 3*count/100);
    obstacle.setAnimation("download.jpg_1");
    //generate random obstacles
    
    
    //assign scale and lifetime to the obstacle           
    obstacle.scale = 0.5;
    obstacle.lifetime = 70;
    //add each obstacle to the group
    ObstaclesGroup.add(obstacle);
  }
}

// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
