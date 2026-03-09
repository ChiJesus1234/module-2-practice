import fs from "fs/promises";

async function loadData() {

  try {

    const [salesData, usersData] = await Promise.all([
      fs.readFile("./data/sales.json", "utf-8"),
      fs.readFile("./data/users.json", "utf-8")
    ]);

    const sales = JSON.parse(salesData);

    generateDashboard(sales, users);

  } catch (error) {
    console.error("Error loading data:", error.message);
  }

}

function generateDashboard(sales, users) {

  const totalRevenue = sales.reduce((sum, item) => sum + item.amount, 0);

  const averageAge =
    users.reduce((sum, user) => sum + user.age, 0) / users.length;

  const countByCategory = sales.reduce((acc, item) => {
    acc[item.category] = (acc[item.category] || 0) + 1;
    return acc;
  }, {});

  const top3 = [...sales]
    .sort((a, b) => b.amount - a.amount)
    .slice(0, 3);

  console.log("\n===== DASHBOARD REPORT =====\n");

  console.log("Total Revenue:", totalRevenue);

  console.log("Average User Age:", averageAge);

  console.log("\nCount by Category:");
  console.table(countByCategory);

  console.log("\nTop 3 Sales:");
  console.table(top3);

}

loadData();
