let t;

function start(){
 t=new logo(300,100,0,"can1");
 t.c.lineWidth=1;
t.c.strokeStyle="blue";
t.fd(100);t.rt(45);t.fd(100);t.rt(45);
sq();t.fd(100);hex();
for(let j=0;j<10;j=j+1){
	hex();t.rt(36);t.fd(j*5);
}
}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
