// !- Write code that solves the requirements
// !- Test your solution by giving it some sample data and console.log the results 


// Input: a (number), b (number)
// Action: Add both numbers together
// Output: The result (number)
function add(a,b) {
    return a + b;
}

// Input: number
// Action: Check if the number given is even or not
// Output: The result (boolean)
function isEven(a) {
    if (a % 2 === 0) {
        return true;
    }
}

// Input: name (string)
// Action: Greet the user by name
// Output: The greeting (string)
function greet(userName) {
    return "Hello " + userName + "!";
}

// Input: age (number)
// Action: Check if the age is 18 or over
// Output: The result (boolean)
function isAnAdult(c) {
    if (c >= 18) {
        return true;
    }
}
console.log(isAnAdult(18));

// Input: age (number)
// Action: Check how many years are left until adulthood (18)
// Output: The result (number)
function yearsToAdulthood(d) {
    if (d < 18) {
        return 18 - d;
    }
}
console.log(yearsToAdulthood(12));

// Input: person ({ age: number, name: string })
// Action:
//   - check if a person is an adult
//   - if they are, greet them
//   - if they are not, tell them to come back in X years (when they are)
// Output: The result (string)
function admit(age,nameOfUser) {
    if (isAnAdult(age)) {
        return greet(nameOfUser);
    } else {
        return "Sorry " + nameOfUser + ", you are not old enough. Come back in " + yearsToAdulthood(age) + " years to enter.";
    }
}
console.log(admit(14,"John"));
// use greet, isAnAdult and yearsToAdulthood to help you!
