export type Config = {
  regexCommitMessage: RegExp;
  regexBranchName: RegExp;
  branchErrorMessage: string;
  commitErrorMessage: string;
};
export const CONFIG_FILE_NAME = ".genforce.config.json";

export const DEFAULT_CONFIG_FILE: Config = {
  regexBranchName: /feature/,
  branchErrorMessage: "default error message",
  regexCommitMessage: /feat:*/,
  commitErrorMessage: "default error message",
};
