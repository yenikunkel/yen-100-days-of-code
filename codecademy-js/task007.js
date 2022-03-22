// CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
// tipCalculator()

/* TASK:
Create a function, tipCalculator(), that has two parameters, a string representing the quality of the service received and a number representing the total cost.

Return the tip, as a number, based on the following:
‘bad’ should return a 5% tip
‘ok’ should return a 15% tip
‘good’ should return a 20% tip
‘excellent’ should return a 30% tip
all other inputs should default to 18% */

// SOLUTION
//function declaration:
function tipCalculator(quality, total) {
  switch (quality) {
    case "bad":
      return total * 0.05;
    case "ok":
      return total * 0.15;
    case "good":
      return total * 0.2;
    case "excellent":
      return total * 0.3;
    default:
      return total * 0.18;
  }
}

console.log(tipCalculator("good", 100));
