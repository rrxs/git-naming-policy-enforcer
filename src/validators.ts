import { promisify } from "util";
import { Config } from "./utils";

const exec = promisify(require("node:child_process").exec);

export const isBranchNameValid = async (
  config: Config,
  branchName: string | undefined = undefined
): Promise<boolean> => {
  if (!branchName) {
    const gitCommand = await exec("git rev-parse --abbrev-ref HEAD");
    branchName = gitCommand.stdout.replace("\n", "") as string;
  }

  if (config.branch.ignoreList.includes(branchName)) {
    return true;
  }

  const branchRegex = new RegExp(config.branch.regexBranchName);
  return branchRegex.test(branchName);
};

export const isCommitMessageValid = async (
  config: Config,
  commitMessage: string
): Promise<boolean> => {
  const regex = new RegExp(config.commit.regexCommitMessage);
  return regex.test(commitMessage);
};
