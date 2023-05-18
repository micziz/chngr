# Chngr

Versioning for humans!

Chngr is an intuative versioner with humans in mind.

## Why?

Changeset and other similar tools are great, but chngr offers some advantages:

- No configuration or initialization, inits by itself
- No strange names. Files are named 1, 2, 3 and so on
- Write your commits descriptions inside the file.
- Automatically writes it to changelog bumping the version in changelog, but not in package.json!

## Installation

Install chngr with a simple npm install command:

```shell
npm install --save-dev chngr

# Or yarn and pnpm are supported
# yarn add -D chngr
# pnpm add -D chngr 
```

## Usage

Use it compleatly interactivley:

```shell
chngr --interactive
```

Or with the cli

```shell
chngr create

chngr bump
```

(it will still ask you questions, its not fully automated, i'm working on that!)

## Contributing

To contribute, clone the repo, then install dependecies with [pnpm](https://pnpm.io)

## License

MIT