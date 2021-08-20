// Describe rogerReplace()

//Test: 
// Numbers that contain a 1: all digits are replaced (all digits) with "Beep!"
// Numbers that contain a 2: all digits are replaced (all digits) with "Boop!"
// Numbers that contain a 3: all digits are replaced (all digits) with "Won't you be my neighbor?"


// Business Logic


function rogerReplace(number){
  let numberArray = [];
  for (let i = 0; i <= number; i++) {
    if (i == 3) {
      numberArray.push("Won't you be my neighbor?");
    }
  }
  return numberArray;
}

// UI Logic