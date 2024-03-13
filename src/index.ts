#!/usr/bin/env node
import { createConfig, getConfig } from "./config";
import { Config } from "./utils";
import { validateBranchName } from "./validators";

const run = async () => {
  let config: Config | undefined = await getConfig();
  if (!config) {
    config = (await createConfig()) as Config;
  }

  const flag = process.argv[2];
  const value = process.argv[3];

  if (flag === "-b") {
    try {
      const result = await validateBranchName(config, value);
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  if (flag === "-c") {
    // const result = await validateCommitMessage(config, value);
    // console.log(result);
  }
};

run();
