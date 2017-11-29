function adi(){
    var len=Store.Chat.models.length;
    var num="917275493769@c.us";
    var ans;
    var flag=false;
    for(var i=0;i<len;i++){
      var n=Store.Chat.models[i].__x_id;
      if(n===num){
        ans=i;
        break;
      }
    }
  //console.log(len);
  if(Store.Chat.models[ans].__x_presence.__x_isOnline&&!flag){
    console.log(Store.Chat.models[ans].__x_id+" is Online");
    flag=false;
  }
  if(!Store.Chat.models[ans].__x_presence.__x_isOnline){
    flag=true;
  }
}
setInterval(adi, 10000);
