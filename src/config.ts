import fs from "fs";
import path from "path";
import { promisify } from "util";
import { CONFIG_FILE_NAME, Config, DEFAULT_CONFIG_FILE } from "./utils";

export const getConfig = async (): Promise<Config | undefined> => {
  const pathArg = ".";
  const searchPath = path.join(process.cwd(), pathArg, CONFIG_FILE_NAME);

  try {
    const file = await promisify(fs.readFile)(searchPath);
    return JSON.parse(file.toString()) as Config;
  } catch (error) {
    console.log("Config file not found");
  }
};

export const createConfig = async (): Promise<Config | undefined> => {
  try {
    try {
      console.log("Creating default config file...");
      const content = JSON.stringify(DEFAULT_CONFIG_FILE, undefined, 2);

      await promisify(fs.writeFile)(CONFIG_FILE_NAME, content);

      console.log("Config file created");

      return DEFAULT_CONFIG_FILE;
    } catch (e) {
      throw new Error(`Couldn't create config file`);
    }
  } catch (error) {
    console.log("Erro on create config file", error);
  }
};
