# Dashboard app
### This is dashoard app. Header contains links to pages: Dashbaord, Table and Other:

- Dashbaord page contain two pie charts. Click on page chart will trigger open details modal.

- Table page contains employee table with five columns. On the top right side above tbale there is ADD NEW button which trigger open Add new Employee form. Form containts fileds with validations. After successfully filling data new employee will be added into table.
Modal and form components are custom implemented by usid plain html and css.

- Other page contains simple text.

- Project is based on vustom theme. Configuration is in src\theme.ts file. For custom css style theme configuration  variables are in src\main.css file.


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

Runs the app in the development mode.
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm run storybook`
Start Storybook. Storybook collects completely anonymous data to help us improve user experience.

### `npm test`

Launches the test runner in the interactive watch mode.

### `npm run lint`

Runs linter. Linter is used for a static code analysis tool to flag programming errors, bugs, stylistic errors and suspicious constructs.
Current status is no errors no warnnings.

### `npm run build`

Builds the app for production to the `build` folder.

## Libraries used

- [React router](https://reacttraining.com/react-router/)
- [React hook form](https://react-hook-form.com/get-started)
- [Material UI](https://mui.com/material-ui/getting-started/)
- [Material UI Icons](https://mui.com/material-ui/material-icons/)
- [Material UI Charts](https://mui.com/x/react-charts/)
- [Storybook](https://storybook.js.org/)

## Project component structure - Atomic Design Pattern

[Atomic design](https://andela.com/blog-posts/structuring-your-react-application-atomic-design-principles) is a methodology for creating design systems by breaking down components into smaller, reusable building blocks. The same principle can be applied to folder structure. The atomic structure consists of five levels: atoms, molecules, organisms, templates, and pages