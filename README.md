# Introduction

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

This is a web page shows three 3D models in row with each canvas as their background.

You can control the model's orbit and see the model since it provides you with light effect.

Each model has different values of light and position.

These models were converted from glb to .jsx with jsx converter(you can google and find it).

Used `React`, `drei`, `fiber` for showing 3D models on a website.

## Getting Started

First, copy this project's URL and clone this project into your local with git :

```bash
git clone [project URL]
```

FYI, No need to make a new folder for this project. 

it is already packed in the folder with it's project name when you clone.

Then, recover packages. update node_modules with the command below :

```bash
npm install
```

Next, run the development server with one of the commands below (npm recommended) :

```bash
npm start
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

Congratulations! you can now see the view of this project! 

## About the source

- `src/App.js` : all the components are here.

Contains all the components first in Canvas.

Then, put the model component in Suspense, which is supported by React.

Add OrbitControls (drei)

And add ambientLight, directionalLight (three.js).

Still you can use three.js directly since fiber is based on it.

- `src/model` : all the jsx files here are converted from glb expention.

glb files were both downloaded from some open source website (google it.) and made by myself.

For your record, there is Null.jsx which doesn not work.

This is because you shouldn't change the file name while and after it has been converted.

There must have been some accident while I was bringing this file to this directory.

So.. beware those errors.

## Goal

The goal of this project was `To show multiple 3D models with a website using webGL but faster and easier`

And `To prove React and drei/fiber are good use of making 3D website`.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

