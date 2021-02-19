class Game {
    constructor(){
  
    }
  
    getState(){
      var gameStateRef  = database.ref('gameState');
      gameStateRef.on("value",function(data){
         gameState = data.val();
      })
  
    }
  
    update(state){
      database.ref('/').update({
        gameState: state
      });
    }
  
    start(){
      if(gameState === 0){
        player = new Player();
        player.x+=100;
        player.y+=50;
        player.update();
        player.getCount();
        form = new Form()
        form.display();
  
      }
  
      Hulk= createSprite(100,400);
      IronMan = createSprite(200,350);
      Thor = createSprite(300,300);
      CaptainAmerica = createSprite(400,250);
      Thanos= createSprite(1200,300);
      marvel= [Thor, IronMan, CaptainAmerica, Hulk,Thanos];
    //   Thor.addImage(ThorImage);
    //   IronMan.addImage(IronManImage);
    //   CaptainAmerica.addImage(CaptainAmericaImage);
    //   Hulk.addImage(HulkImage);
    //   Thanos.addImage(ThanosImage);
       
  
    //   Thanos.scale = 0.3;
    //   Hulk.scale = 0.3;
    //   IronMan.scale =0.2;
    //   CaptainAmerica.scale=0.3;
    //   Thor.scale= 0.3;
    //   MB.scale=0.3;
    }
  
    
  
    play(){
      form.hide();
  
      Player.getPlayerInfo();
  
      // player.getcarsatend();
    
      
      if(allPlayers !== undefined){
        //var display_position = 100;
        
        background("brown");
  
  imageMode(CENTER);
        // image(MBimage,displayWidth/2,displayHeight/2,displayWidth,displayHeight);
      
        var index = 0;
        for(var plr in allPlayers){
          //add 1 to the index for every loop
           index = index + 1 ;
           marvel[index-1].x=allPlayers[plr].x;
           marvel[index-1].y=allPlayers[plr].y;
        }
  
      }
  
      if(keyIsDown(UP_ARROW) && player.index !== null){
        player.y-=5;
        player.update()
      }
      if(keyIsDown(RIGHT_ARROW) && player.index !== null){
        player.x+=5;
        player.update()
      }

        if(keyIsDown(LEFT_ARROW) && player.index !== null){
        player.x -=5;
        player.update()
      }

      if(keyIsDown(DOWN_ARROW) && player.index !== null){
        player.y +=5;
        player.update()
      }
  
  
  // if(player.distance>3860){
  //   gameState=2;
  //   player.rank++ 
  //   console.log(player.rank);
  //   Player.updatecarsatend(player.rank);
  // }
  
      drawSprites();
    }
  
    end(){
      // console.log(player.rank);
      console.log("gameover");
    }
  }
  