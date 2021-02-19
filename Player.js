class Player {
    constructor(){
      this.index = null;
      this.distance = 0;
      this.name = null;
      this.rank = null;
      this.x = 400;
      this.y = 400;
    }
  
    getCount(){
      var playerCountRef = database.ref('playerCount');
      playerCountRef.on("value",(data)=>{
        playerCount = data.val();
      })
    }
  
    updateCount(count){
      database.ref('/').update({
        playerCount: count
      });
    }
  
    update(){
      var playerIndex = "players/player" + this.index;
      database.ref(playerIndex).set({
        name:this.name,
        distance:this.distance,
        x:this.x,
        y:this.y
  
  
      });
    }

//     getcarsatend(){
//       var carsatend = database.ref("carsatend");
//       carsatend.on("value",(data)=>{
//         this.rank = data.val();
//         console.log(this.rank);   
//        });
//     }
  
//    static  updatecarsatend(rank){
//     database.ref('/').update({
//       carsatend: rank
//     });
//     }
  
    static getPlayerInfo(){
      var playerInfoRef = database.ref('players');
      playerInfoRef.on("value",(data)=>{
        allPlayers = data.val();
      })
    }
  }
  