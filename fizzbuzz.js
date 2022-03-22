/*
Pseudocode
FOR LOOP
Set count value to 1
Counts stops when the count value reachs 20
increment count value by 1
IF number modulo 15 === 0
    print 'FizzBuzz'
ELSE IF number modulo 3 === 0
    print 'Fizz'
ELSE IF number modulo 5 === 0
    print 'Buzz'
ELSE
    print number
*/


for (let i = 1; i <= 20; i++) {
	if (i % 15 === 0) {
		console.log('FizzBuzz');
	} else if (i % 3 === 0) {
		console.log('Fizz');
	} else if (1 % 5 === 0);{
		console.log('Buzz')
	} else {
		console.log(i)
	}
};