const fs = require("fs").promises;

async function loadData() {
  try {

    const [salesData, usersData] = await Promise.all([
      fs.readFile("./data/sales.json", "utf8"),
      fs.readFile("./data/users.json", "utf8")
    ]);

    const sales = JSON.parse(salesData);
    const users = JSON.parse(usersData);

    const totalRevenue = sales.reduce((sum, item) => sum + item.amount, 0);

    const averageAge =
      users.reduce((sum, user) => sum + user.age, 0) / users.length;

    const countByCategory = sales.reduce((acc, item) => {
      acc[item.category] = (acc[item.category] || 0) + 1;
      return acc;
    }, {});

    console.log("\n===== DASHBOARD REPORT =====\n");
    console.log("Total Revenue:", totalRevenue);
    console.log("Average User Age:", averageAge);
    console.log("Count by Category:", countByCategory);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

loadData();