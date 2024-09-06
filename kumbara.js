function updateClock() {
  const now = new Date();
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const timeString = `${hours}:${minutes}`;
  document.getElementById("clock").textContent = timeString;
}

setInterval(updateClock, 1000);
updateClock();

// todo : kumbara sistemi

// var week = prompt("enter a number from week days");
// switch (week) {
//   case '1':
//   case '5':
//   case '3':
//   case '7':
//     alert("tak gunler");
//     break;
//   case '2':
//   case '4':
//   case '6':
//   case '8':
//     alert("jubut gunler");
//     break;
// }
// let weewk = "we men"
// console.log(typeof "week")

// ? : yokarky kod y isletmelidir
