function firstWord(s) {
 let spaceIndex = s.indexOf(" "); // Find the first space
  return spaceIndex === -1 ? s : s.substring(0, spaceIndex);}

// Do not change the code below

const s = prompt("Enter String:");
alert(firstWord(s));
