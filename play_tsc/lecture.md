## Setup project

- Initial project and install dev dependencies
```
npm init
./node_modules/.bin/tsc -init
npm install --save-dev eslint @typescript-eslint/parser @typescript-eslint/eslint-plugin
```

- Initial eslint
```
./node_modules/.bin/eslint --init
? How would you like to use ESLint? To check syntax, find problems, and enforce code style
? What type of modules does your project use? JavaScript modules (import/export)
? Which framework does your project use? None of these
? Does your project use TypeScript? Yes
? Where does your code run? Node
? How would you like to define a style for your project? Use a popular style guide
? Which style guide do you want to follow? Standard: https://github.com/standard/standard
? What format do you want your config file to be in? JSON
? Would you like to install them now with npm? Yes

```

- Install source map
```
npm install --save-dev source-map-support
```
