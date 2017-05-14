document.getElementById("transform").addEventListener("click", myFunc, false);

function myFunc(){
	var text = document.getElementById("text").value

	var total = "";

	for(var i=0;i< text.length; i++){
		if(i % 2 === 0){
			total+= text.charAt(i).toUpperCase();
		}else{
			total+= text.charAt(i);
		}
	}

	document.getElementById("result").innerHTML = total;
}
