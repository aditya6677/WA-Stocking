
var flag=true;
function adi(){
    var num="917275493769@c.us";
    var not="918979548970@c.us";
    var text = '{ "arr":[{"stock" :"'+num+'","notify":"'+not+'"}]}';
    var obj = JSON.parse(text);
    var jsonlen=obj.arr.length;
    for(var js=0;js<jsonlen;js++){
      var nn=obj.arr[js].stock;
      var ss=obj.arr[js].notify;
      var ans1;
      var ans2;
      var len=Store.Chat.models.length;
      var bool1=false;
      var bool2=false;
      for(var i=0;i<len;i++){
        var n=Store.Chat.models[i].__x_id;
        if(n===nn){
          ans1=i;
          bool1=true;
          break;
        }
      }
      if(!bool1){
        Store.Chat.gadd(nn);
        ans1=len;
      }

      for(var i=0;i<len;i++){
        var n=Store.Chat.models[i].__x_id;
        if(n===ss){
          ans2=i;
          bool2=true;
          break;
        }
      }

      if(!bool2){
        Store.Chat.gadd(ss);
        ans2=len;
      }

    
    if(Store.Chat.models[ans1].__x_presence.__x_isOnline&&flag){
      console.log(Store.Chat.models[ans1].__x_id+" is Online");
      Store.Chat.models[ans2].sendMessage(nn+" is Online");

      }
    if(Store.Chat.models[ans1].__x_presence.__x_isOnline)
      flag=false;
    else
      flag=true;
    }

}
setInterval(adi, 10000);
