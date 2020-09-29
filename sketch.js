let t;
function start(){
 t=new logo(300,100,0,"can1");
 t.c.lineWidth=1;
t.c.strokeStyle="rgb(248,131,121)";

like1();
}

function clear_Can(){
	 let canA=document.getElementById("can1");
	 let w=canA.width;
	 canA.width=w;//clears the screen.
 }
