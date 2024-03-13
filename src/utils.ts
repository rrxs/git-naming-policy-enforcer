export type Config = {
  branch: {
    branchErrorMessage: string;
    regexBranchName: string;
    ignoreList: string[];
  };
  commit: {
    commitErrorMessage: string;
    regexCommitMessage: string;
  };
};
export const CONFIG_FILE_NAME = ".genforce.config.json";

export const DEFAULT_CONFIG_FILE: Config = {
  branch: {
    regexBranchName: "feature|feat",
    branchErrorMessage: "default branch error message",
    ignoreList: [],
  },
  commit: {
    regexCommitMessage: "/feat:*/",
    commitErrorMessage: "default commit error message",
  },
};
