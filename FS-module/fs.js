const fs = require("fs");
const path = require("path");

// Define the folder and file path
const folderPath = path.join(__dirname, "studentsFolder");
const filePath = path.join(folderPath, "studentsLists.pdf");

// 1. Create a directory if it doesn't exist
if (!fs.existsSync(folderPath)) {
  // Create the folder
  fs.mkdirSync(folderPath);
  console.log("Folder created");
}

// 2. Create and write to a file
fs.writeFileSync(filePath, "List of students.\n");
console.log("File created and written");

// 3. Append more content
fs.appendFileSync(filePath, "This is an appended line.\n");

// 4. Read the file content
const content = fs.readFileSync(filePath, "utf-8");
console.log(content);

// 5. Delete a file
// fs.unlinkSync(filePath);
