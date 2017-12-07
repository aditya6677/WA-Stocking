var flag=true;
var dp="hehe";
var cry=[];
var num="917275493769@c.us";
var not="918979548970@c.us";
var text = '{ "arr":[{"stock" :"'+num+'","notify":"'+not+'"}]}'; //json url
var obj = JSON.parse(text);

//TODO JSON Update Function

function adi(){
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
        ans1=Store.Chat.models.length-1;
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
        ans2=Store.Chat.models.length-1;
      }

    
    if(Store.Chat.models[ans1].__x_presence.__x_isOnline&&flag){
      console.log(Store.Chat.models[ans1].__x_id+" is Online "+Store.Chat.models[ans2].__x_id+" is Stocking");
      Store.Chat.models[ans2].sendMessage(nn+" is Online");
      cry=[];
      for(var j=0;j<Store.Chat.models.length;j++){
        var n=Store.Chat.models[j].__x_id;
        if(n===ss){
          ans2=j;
          break;
        }
      }
    }

    else if(cry.indexOf(Store.Chat.models[ans1].__x_id)>=0&&!Store.Chat.models[ans1].__x_presence.__x_isOnline){
      console.log(nn+" Checked WhatsApp in last 2 Minute");
      Store.Chat.models[ans2].sendMessage(nn+" Checked WhatsApp in last 2 Minute");
      cry=[];
      for(var j=0;j<Store.Chat.models.length;j++){
        var n=Store.Chat.models[j].__x_id;
        if(n===ss){
          ans2=j;
          break;
        }
      }
    }
    
    if(Store.Chat.models[ans1].__x_presence.__x_isOnline)
      flag=false;
    else
      flag=true;

    var dpurl=Store.Chat.models[ans1].__x_contact.__x_profilePicThumb.__x_eurl;
    if(typeof(dpurl)!="undefined"){
      if(dpurl!==dp){
        Store.Chat.models[ans2].sendMessage(nn+" Has Changed Picture !! Check Here "+dpurl);
        dp=dpurl;
        for(var j=0;j<Store.Chat.models.length;j++){
          var n=Store.Chat.models[j].__x_id;
          if(n===ss){
            ans2=j;
            break;
          }
        }
      }
    }
  }
  cry=[];
}
setInterval(adi, 120000);


function check(){
  var jsonlen=obj.arr.length;
  for(var js=0;js<jsonlen;js++){
    var nn=obj.arr[js].stock;
    var ans1;
    var len=Store.Chat.models.length;
    var bool1=false;
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
      ans1=Store.Chat.models.length-1;
    }
    if(Store.Chat.models[ans1].__x_presence.__x_isOnline){
      if(cry.indexOf(Store.Chat.models[ans1].__x_id)<0)
        cry.push(Store.Chat.models[ans1].__x_id);
    }
  }
  console.log(cry);
}
setInterval(check,15000);