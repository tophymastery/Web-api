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

- Install nodemon
```
npm install --save nodemon
/node_modules/.bin/tsc --watch
```
edit `package.json`
```json
"scripts": {
    "test": "echo \"Error: no test specified\" && exit 1",
    "dev": "NODE_ENV=dev nodemon ./dist/my.js",
    "build:watch": "tsc --watch"
},
```

- Install jest
```
npm install --save-dev jest ts-jest @types/jest
./node_modules/.bin/ts-jest config:init
npm install --save-dev eslint-plugin-jest
```

jest has watch option to run when test is updated
```
./node_modules/.bin/jest --watch
```

#### Note - installing javascript library with `Definitely Typed`
we can installing javascript lib with command `npm install --save loash`
but installing this way we can't know type when we import so intellisense not working
```javascript
import * as _ from 'lodash'
```

but if we install with command `npm install --save @type/lodash` then import like above. Intellisense is working properly

ref: https://definitelytyped.org/

`npm install --save-dev supertest`
