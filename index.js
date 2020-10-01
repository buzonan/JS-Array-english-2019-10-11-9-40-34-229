// The writer determines whether the following variables are of type array.
var a = '[a, b, c, d]';
var b = [1, 2, 3, 4];
//TODO
console.log("The writer determines whether the following variables are of type array.");
console.log(`Variable a = ${Array.isArray(a)} Array`)
console.log(`Variable b = ${Array.isArray(b)} Array`)
console.log();

// Write a program that multiplies each entry in the following array by 2。
var a = [1, 2, 3, 4, 5];
// TODO should output [2,4,6,8,10]
console.log("Write a program that multiplies each entry in the following array by 2。");
for(var x=0; x < a.length; x++){
	a[x] = a[x] * 2;
}
console.log(a);
console.log();



// Write the program, according to the following requirements output results.
var colors = ["Red", "Green", "White", "Black"];
//TODO case 1 output: 'Red Green White Black'
// case 2 output: 'Red+Green+White+Black'
// case 3 output: 'Red,Green,White,Black'
console.log("Write the program, according to the following requirements output results.");

console.log("case 1 output: " + wordSeperator(colors, " "));
console.log("case 2 output: " + wordSeperator(colors, "+"));
console.log("case 3 output: " + wordSeperator(colors, ","));
console.log();


// Write a program to sort the Numbers in the following array from largest to smallest.
var a = [5, 1, 8, 10, 4];
//TODO should output: [10,8,5,4,1]
console.log("Write a program to sort the Numbers in the following array from largest to smallest.");
a = a.sort(function(a, b){return b - a});
console.log(a);


// Program to find the most frequent element in the following array.
var a = [3, 'a', 'a', 'a', 2, 3, 'a', 3, 'a', 2, 4, 9, 3];
//TODO should output: 'a'
console.log("Program to find the most frequent element in the following array.");
//Also created logic if there's more than one Highest Frequent Elements.
console.log(getMostFrequentElements(a));





//FUNCTIONS RELATED FOR THIS ACTIVITY.
function getMostFrequentElements(arraySet){
	var freqElement = "";
	var currentFreqElement = "";
	var uniqueSet = getUniqueValues(arraySet)

	currentFreqElement = getFrequentElement(uniqueSet);
	freqElement = currentFreqElement;
	for(var i=0; i < uniqueSet.length; i++){
		if(uniqueSet.indexOf(currentFreqElement) != -1){
			uniqueSet.splice(uniqueSet.indexOf(currentFreqElement), 1);
			if(elementCount(a, currentFreqElement) === elementCount(a, getFrequentElement(uniqueSet))){
				currentFreqElement = getFrequentElement(uniqueSet);
				freqElement += currentFreqElement;
			}
		}
	}
	return freqElement;
}

function wordSeperator(words, separator){
	var output = "'";
	for (var i = 0; i < words.length; i++) {
		if(i === words.length - 1){
			output += words[i];
			break;
		}
		output += words[i] + separator;
		
	}
	output += "'";
	return output;
}

function getFrequentElement(arraySet){
	var currentElementCount = 0;
	var freqElementCount = 0;
	var freqElement = "";
	for(value of arraySet){
		currentElementCount = elementCount(a, value);
		if(freqElementCount < currentElementCount){
			freqElementCount = currentElementCount;
			freqElement = value;
		}
	}
	return freqElement;
}

function getUniqueValues(arraySet){
	var new_arr =[];
	for(val of arraySet){
		if(!new_arr.includes(val)){
			new_arr.push(val);
		}
	}
	return new_arr;
}

function elementCount(arraySet, value){
	var occuranceNo = 0;
	for (val of arraySet){
		if(value === val){
			occuranceNo++;
		}
	}
	return occuranceNo;
}