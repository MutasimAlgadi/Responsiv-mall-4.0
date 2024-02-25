
// JAVASCRIPT FOR MOMENT 2

var cities=[]; // global variable
var counter=1;// global variable

function AddCity(){ // It is the function for att getting the values from the user
    var city=document.getElementById("city").value; // .value means that we will get it from the user 

 if (city !== null && city !== ""){
      if (counter <=5){
         cities.push(city); // for adding 
         document.getElementById("city"+counter).value= city;
        counter=counter+1;
        document.getElementById("city").value="";
        DisplayInfo(city);
      }
        else {       
             document.getElementById("error").innerHTML="You should enter only five cities";
            }
        }
    } 
 
 function DisplayInfo(town){
    var info="The array now contains " + (cities.length) + " element.<br>"
      + "The name in the capital letters is: "+ town.toUpperCase() + 
      "<br> The length of the word is: " + (town.length)+ " letter. <br>"
     + "The first letter at the word is: " + town.charAt(0);
    document.getElementById("info").innerHTML= info;
    }

    
    /*
    sorteraArray(city){
        city.sort();
        document.getElementById(cities).innerHTML=city;
        
    }
    */