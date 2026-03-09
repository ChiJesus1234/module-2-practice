function filterAdmins(users) {
  return users.filter(user => user.role === "admin");
}

function averageAge(users) {
  const total = users.reduce((sum, user) => sum + user.age, 0);
  return total / users.length;
}

function findUser(users, name) {
  return users.find(user => user.name === name);
}

module.exports = { filterAdmins, averageAge, findUser };