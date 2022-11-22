

From this directory run 

1) node simpleNodeWebServer.js 
2) go to localhost/index.html
3) click either button 
4) view console.logs() 
5) notice that testprocessor:process() is delivering data;  This is working!

From audioProblem 

1) open AndroidStudio and run the project 
2) click either button 
3) look in logcat :  notice that 

testprocessor.js constructor is hit
testprocessor.js thread stays alive 

but...

testprocessor.js : process() is never hit ... 
