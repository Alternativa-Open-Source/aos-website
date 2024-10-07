const fs = require("fs");
const path = require("path");
const yaml = require("js-yaml");

export const listFiles = async (dataFolder) => {
  const projectRoot = process.cwd();

  const folder = path.join(projectRoot, dataFolder);
  return await fs.promises.readdir(folder);
};

export const fileExists = async (folder, file) => {
  const projectRoot = process.cwd();
  const filePath = path.join(projectRoot, folder, file);

  try {
    await fs.promises.access(filePath);
    return true;
  } catch (error) {
    return false;
  }
};

export const readFile = async (folder, file) => {
  const projectRoot = process.cwd();
  const filePath = path.join(projectRoot, folder, file);
  return fs.promises.readFile(filePath, "utf8");
};

export const readFileOrNull = async (folder, file) => {
  const exist = await fileExists(folder, file)
  if (!exist ) {
    return null;
  }

  return await readFile(folder, file);
};

export const readYamlFile = async (folder, file) => {
  const fileContents = await readFile(folder, file);
  return yaml.load(fileContents);
};

export const saveFile = async (folder, file, data) => {
  try {
    const projectRoot = process.cwd();
    const filePath = path.join(projectRoot, folder, file);

    const jsonData = JSON.stringify(data, null, 2);

    await fs.promises.writeFile(filePath, jsonData, "utf8");
    return true;
  } catch (error) {
    console.error("Error saving object:", error, folder, file);
    throw error;
  }
};
