// CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
//finalGrade()

/*  Write a function, finalGrade(). It should:

take three arguments of type number
find the average of those three numbers
return the letter grade (as a string) that the average corresponds to
return ‘You have entered an invalid grade.’ if any of the three grades are less than 0 or greater than 100
 0-59 should return: 'F'
60-69 should return: 'D'
70-79 should return: 'C'
 80-89 should return: 'B'
 90-100 should return: 'A' */

//SOLUTION
const calculateWeight = (earthWeight, planet) => {
  switch (planet) {
    case "Mercury":
      return earthWeight * 0.378;
    case "Venus":
      return earthWeight * 0.907;
    case "Mars":
      return earthWeight * 0.377;
    case "Jupiter":
      return earthWeight * 2.36;
    case "Saturn":
      return earthWeight * 0.916;
    default:
      return "Invalid Planet Entry. Try: Mercury, Venus, Mars, Jupiter, or Saturn.";
  }
};

console.log(calculateWeight(100, "Jupiter"));
