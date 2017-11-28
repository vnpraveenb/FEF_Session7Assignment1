var count =0; // Declaring a global variable count

// Prints the initial value of count
document.write(" The initial value of count is:  " + count +"<br>"); 

// Increments the value of count and then returns the value
function incrementCount(){
    return ++count;  
}

// For loop that prints the value of count by calling the incrementCount() function 3 times 
for(var i = 0; i<3; i++){
     
    document.write("<br> The incremented value of count is: " + incrementCount() +"<br>"); 
    
}