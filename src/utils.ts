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
    regexBranchName: "(feat|fix)/[A-Z]+-[0-9]+",
    branchErrorMessage: "",
    ignoreList: [],
  },
  commit: {
    regexCommitMessage: "(feat|fix): [A-Z]+-[0-9]+ - .*",
    commitErrorMessage: "",
  },
};
