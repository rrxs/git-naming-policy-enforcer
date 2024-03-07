export type Config = {
  branch: {
    branchErrorMessage: string;
    regexBranchName: RegExp;
    ignore: string[];
  };
  commit: {
    commitErrorMessage: string;
    regexCommitMessage: RegExp;
  };
};
export const CONFIG_FILE_NAME = ".genforce.config.json";

Object.defineProperty(RegExp.prototype, "toJSON", {
  value: RegExp.prototype.toString,
});

export const DEFAULT_CONFIG_FILE: Config = {
  branch: {
    regexBranchName: /feature/,
    branchErrorMessage: "default error message",
    ignore: [],
  },
  commit: {
    regexCommitMessage: /feat:*/,
    commitErrorMessage: "default error message",
  },
};
