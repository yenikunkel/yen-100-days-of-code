//CODE CHALLENGES: JAVASCRIPT FUNDAMENTALS
//howOld()

//TASK: Write a function, howOld(), that has two number parameters, age and year, and returns how old someone who is currently that age was (or will be) during that year

//SOLUTION:
const howOld = (age, year) => {
  // The following two lines make it so that our function always knows the current year.
  let dateToday = new Date();
  let thisYear = dateToday.getFullYear();

  const yearDifference = year - 2022;
  const newAge = age + yearDifference;
  if (newAge > age) {
    return `You will be ${newAge} in the year ${year}`;
  } else if (newAge < 0) {
    return `The year ${year} was ${-newAge} years before you were born`;
  } else {
    return `You were ${newAge} in the year ${year}`;
  }
};

console.log(howOld(29, 2030)); // output: You will be 37 in the year 2030
