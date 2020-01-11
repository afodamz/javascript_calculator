function getHistory(){
	return document.getElementById("history-value").innerText;
}
function printHistory(num){
	document.getElementById("history-value").innerText=num;
}
function getOutput(){
	return document.getElementById("output-value").innerText;
}

function  printOutput(num){
	// if value is empty, set value to empty
	if (num == ""){
		document.getElementById("output-value").innerText=num;
	}
		// else we use comma separated value
	else {
	document.getElementById("output-value").innerText=getFormattedNumber(num);
}
}


// Turn ro a comma separated value
function getFormattedNumber(num){
	if(num==""){
		return "";
	}
	var n = Number(num);
	var value = n.toLocaleString("en");
	return value;
}

// Turn the csv back to the normal number format
function reverseNumberFormat(num){
	return Number(num.replace(/,/g,''));
}


// Operations
var operator = document.getElementsByClassName("operator");
for(var i=0; i<operator.length; i++){
	operator[i].addEventListener("click", function(){
		if (this.id=="clear"){
			printHistory("");
			printOutput("");
		}
		else if(this.id=="backspace"){
			// convert it to string first
			var output=reverseNumberFormat(getOutput()).toString();
			if (output){// If output has a value
				output = output.substr(0,output.length-1);
				printOutput(output);

			}
		}
		else{
			var output = getOutput();
			var history = getHistory();
			if(output !=""){
				output = reverseNumberFormat(output);
				history = history+output;
				if(this.id=="="){
					var result = eval(history);
					printOutput(result);
					printHistory("");
				}
				else{
					history = history+this.id;
					printHistory(history);
					printOutput("");
				}
			}
		}
		// alert("The operator clicked:"+this.id);
	});
}

// Numbers clicking
var number = document.getElementsByClassName("number");
for(var i=0; i<number.length; i++){
	number[i].addEventListener('click', function(){

		// firstly remove the comma function
		var output = reverseNumberFormat(getOutput());

		if (output != NaN){ // if output is a number
			output = output+this.id;
			printOutput(output);
		}
		// aler("The number clicked:"+this.id);
	});
}