var not=[];
var stk=[];

function data(){
  var nn=notify.value;
  var st=stock.value;
  not.push(nn);
  stk.push(st);
}

function adi(){
  for(var x=0;x<st.length;x++){
    var num=stk[x]+"@c.us";
    var len=Store.Chat.models.length;
    //var num="917275493769@c.us";
    var ans;
    var flag=true;
    Store.Chat.gadd(num);
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
    //send message function


    }
  if(Store.Chat.models[ans].__x_presence.__x_isOnline){
    flag=false;
    }
  else if(!Store.Chat.models[ans].__x_presence.__x_isOnline){
    flag=true;
    }
  }
}
setInterval(adi, 10000);
