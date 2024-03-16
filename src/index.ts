#!/usr/bin/env node
import colors from "colors";
import { Config, createConfig, getConfig } from "./config";
import { isBranchNameValid, isCommitMessageValid } from "./validators";

const run = async () => {
  let config: Config | undefined = await getConfig();
  if (!config) {
    config = (await createConfig()) as Config;
  }

  const flag = process.argv[2];
  const value = process.argv[3];

  if (flag === "-b") {
    try {
      const isValid = await isBranchNameValid(config, value);
      if (!isValid) {
        console.log(colors.red("invalid branch name"));
        process.exit(1);
      }
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }

  if (flag === "-c") {
    try {
      const isValid = await isCommitMessageValid(config, value);
      if (!isValid) {
        console.log(colors.red("invalid commmit message"));
        process.exit(1);
      }
    } catch (error) {
      console.log(error);
      process.exit(1);
    }
  }
};

run();
