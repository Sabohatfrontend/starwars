# Star Wars Characters Project

This is a Vite + TypeScript project focused on displaying and interacting with information about Star Wars characters. The project includes various tools and configurations to ensure code quality and smooth development workflow.

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Features

- Vite for fast development and build process
- TypeScript for static typing and improved code quality
- Vitest for testing with a simple, lightweight test runner
- ESLint for code linting and enforcing coding standards
- Prettier for code formatting
- Husky for managing Git hooks (e.g., pre-commit linting)
- Code Coverage to ensure quality of tests

## Getting Started

### Prerequisites
Ensure you have the following installed:

- Node.js (v14 or higher)
- npm or yarn as your package manager

### Installation
1. Clone the repository:
```bash
git clone https://github.com/yourusername/star-wars-characters.git
cd star-wars-characters
```
2. Install the dependencies:

```bash
npm install
# or
yarn install
```

## Scripts
### Development Server:

Starts the Vite development server.
```bash
npm run dev
```
### Build:
Builds the project for production.
```bash
npm run build
```

### Linting:
Runs ESLint to lint your code.
```bash
npm run lint
```

### Formatting:
Formats your code using Prettier.
```bash
npm run format:fix
```

### Test:
Runs unit tests using Vitest.
```bash
npm run test
```

### Test with Coverage:
Runs tests and outputs the coverage report.
```bash
npm run coverage
```



If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

