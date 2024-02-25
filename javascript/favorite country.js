

function addCountry() {
    // Get the select element
    var countries = document.getElementById("countries");
    
    // Get the selected option
    var selectedOption = countries.options[countries.selectedIndex];
    
    // Get the value and text of the selected option
    var selectedValue = selectedOption.value;
    var selectedText = selectedOption.text;
    
    // Display the selected value and text
    alert("Selected Value: " + selectedValue + "\nSelected Text: " + selectedText);
  }