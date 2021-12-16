function countUsingWhile(){
	let input1 = document.getElementById('task1').value;
	let output1 = '';
	if (input1 <= 0) {
		let msg = document.getElementById('message');
		msg.innerHTML = 'Value Not Valid!';
	} else {
	while (input1 !== 0){
 	// alert(input1);
 	// input1--;
 	output1 +=  input1 + ' ';
 	input1--;
	}
	alert(output1)
	}
}



function countUsingDoWhile() {
	let number = document.getElementById('task2').value
	let output2 = '';
	if (number <=0){
		let displayText = document.getElementById('info');
		displayText.innerHTML = 'The number is Not Valid!';
	} else{
			let indexStart = 1;
			let displayText = document.getElementById('info');
			displayText.innerHTML = number + ' is Valid';
			do {
			// alert('count value: ' + indexStart);
			output2 +=  indexStart + ' ';
			
			indexStart++
			} while(indexStart <= number);
			alert(output2)
	}

}


function countUsingForLoop(){
	let data = document.getElementById('task3').value;
	let res = document.getElementById('response');
	let output3 = '';
	if (data <=0) {
		res.innerHTML = 'Input Invalid!';
	} else{
		for (let startCount = 0; startCount <= data; startCount++) {
		// alert('This is the value in this iteration: ' + startCount);
		output3 += startCount + ' ';
		}
		alert(output3);
	}

}


function accessElementsInString() {
	let name = document.getElementById('userName').value;
	let textLength = document.getElementById('stringLength')
	if (name !== '') {
		for(let i=0; i <name.length; i++)
			alert(name[i])
		textLength.innerHTML = 'The string is ' + name.length + ' characters long';
		// console.log(name[0]);
		// console.log(name[1]);
		// console.log(name[2]);
		// console.log(name[3]);
		// console.log(name[4]);
		// console.log(name[5]);
		// console.log(name[6]);

	} else {
		alert("Input is invalid!")
	}
}

// Detect if the word is a palindrome.

function detectPalindrome(){
	let word = document.getElementById('word').value;
	let response = document.getElementById('detectPalindrome')
	if (word !== '') {
		let wrdLength = word.length;
		for (let index = 0; index < wrdLength/2; index++) {

			if (word[index] !== word[wrdLength-1-index]) {
						response.innerHTML = word + '<h3 class="text-primary">is Not a Palindrome</h3>';
			} else {
				console.log(word[index] + ' is the same as ' + word[wrdLength-1-index])
				response.innerHTML = word + '<h3 class="text-success">is a Palindrome</h3>';
			}
		}

	} else {
		response.innerHTML = '<p class="text-danger"><small>Value is Invalid!</small></p>';	
	}

}



// create a function that will allow us to only display the odd numbers from a set of integers.

function getOddNumbers() {
	let inputCount = document.getElementById('value4').value
	let res = document.getElementById('getOddNum');
	let output6 = '';
	if (inputCount > 0) {
		for (let count=0; count <= inputCount; count++) {
		if((count % 2) === 0){
			continue;
		}
		// alert(count + ' ');
		output6 += count + ' ';
		}	
	alert(output6);
		// res.innerHTML = '<h3 class="text-warning"> Proceed</h3>'
	} else {
		res.innerHTML = '<p class="text-danger"><small> The Number should be greater than 0!</small></p>'
	}

}



