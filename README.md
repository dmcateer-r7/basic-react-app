# Basic React App

This is a skeleton code base that can be used to quickly set up a react web app

Stack built using React, Express & Webpack. 

## Requirements
 - Node JS: v18.12.1 (use node version manager (NVM) https://github.com/nvm-sh/nvm )
 - Webpack: v5.73.0
 - NPM: v9.1.3 


## Installation
From the root directory where the package.json file is located run the following command to install project dependencies. 

```bash
npm install
```

## Running The App (Prodution mode)
Running the following command will bundle the client side code into static files using webpack. This is then served by Express from the ```dist``` folder.

```bash
npm run start
```

## Running The App (Dev mode)
Running the app in dev mode enables webpack hot reloading. Dev mode serves the frontend react app on port 8081 and the api separately on port 8080 for easier debugging.

```bash
npm run dev
```

## Components
React components are created with Reactstrap
See https://reactstrap.github.io/?path=/story/home-installation--page 
