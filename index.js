const form =  document.getElementById("login") ; 
const formText = form.innerText.split("\n") ; 
// splits the text about new lines 
// returns all text inside any descendant and of the login form 


// the fourth row of the formText array is the relevant senetence
const numbers = formText[3].match(/\d+/g).map(Number) ; 
//map() Number() and match() 
// matching conditions => /pattern/modifiers => specifies characters of search pattern     
// g performs a global match \d+ indicates presence of digit followed by some thing 
var result = 0 ; // final result 


// includes checks for a word in a given string 
if(formText[3].includes("subtract")){
    result = numbers[0] - numbers[1] ; 
}

if(formText[3].includes("second")) {
    result = numbers[1]  ; 
}

if(formText[3].includes("first")){
    result = numbers[0] ; 
}

if(formText[3].includes("add")){
    result = numbers[0] + numbers[1] ; 
}

document.getElementById("valuepkg3").value = result ; 
 
