import { filterAdmins, averageAge, findUser } from "./utils.js";

const users = [
  { name: "Ada", age: 30, role: "admin" },
  { name: "Tobi", age: 22, role: "user" },
  { name: "Chinenye", age: 28, role: "admin" }
];

// array destructuring
const [firstUser] = users;

// template literal
console.log(`First user: ${firstUser.name}`);

const admins = filterAdmins(users);
const avgAge = averageAge(users);
const foundUser = findUser(users, "Ada");

console.log("Admins:", admins);
console.log("Average Age:", avgAge);
console.log("Found User:", foundUser);