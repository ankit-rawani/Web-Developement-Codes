var answer = prompt("Are we there?");
// while(answer !== "yes" && answer !== "yeah") {
// 	answer = prompt("Are we there yet?");
// }


// var x = true;
// while(x) {
// if(answer.includes("yes") || answer.includes("yeah")){
// alert("YAY, We made it!!!");
// x = false;
// }
// else {
// 	answer = prompt("Are we there yet?");
// }
// }


// while((answer.indexOf("yes") < 0) && (answer.indexOf("yeah") < 0)) {
// 	answer = prompt("Are we there yet?");
// }
// alert("YAY, We made it!!!")

while(answer.indexOf("yes") === -1 && answer.indexOf("yeah") === -1) {
	answer = prompt("Are we there yet?");
}
alert("YAY, We made it!!!");