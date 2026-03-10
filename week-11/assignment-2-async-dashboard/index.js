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

    const top3 = [...sales].sort((a,b)=>b.amount-a.amount).slice(0,3);

    console.log("\n===== DASHBOARD REPORT =====\n");

    console.log("Total Revenue:", totalRevenue);
    console.log("Average User Age:", averageAge);

    console.log("\nCount by Category:");
    console.table(countByCategory);

    console.log("\nTop 3 Sales:");
    console.table(top3);

  } catch (error) {
    console.error("Error:", error.message);
  }
}

loadData();