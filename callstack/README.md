###Callstack 

You have a simple function with a for loop.  The results are not as you would expect on first glance.  The console results should print 0 1 2 3 4.  Fix the function with as little code changes as possible to make it work



```js
function goTime(){
    for(var i=0; i<5;i++){
        setTimeout(function(){
            console.log(i)
        }, 0)
    }
}
goTime(); //should output 01234
```


