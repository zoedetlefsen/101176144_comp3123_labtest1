const fs = require('fs');
const path = require('path');

// Define the directory path
const logsDirectory = path.join(__dirname, 'Logs');

// Create the Logs directory if it doesn't exist
if (!fs.existsSync(logsDirectory)) {
  fs.mkdirSync(logsDirectory);
}

// Change the current working directory to Logs
process.chdir(logsDirectory);

// Create 10 log files and write some text into them
for (let i = 0; i < 10; i++) {
  const fileName = `log${i}.txt`;
  const filePath = path.join(logsDirectory, fileName);

  fs.writeFileSync(filePath, `This is log file ${i}`);
  console.log(fileName);
}

