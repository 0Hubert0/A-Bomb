var x_velocity = new Array(100);
var y_velocity = new Array(100);
var x = new Array(100);
var y = new Array(100);

var bomb=document.getElementById("bomb");
var fuse=document.getElementById("fuse");

fuse.onmouseover = warning;
bomb.onmouseover = warning;

fuse.onmouseout = warning2;
bomb.onmouseout = warning2;

fuse.onclick = boom;
bomb.onclick = boom;

function warning()
{
	bomb.style.setProperty("background-color","red");
	bomb.style.setProperty("height","100px");
	bomb.style.setProperty("width","100px");
	bomb.style.setProperty("top","265px");
	bomb.style.setProperty("left","560px");
	fuse.style.setProperty("background-color","red");
	fuse.style.setProperty("width","20px");
	fuse.style.setProperty("height","100px");
}

function warning2()
{
	bomb.style.setProperty("background-color","black");
	bomb.style.setProperty("height","50px");
	bomb.style.setProperty("width","50px");
	bomb.style.setProperty("top","225px");
	bomb.style.setProperty("left","580px");
	fuse.style.setProperty("background-color","black");
	fuse.style.setProperty("width","10px");
	fuse.style.setProperty("height","50px");
}

function boom()
{
	bomb.style.setProperty("display","none");
	fuse.style.setProperty("display","none");
	
	for (var i=0; i<100; i++)
	{
		var Particle = document.createElement("div");
		document.getElementById("content").appendChild(Particle);
		x[i] = Math.floor(Math.random()*100)+560;
		var x_axis=x[i]+"px";
		y[i] = Math.floor(Math.random()*100)+265;
		var y_axis=y[i]+"px";
		Particle.setAttribute("class","particle");
		var xx="p"+i;
		Particle.setAttribute("id", xx);
		Particle.style.setProperty("left", x_axis);
		Particle.style.setProperty("top", y_axis);
		
		x_velocity[i]=(x[i]-610)*0.5;
		y_velocity[i]=(y[i]-315)*0.5;
	}
	setInterval(loop, 10);
}

function loop()
{
	for (var l=0; l<100; l++)
	{
		x[l]+=x_velocity[l];
		var left = x[l]+"px";		
		y[l]+=y_velocity[l];
		var top = y[l]+"px";
		var o = "p"+l;
		var b=document.getElementById(o);
		b.style.setProperty("top", top);
		b.style.setProperty("left", left);
		x_velocity[l]*=0.95;
		y_velocity[l]*=0.95;
	}
}