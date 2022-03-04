let raceNumber = Math.floor(Math.random() * 1000);
// declare a variable runner who registered early
const registeredEarly = false;
const athleteAge = 23;
// create a control flow statement that checks whether the runner is an adult and registered early
if (athleteAge > 18 && registeredEarly) {
  raceNumber += 1000;
  console.log(`You will race at 9:30 am, and your race number is ${raceNumber}.`);
} else if (athleteAge > 18 && !registeredEarly) {
  console.log(`You will race at 11:00 am and your Race Number is ${raceNumber}.`);
} else if (athleteAge < 18) {
  console.log(`You will race at 12:30 pm, and your Race Number is ${raceNumber}.`);
} else {
  console.log('Please refer to the registation desk.');
}