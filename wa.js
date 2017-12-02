
var flag=true;
function adi(){
    var num="917275493769@c.us";
    var not="918979548970@c.us";
    var text = '{ "arr":[{"stock" :"'+num+'","notify":"'+not+'"},{"stock" :"'+num+'","notify":"'+not+'"}]}';
    var obj = JSON.parse(text);
    console.log(obj.arr[0]);
    var ans;
    var len=Store.Chat.models.length;
    for(var i=0;i<len;i++){
      var n=Store.Chat.models[i].__x_id;
      if(n===num){
        ans=i;
        break;
      }
    }
  
  //console.log(len);
  if(Store.Chat.models[ans].__x_presence.__x_isOnline&&flag){
    console.log(Store.Chat.models[ans].__x_id+" is Online");
    }
  if(Store.Chat.models[ans].__x_presence.__x_isOnline)
    flag=false;
  else
    flag=true;
}
setInterval(adi, 10000);
