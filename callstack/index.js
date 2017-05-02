
function goTime(){
	for(var i=0; i<5;i++){
		setTimeout(function(){
			console.log(i)
		}, 0)
	}
}
goTime(); //should output 01234