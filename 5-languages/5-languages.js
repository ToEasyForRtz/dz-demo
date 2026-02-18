let greetings = prompt("Write your language"); // пользователь введет текст на своем языке и отталкиваясь от его языка будет соответсвующее приветствие

switch (greetings) {
  case "de":
    console.log("Gutten Tag!");
    break;
  case "en":
    console.log("Good Morning!");
    break;
  case "ru":
    console.log("Здравсвтуйте");
    break;
  default:
    console.log("Sorry, i dont know this language");
}
