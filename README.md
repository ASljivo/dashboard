# Dashboard app

## Starting project

- clone repository from git
- install all required libraries: `npm install`
- start project: `npm start`
- if not automatically, visit [localhost:3000](http://localhost:3000)

## Node and npm

- [NVM](https://github.com/creationix/nvm) is used to specify Node version
- Node version used on this project is v18.20.2

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.
Code coverage are: File  
| % Stmts | % Branch | % Funcs | % Lines |  
|---------|----------|---------|---------|
| 75.58 | 61.01 | 60.75 | 76.69 |

### `npm run lint`

Runs linter. Linter is used for a static code analysis tool to flag programming errors, bugs, stylistic errors and suspicious constructs.
Current status is no errors no warnnings.

### `npm run build`

Builds the app for production to the `build` folder.

## Libraries used

- [React router](https://reacttraining.com/react-router/)
- [Axios](https://github.com/axios/axios)

## Project component structure - Atomic Design Pattern

[Atomic design](https://andela.com/blog-posts/structuring-your-react-application-atomic-design-principles) is a methodology for creating design systems by breaking down components into smaller, reusable building blocks. The same principle can be applied to folder structure. The atomic structure consists of five levels: atoms, molecules, organisms, templates, and pages