let t;
function start(){
 t=new logo(300,100,0,"can1");
 t.c.lineWidth=1;
t.c.strokeStyle="blue";
//sq();
for(let j=0;j<12;j=j+1){
t.fd(100);t.bk(100);
t.rt(30);
}
}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
