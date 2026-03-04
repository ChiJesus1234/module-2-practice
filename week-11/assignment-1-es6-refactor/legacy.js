// create legacy js
var users = [
  { name: "Ada", age: 30, role: "admin" },
  { name: "Tobi", age: 22, role: "user" },
  { name: "Chinenye", age: 28, role: "admin" }
];

function getAdmins(arr) {
  var admins = [];

  for (var i = 0; i < arr.length; i++) {
    if (arr[i].role === "admin") {
      admins.push(arr[i]);
    }
  }

  return admins;
}

var result = getAdmins(users);

console.log("Admins:");
console.log(result);


