function countdown(num, mult, lowNum){
	console.log(num);
	num -= mult; // exclude the lowest
	if(num > lowNum){
		countdown(num, mult, lowNum);
	}
}

function lowerMultiple(num, mult){
	/* if given a number, say 17, and a multiple, say 2,
	finds the first number that is less than or equal to 17
	that is a multiple of 2*/
	if (num % mult == 0){
		return num;
	}else{
		num = lowerMultiple(num-1, mult);
	}
	return(num);
}

function startCountDown(lowNum=0, highNum, mult){
	/* start the countdown with the right number, so that
	you are guaranteed to get multiples by just subtracting
	*/
	highStart = lowerMultiple(highNum, mult);
	console.log('starting coundown at',highStart)
	countdown(highStart, mult, lowNum);
}

startCountDown(2000, 2019, 4);
startCountDown(2, 9, 3);
