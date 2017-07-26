var wordsList = [];

function init() {
  // Load the words from the dictionary text file to wordsList
  var wordsFile = "https://raw.githubusercontent.com/GirlsFirst/SIP-2017/master/Unit2_Applications/dictionary-attack/dictionary.txt?token=ADcVhZjRMd86ZdhPE2jVvIaJdQdzLA6Yks5YvvVSwA%3D%3D";
 	
 	//Gets respone from the wordsFileUrl passes it to the callback
 	//function in the form of the "data" parameter. and eventually invokes the callback function
  $.get(wordsFile, function(data) {
  	
  	//diables the submit button you dont want anyone submitting passwords 
  	//unti you have the wprds list ready to check again
    document.getElementById("btnSubmit").disabled = true; 
   
    //splits the response from WordFileUrl ny newline characater (\n)
    //and store the result in word list array
    wordsList = data.split('\n');
    
    //enables the submit button since the data is ready for use
    document.getElementById("btnSubmit").disabled = false; 
  });
}

window.onload = init
function checkPassword (){
	var /*indicator*/ y= false;
	var pw=document.getElementById("pw").value;
	for(i = 0;i < wordsList.length;i++){
		if(wordsList[i]== pw){  
			//(weak)y= true break out of the loop
			y = true;
			break;
		}
	} 
	if (y==true){
	window.alert("weak");
		}
	else{ 
	window.alert("strong");
	}
}