window.onload = function(){
	writebox = document.getElementById("write");
	cursor = document.getElementById("cursor");
	writebox.innerHTML += "root@thom.dir:~$ ";
	siteText = "./getEmail|Contact32: MFPXI2DPNU4DSQDIN52G2YLJNQXGG33N";
	chars = siteText.split("");
	var i = 0;
	setTimeout(function(){ animation = setInterval(function(){
		(chars[i]=="|")?writebox.innerHTML+="<br>root@thom.dir:~$ ":writebox.innerHTML+=chars[i];
		i++;
		if (i == siteText.length) clearInterval(animation);
	},40); }, 2000);
	var j = 0;
	cursorAni = setInterval(function(){
		if (j==0){cursor.style.opacity = "0"; j=1;}else{cursor.style.opacity = "1"; j=0;}
	},600);
}