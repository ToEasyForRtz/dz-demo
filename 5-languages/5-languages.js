let greetings = prompt("Write your language"); // пользователь введет текст на своем языке и отталкиваясь от его языка будет соответсвующее приветствие

switch (greetings) {
  case "German":
    console.log("Gutten Tag!");
    break;
  case "English":
    console.log("Good Morning!");
    break;
  case "Russian":
    console.log("Здравсвтуйте");
    break;
  default:
    console.log("Sorry, i dont know this language");
}
