

function goTime(){
    for(var i=0; i<5;i++){
        (function(i){
            setTimeout(function(){
                console.log(i)
            }, 0)
        })(i)
    }
}
goTime(); //should output 01234