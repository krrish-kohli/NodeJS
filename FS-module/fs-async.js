const fs = require("fs").promises;
const path = require("path");

// Define the folder and file path
const folderPath = path.join(__dirname, "products");
const filePath = path.join(folderPath, "products.pdf");

// 1. Create a directory if it doesn't exist
async function createFolder() {
  try {
    await fs.access(folderPath);
  } catch (error) {
    await fs.mkdir(folderPath);
    console.log("Folder created");
  }
}

createFolder();

async function writeFile() {
  try {
    await fs.writeFile(filePath, "This is for products lists.\n");
    console.log("File created successfully");
  } catch (error) {
    console.log(error);
  }
}

writeFile();

async function appendToFile() {
  try {
    await fs.appendFile(filePath, "Goods sold.\n");
    console.log("File appended successfully");
  } catch (error) {
    console.log(error);
  }
}

appendToFile();

async function readFile() {
  try {
    const content = await fs.readFile(filePath, "utf-8");
    console.log(content);
  } catch (error) {
    console.log(error);
  }
}

readFile();

async function deleteFile() {
  try {
    await fs.unlink(filePath);
    console.log("File deleted successfully");
  } catch (error) {
    console.log(error);
  }
}

// deleteFile();
