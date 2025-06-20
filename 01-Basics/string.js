let gameName = new String("Prateek");

console.log(gameName);
console.log(gameName.length);
console.log(gameName.charAt(4));
console.log(gameName.indexOf("e"));

const newString = gameName.replace("Prateek", "   NewGame");

console.log(newString.trim());

const anotherString = gameName.toUpperCase();
console.log(anotherString);

//make a function that will take input and return after removing the special characters
function removeSpecialCharacters(str) {
  return str.replace(/[^a-zA-Z0-9 ]/g, "");
}
console.log(removeSpecialCharacters("Pra#@$tee*&k"));

const url = "https://www.prateek%20padhi.com";
console.log(url.replace("%20", "_"));
