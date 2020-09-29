
function sq(len){
t.fd(len);t.rt(90);t.fd(len);t.rt(90);
t.fd(len);t.rt(90);t.fd(len);t.rt(90);
}
function bunchSq(len){
  for(let k=1;k<11;k=k+1){
    sq(k*10);
  }
}


function like1(){
for(let j=1;j<13;j=j+1){
//t.fd(j*10);t.bk(j*10);t.rt(30);
t.fd(j*20);bunchSq(j*10);t.bk(j*20);t.rt(30);
}  
}
