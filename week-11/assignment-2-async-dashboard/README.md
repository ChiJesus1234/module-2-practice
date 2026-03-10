# Assignment 2 — Async Data Dashboard

## How to Run the Code

1. Navigate to the project folder:

cd week-11/assignment-2-async-dashboard

2. Run the script:

node index.js

The script loads data from two JSON files and prints a dashboard report.

## What the Program Does

- Reads two datasets (`sales.json` and `users.json`) asynchronously.
- Uses `Promise.all` to load both files in parallel.
- Calculates:
  - Total revenue
  - Average user age
  - Count of sales by category
- Displays the results in a console dashboard.

## What I Learned

- How to use `async/await` in Node.js
- How to read files asynchronously with `fs.promises`
- How to use `Promise.all` for parallel async operations
- How to compute insights using array methods like `reduce`

## What Was Challenging

- Understanding Node module errors
- Debugging issues with JSON files and file paths
- Making sure asynchronous file reading worked correctly