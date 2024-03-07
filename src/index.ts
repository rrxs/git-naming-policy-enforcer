#!/usr/bin/env node
import { createConfig, getConfig } from "./config";
import { Config } from "./utils";

const run = async () => {
  let config: Config | undefined = await getConfig();
  if (!config) {
    config = await createConfig();
  }
};

run();
