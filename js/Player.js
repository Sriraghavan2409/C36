class Player {
  //Add properties of the players inside the constructor

  constructor(){
    this.index=null;
    this.name=null;
    this.distance=0;

  }

  getCount(){
    var playerCountRef = database.ref('playerCount');
    playerCountRef.on("value",function(data){
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
      distance:this.distance
    });
  }
  //Static function is called by the class itself and not the object as it does not involve any particular object
  static getPlayerInfo(){
var playerInfoRef=database.ref('players');
playerInfoRef.on("value",(data)=>{
allPlayers=data.val();

});


  }
}
