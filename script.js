function decimalToBinary(num) {
  // your code here
	let binary = "";
    while(num != 0){
        let rem = num % 2;
        binary = (rem.toString()) + binary;
        num =Math.floor( num /2);
    }
    return binary;
}
const num = parseInt(prompt("Enter a number."));
alert(decimalToBinary(num));
