function countUsingWhile(){
	let input1 = document.getElementById('task1').value;
	if (input1 <= 0) {
		let msg = document.getElementById('message');
		msg.innerHTML = 'Value Not Valid';
	} else {
	while (input1 !== 0){
 	alert(input1);
 	input1--;
	}
	}
}



function countUsingDoWhile() {
	let number = document.getElementById('task2').value
	if (number <=0){
		let displayText = document.getElementById('info');
		displayText.innerHTML = 'The number is Not Valid!';
	} else{
			let indexStart = 1;
			let displayText = document.getElementById('info');
			displayText.innerHTML = number + ' is Valid';
			do {
			alert('count value: ' + indexStart);
			indexStart++
			} while(indexStart <= number);
	}
}


function countUsingForLoop(){
	let data = document.getElementById('task3').value;
	let res = document.getElementById('response');
	if (data <=0) {
		res.innerHTML = 'Input Invalid';
	} else{
		for (let startCount = 0; startCount <= data; startCount++) {
		alert('This is the value in this iteration: ' + startCount);
		}
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
		alert("INput is invalid")
	}
}

