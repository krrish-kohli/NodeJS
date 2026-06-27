// My first nodejs code
const username = "Jane Doe";
const currentTime = new Date();
const hours = currentTime.getHours();

let greeting;
if (hours < 12) {
  greeting = "Good Morning";
} else if (hours < 18) {
  greeting = "Good Afternoon";
} else {
  greeting = "Good Evening";
}

console.log(`${greeting}, ${username}! Welcome to Node.js`);
