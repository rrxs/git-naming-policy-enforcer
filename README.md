# git-naming-policy-enforcer

```bash
🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧

  UNDER CONSTRUCTION

🚧 🚧 🚧 🚧 🚧 🚧 🚧 🚧
```

## Description

A simple CLI that can be used to validate branch and commit messages using a regex configuration.

Examples of use:

```bash
# Validate commit message
genforce -c "Add new feature"

# Validate branch name
genforce -b
```

### Configuration

You must use a config file named `.genforce.config.json`. Example config file.

```json
{
  "branch": {
    "regexBranchName": "(feat|fix)/[A-Z]+-[0-9]+",
    "branchErrorMessage": "",
    "ignoreList": []
  },
  "commit": {
    "regexCommitMessage": "(feat|fix): [A-Z]+-[0-9]+ - .*",
    "commitErrorMessage": ""
  }
}
```

## Todo

- Unit tests
- Custom error messages
- [...]

## Development

To run locally run the following commands.

```bash
# After cloning
npm i

npm run build:dev

npx genforce -c "feat: Teste message"

```
