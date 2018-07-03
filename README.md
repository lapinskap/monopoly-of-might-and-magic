# Expensify 
React App created with Andrew Mead course, contains React Router and Redux


## Table of contents
* [General info](#general-info)
* [Screenshots](#screenshots)
* [Technologies](#technologies)
* [Setup](#setup)
* [Features](#features)
* [Status](#status)
* [Inspiration](#inspiration)


## General info
Main functionality is to store expenses and count them.
Thanks to this project I met the React Router and Redux.
In this example I got to know the concept of application testing and the first time I turned react app on the production mode.

React Router, Redux and Reducers, Jest, Enzyme, Firebase, own Webpack config file, SCSS preprocessor

## Screenshots

![Example screenshot](https://raw.githubusercontent.com/lapinskap/lapinskap.github.io/master/assets/img/projects/proj-2/add.jpg)


![Example screenshot](https://raw.githubusercontent.com/lapinskap/lapinskap.github.io/master/assets/img/projects/proj-2/stretch.jpg)

![Example screenshot](https://raw.githubusercontent.com/lapinskap/lapinskap.github.io/master/assets/img/projects/proj-2/thumb.jpg)

## Technologies
* JavaScript - Ecmascript 6
* SASS - SCSS preprocessor
* Node modules 
* React - JavaScript library: 

Redux                 | React Router          | Jest, Enzyme                       | 
--------------------- | :-------------------: | :---------------------------------:|


## Setup
To run this project, install it locally using yarn:

```
$ cd ./expensify
$ yarn install
$ yarn run dev-server
```
Alternatively you can use npm:

```
$ cd ./expensify
$ npm install
$ npm run dev-server
```

## Code Examples

###### Simple Header component created with fat arrow function - contains React Router

| [file path](./src/components/Header.js)     | 
| :---------------------------------:|

```javascript
const Header = () => (
    <header>
        <h1>Expensify</h1>
        <NavLink to="/" activeClassName="is-active" exact={true}>Dashboard Page </NavLink>
        <NavLink to="/create" activeClassName="is-active"> Create Expense</NavLink>
        <NavLink to="/help"  activeClassName="is-active">Help Page</NavLink>
    </header>
    );

export default Header;
```

> With React’s stateless functional components, each component can be easily tested in isolation. No mocking, state manipulation, special libraries, or tricky test harnesses are needed.

###### ![Reducer](https://redux.js.org/api-reference/combinereducers) example - catches log in and log out actions - contains Redux

| [file path](./src/reducers/auth.js)     | 
| :---------------------------------:|


```javascript
export default (state = {}, action) => {
  switch (action.type) {
    case 'LOGIN':
      return {
        uid: action.uid
      };
    case 'LOGOUT':
      return {};
    default:
      return state;
  }
};
```

## Features

* React Router
* Redux
* Firebase
* Jest
* Enzyme
* SCSS
* Ecmascript 6

## Status
Project is: _finished_

## Inspiration
Project based on Andrew Mead React Course which I catched on Udemy.com.


andrew mead app deploy: https://budget-app.mead.io/
