import fs from "fs";
import path, { resolve } from "path";
import { promisify } from "util";
import { CONFIG_FILE_NAME, Config, DEFAULT_CONFIG_FILE } from "./utils";

export const getConfig = async (): Promise<Config | undefined> => {
  const pathArg = ".";
  const searchPath = path.join(process.cwd(), pathArg, CONFIG_FILE_NAME);
  const currentPath = resolve(searchPath);

  try {
    const file = await promisify(fs.readFile)(searchPath);
    console.log(`Using config file: ${currentPath}`);
    return JSON.parse(file.toString()) as Config;
  } catch (error) {
    console.log("Config file not found");
  }
};

export const createConfig = async (): Promise<Config | undefined> => {
  try {
    console.log("Creating default config file...");
    try {
      const content = JSON.stringify(DEFAULT_CONFIG_FILE, undefined, 2);

      await promisify(fs.writeFile)(CONFIG_FILE_NAME, content);

      return DEFAULT_CONFIG_FILE;
    } catch (e) {
      throw new Error(`Couldn't create config file`);
    }
  } catch (error) {
    console.log("Erro on create config file", error);
  }
};
