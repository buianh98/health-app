# Getting Started with Create React App

## About The Project

### Technologies

Reactjs
Typescript
Styled Component
React Router Dom
Redux
Redux Toolkit
Lodash
React-i18next
Chart

### Project Architecture

The project is built on atomic design architecture with the following components

1. Atoms
   As the most primitive components, their purpose is just to organize simple components that act as an html tag.

2. Molecules
   Molecules are components that will contain many atoms, it represents a part of the interface such as a card, a chart, their purpose is created to be reused on organisms.

3. Organisms
   You can think of it as a part of a page, it represents a session, a list contains many items, and often a web page will contain many Organizations to form the interface of that website.

4. Templates
   Template is where we can see the structure of a website with their elements like header, sidebar, sessions. It will contain many Organisms, Molecules, Atoms

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
