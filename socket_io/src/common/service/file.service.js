import { fileURLToPath } from "url";
import path from "path";
import fs from "fs/promises";
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const dbFolder = path.join(
  __dirname,
  "..",
  "..",
  "..",
  "..",
  "backend_db",
  "db"
);
async function createFileIfNotExists(filePath) {
  try {
    await fs.access(filePath);
  } catch (error) {
    await fs.writeFile(filePath, "This is a new file");
  }
}

export async function dbReadFile(file) {
  try {
    const filePath = path.join(dbFolder, file);
    await createFileIfNotExists(filePath);
    const resultJSON = await fs.readFile(filePath, "utf8");
    const result = JSON.parse(resultJSON);
    return result;
  } catch (err) {
    return null;
  }
}

export async function dbWriteFile(folder, content) {
  const contentJson = JSON.stringify(content);
  return fs.writeFile(path.join(dbFolder, folder), contentJson);
}
